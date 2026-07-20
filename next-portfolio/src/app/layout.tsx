import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { BackgroundWrapper } from "@/components/3d/BackgroundWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tostes | Desenvolvedor Full Stack & AI Engineer",
    template: "%s | Tostes",
  },
  description: "Desenvolvedor Full Stack em Ribeirão Preto especializado em criar sites de alta performance, sistemas web complexos e integração com Inteligência Artificial. Transforme sua ideia em software premium.",
  keywords: [
    "Alessandro Tostes",
    "Desenvolvedor Full Stack",
    "Engenheiro de Software",
    "Desenvolvedor em Ribeirão Preto",
    "Fazer site em Ribeirão Preto",
    "Criação de Sites",
    "Desenvolvimento Web",
    "Programador Next.js",
    "React Developer",
    "Automação com IA",
    "Sistemas Web",
    "Freelancer Ribeirão Preto"
  ],
  authors: [{ name: "Alessandro Tostes", url: "https://www.tostesdev.com" }],
  creator: "Alessandro Tostes",
  publisher: "Alessandro Tostes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.tostesdev.com",
    title: "Alessandro Tostes | Desenvolvedor Full Stack & AI Engineer",
    description: "Especialista em desenvolvimento web de alta performance. Crie sites e sistemas que convertem e escalam. Fale comigo em Ribeirão Preto.",
    siteName: "Portfolio Alessandro Tostes",
    images: [
      {
        url: "/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Alessandro Tostes Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Tostes | Desenvolvedor Full Stack",
    description: "Desenvolvimento web de alto nível em Ribeirão Preto. Next.js, React e IA.",
    creator: "@alessandrotostes",
  },
  metadataBase: new URL("https://www.tostesdev.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/img/iconetostes.ico' },
      { url: '/img/logo.webp', type: 'image/webp' },
    ],
    shortcut: '/img/logo.webp',
    apple: '/img/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alessandro Tostes",
    "url": "https://www.tostesdev.com",
    "jobTitle": "Desenvolvedor Full Stack & AI Engineer",
    "sameAs": [
      "https://github.com/alessandrotostes",
      "https://www.linkedin.com/in/alessandro-tostes/",
      "https://www.instagram.com/alessandrotostes/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ribeirão Preto",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <html lang="pt-BR" className={cn(inter.variable, spaceGrotesk.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-primary selection:text-black relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundWrapper />
          <SmoothScroll>
            <Header />
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
