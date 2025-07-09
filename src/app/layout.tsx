import Footer from "./components/footer";
import "./globals.css";
import { SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Navbar from "./components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <SidebarProvider>
          <Navbar />
          <AppSidebar />
          <SidebarInset>
            <div className="pt-16 px-4 flex flex-col min-h-screen gap-4">
              {children}
              <Footer />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

