import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masterclass IA Gratuite | 10X Votre Productivité",
  description:
    "Formation live gratuite de 75 minutes pour maîtriser l'IA avec la méthode CRAC. Résultats concrets dès le lendemain. Aucune compétence technique requise.",
  keywords: [
    "formation IA gratuite",
    "masterclass IA",
    "ChatGPT formation",
    "apprendre IA Maroc",
    "méthode CRAC",
    "productivité IA",
    "webinar IA gratuit",
  ],
  openGraph: {
    title: "Masterclass IA Gratuite | 10X Votre Productivité",
    description:
      "75 minutes pour maîtriser l'IA. Méthode CRAC, exemples pratiques en direct, feuille de route complète. 100% gratuit.",
    type: "website",
    locale: "fr_MA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterclass IA Gratuite | 10X Votre Productivité",
    description:
      "Formation live gratuite : maîtrisez l'IA avec la méthode CRAC en 75 minutes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2813051285565055');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2813051285565055&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
