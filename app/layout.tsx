import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// const kalamRegular = localFont({
//     src: "./fonts/Kalam-Regular.ttf",
//     variable: "--font-kalam-regular",
//     weight: "100 900",
// });

export const metadata: Metadata = {
    openGraph: {
        type: "website",
        url: "https://aneeshvempaty.com",
        title: "Aneesh Vempaty",
        description: "Aneesh Vempaty's personal portfolio",
        images: [
            {
                url: "/images/Preview-Portfolio-Picture.png",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
