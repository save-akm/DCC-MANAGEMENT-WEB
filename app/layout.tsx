import type { Metadata } from "next";
import { Inter as FontSans, Poppins} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import ReduxProvider from "@/redux/ReduxProvider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Management",
  description: "dcc web management",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
               {children}
          </ThemeProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
