export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">
              <span className="text-blue-500">Manasseh</span>
              <span className="text-pink-500">Telle</span>
            </p>
            <p className="text-sm text-muted-foreground">ICT Infrastructure Support & Full-Stack Developer</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} <span className="text-blue-500">Manasseh</span> <span className="text-pink-500">Telle</span>. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
