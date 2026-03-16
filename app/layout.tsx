import "./globals.css"

export const metadata = {
  title: "Pandora UI",
  description: "Pandora Jewelry UI Clone"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}