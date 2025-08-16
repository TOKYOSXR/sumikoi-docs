// app/layout.tsx
import "./globals.css"
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import Footer from "./components/footer"
import Navbar from "./components/NavBar"
import { ThemeProvider } from "./components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <Navbar />
            <AppSidebar />
            <SidebarInset>
              <div className="pt-16 px-4 flex flex-col min-h-screen gap-4 bg-white text-black dark:bg-[#2c2c2c] dark:text-white">
                {children}
                <Footer />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}