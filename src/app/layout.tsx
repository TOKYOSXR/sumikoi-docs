import Footer from "./components/footer";
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

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
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col min-h-screen p-4 gap-4">
              {/* Botão para abrir/fechar sidebar */}
              <SidebarTrigger className="self-start" />
              {/* Páginas sendo renderizadas */}
              {children}
              {/* Footer no final da página */}
              <Footer />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

