import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sistemix - Web Development, AI Agents & Automation Solutions",
    template: "%s | Sistemix",
  },
  description: "Sistemix - Professional web development, website creation, AI agents development, and business automation services in Romania and Europe. Custom solutions for startups and businesses.",
  keywords: [
    // Brand
    "Sistemix",
    "Sistemix web development",
    "Sistemix Romania",
    "Sistemix automation",
    "Sistemix AI agents",
    // Web Development - Română
    "creare website",
    "creare site web",
    "dezvoltare website",
    "dezvoltare site web",
    "creare site",
    "website personalizat",
    "site web personalizat",
    "dezvoltare web",
    "programare website",
    "realizare site web",
    // Web Development - Engleză
    "web development",
    "web developer",
    "website development",
    "website creation",
    "custom web development",
    "web development services",
    "professional web development",
    "modern web development",
    "responsive web development",
    "web development Romania",
    "web developer Romania",
    "Romanian web developer",
    "European web developer",
    // AI Agents - Română
    "agenti AI",
    "agenti artificial intelligence",
    "dezvoltare agenti AI",
    "creare agenti AI",
    "agenti inteligenti",
    "sisteme AI",
    // AI Agents - Engleză
    "AI agents",
    "AI agent development",
    "artificial intelligence agents",
    "AI automation",
    "intelligent agents",
    "AI agent creation",
    "custom AI agents",
    "AI agents Romania",
    "AI developer Romania",
    "AI solutions Romania",
    // Automatizare - Română
    "automatizare",
    "automatizare business",
    "automatizare procese",
    "automatizare workflow",
    "soluții automatizare",
    "automatizare Romania",
    // Automatizations - Engleză
    "automatizations",
    "automation",
    "business automation",
    "process automation",
    "workflow automation",
    "automation solutions",
    "automation Romania",
    "business process automation",
    "digital automation",
    // Romania & Europe
    "Romania",
    "Europe",
    "Romanian developer",
    "European web developer",
    "Romanian tech services",
    "European tech solutions",
    // Startups
    "startups",
    "startup development",
    "startup tech solutions",
    "startup web development",
    "startup automation",
    "startup AI solutions",
    // Alte keywords relevante
    "tech consulting",
    "software development",
    "premium tech solutions",
    "digital transformation",
    "technology services",
    "custom software solutions",
  ],
  authors: [{ name: "Sistemix" }],
  creator: "Sistemix",
  publisher: "Blaga Razvan Antonio PFA",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sistemix.net"),
  icons: {
    icon: '/logo-dark2.png',
    shortcut: '/logo-dark2.png',
    apple: '/logo-dark2.png',
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "ro": "/ro",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sistemix.net",
    siteName: "Sistemix",
    title: "Sistemix - Web Development, AI Agents & Automation Solutions",
    description: "Sistemix offers professional web development, website creation, AI agents development, and business automation services in Romania and Europe. Specialized solutions for startups and businesses.",
    images: [
      {
        url: "/logo-dark2.png",
        width: 1200,
        height: 630,
        alt: "Sistemix - Web Development, AI Agents & Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemix - Web Development, AI Agents & Automation Solutions",
    description: "Professional web development, AI agents, and automation solutions in Romania. Contact Sistemix for premium tech services.",
    images: ["/logo-dark2.png"],
  },
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sistemix.net";
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-dark2.png" />
        <link rel="apple-touch-icon" href="/logo-dark2.png" />
        {/* Organization Schema - Focus pe Sistemix */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sistemix",
              legalName: "Blaga Razvan Antonio PFA",
              url: baseUrl,
              logo: `${baseUrl}/logo-dark2.png`,
              description: "Sistemix provides professional web development, website creation, AI agents development, and business automation services. Serving startups and businesses in Romania and Europe.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "RO",
                addressRegion: "Romania",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "razvanblaga10@gmail.com",
                telephone: "+40772169637",
                contactType: "Customer Service",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  addressCountry: "RO",
                },
                geoRadius: {
                  "@type": "Distance",
                  name: "Europe",
                },
              },
              targetAudience: {
                "@type": "Audience",
                audienceType: ["Startups", "Businesses", "Entrepreneurs"],
              },
              offers: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    alternateName: "Creare Website",
                    description: "Professional web development and website creation services for businesses and startups",
                    serviceType: "Web Development",
                    areaServed: {
                      "@type": "Country",
                      name: "Romania",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Agents Development",
                    alternateName: "Agenti AI",
                    description: "Custom AI agents and artificial intelligence solutions development",
                    serviceType: "AI Development",
                    areaServed: {
                      "@type": "Country",
                      name: "Romania",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Automation",
                    alternateName: "Automatizare Business",
                    description: "Business process automation and workflow optimization services",
                    serviceType: "Automation",
                    areaServed: {
                      "@type": "Country",
                      name: "Romania",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tech Consulting",
                    alternateName: "Consultanță Tehnologică",
                    description: "Technology consulting for startups and businesses",
                    serviceType: "Consulting",
                    areaServed: {
                      "@type": "Country",
                      name: "Romania",
                    },
                  },
                },
              ],
              sameAs: [
                "https://www.linkedin.com/in/razvan-blaga-652a49306/",
                "https://github.com/BlagaRa",
              ],
            }),
          }}
        />
        
        {/* Service Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Web Development",
              alternateName: "Creare Website",
              description: "Sistemix provides professional web development and website creation services including custom websites, web applications, and responsive design. Specialized in modern web technologies and frameworks.",
              provider: {
                "@type": "Organization",
                name: "Sistemix",
                url: baseUrl,
              },
              serviceType: "Web Development",
              areaServed: {
                "@type": "Country",
                name: "Romania",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: `${baseUrl}/servicii`,
              },
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Agents Development",
              alternateName: "Agenti AI",
              description: "Sistemix offers custom AI agents and artificial intelligence solutions for businesses. Development of intelligent agents for automation and process optimization.",
              provider: {
                "@type": "Organization",
                name: "Sistemix",
                url: baseUrl,
              },
              serviceType: "AI Development",
              areaServed: {
                "@type": "Country",
                name: "Romania",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: `${baseUrl}/servicii`,
              },
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Business Automation",
              alternateName: "Automatizare Business",
              description: "Sistemix provides business process automation and workflow optimization services. Custom automation solutions for startups and businesses.",
              provider: {
                "@type": "Organization",
                name: "Sistemix",
                url: baseUrl,
              },
              serviceType: "Automation",
              areaServed: {
                "@type": "Country",
                name: "Romania",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: `${baseUrl}/servicii`,
              },
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Tech Consulting",
              alternateName: "Consultanță Tehnologică",
              description: "Sistemix offers technology consulting services for startups and businesses. Expert advice on web development, AI solutions, and automation strategies.",
              provider: {
                "@type": "Organization",
                name: "Sistemix",
                url: baseUrl,
              },
              serviceType: "Consulting",
              areaServed: {
                "@type": "Country",
                name: "Romania",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: `${baseUrl}/servicii`,
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
