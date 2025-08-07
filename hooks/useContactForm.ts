import { useState, useCallback } from 'react'
import { emailService } from '@/lib/email-service'
import { SecurityUtils } from '@/lib/security'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormState {
  data: FormData
  isSubmitting: boolean
  status: 'idle' | 'success' | 'error' | 'rate-limited'
  message: string
  errors: Partial<FormData>
}

export function useContactForm() {
  const [state, setState] = useState<FormState>({
    data: { name: '', email: '', subject: '', message: '' },
    isSubmitting: false,
    status: 'idle',
    message: '',
    errors: {},
  })

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: SecurityUtils.sanitizeInput(value) },
      errors: { ...prev.errors, [field]: undefined }, // Clear error when user types
    }))
  }, [])

  const validateForm = useCallback((data: FormData): Partial<FormData> => {
    const errors: Partial<FormData> = {}
    
    // Trim values only for validation
    const trimmedName = data.name.trim()
    const trimmedEmail = data.email.trim()
    const trimmedSubject = data.subject.trim()
    const trimmedMessage = data.message.trim()

    if (!trimmedName) {
      errors.name = 'Name is required'
    } else if (trimmedName.length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    if (!trimmedEmail) {
      errors.email = 'Email is required'
    } else if (!SecurityUtils.isValidEmail(trimmedEmail)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!data.subject.trim()) {
      errors.subject = 'Subject is required'
    } else if (data.subject.length < 5) {
      errors.subject = 'Subject must be at least 5 characters'
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required'
    } else if (data.message.length < 10) {
      errors.message = 'Message must be at least 10 characters'
    } else if (data.message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters'
    }

    return errors
  }, [])

  const submitForm = useCallback(async () => {
    setState(prev => ({ ...prev, isSubmitting: true, status: 'idle', message: '' }))

    try {
      // Validate form
      const errors = validateForm(state.data)
      if (Object.keys(errors).length > 0) {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          status: 'error',
          message: 'Please fix the errors below',
          errors,
        }))
        return
      }

      // Check rate limiting
      const clientId = `${state.data.email}-${Date.now().toString().slice(0, -5)}` // 5-minute window
      if (!SecurityUtils.checkRateLimit(clientId, 3, 300000)) { // 3 requests per 5 minutes
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          status: 'rate-limited',
          message: 'Too many requests. Please wait a few minutes before trying again.',
        }))
        return
      }

      // Send email
      const result = await emailService.sendContactEmail({
        from_name: state.data.name,
        from_email: state.data.email,
        subject: state.data.subject,
        message: state.data.message,
      })

      if (result.success) {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          status: 'success',
          message: result.message,
          data: { name: '', email: '', subject: '', message: '' }, // Reset form
          errors: {},
        }))
      } else {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          status: 'error',
          message: result.message,
        }))
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        status: 'error',
        message: 'An unexpected error occurred. Please try again.',
      }))
    }
  }, [state.data, validateForm])

  const resetForm = useCallback(() => {
    setState({
      data: { name: '', email: '', subject: '', message: '' },
      isSubmitting: false,
      status: 'idle',
      message: '',
      errors: {},
    })
  }, [])

  const clearStatus = useCallback(() => {
    setState(prev => ({ ...prev, status: 'idle', message: '' }))
  }, [])

  return {
    ...state,
    updateField,
    submitForm,
    resetForm,
    clearStatus,
  }
}
