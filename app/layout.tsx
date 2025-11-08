import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Enok Rocha | Test Automation Analyst & QA Leader",
  description: "Test Automation Analyst at Base2 with expertise in API, E2E, and mobile testing. Specialized in Selenium, WebdriverIO, Rest Assured, and BDD with Gherkin. Mentor and technical leader in Quality Assurance.",
  keywords: ["QA Engineer", "Test Automation", "Selenium", "WebdriverIO", "Rest Assured", "BDD", "Gherkin", "Quality Assurance", "Software Testing"],
  authors: [{ name: "Enok Rocha" }],
  openGraph: {
    title: "Enok Rocha | Test Automation Analyst",
    description: "Test Automation Analyst specialized in building quality software through automated testing",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <BackgroundAnimation />
            <Navigation />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

