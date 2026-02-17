import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: 'IDARA AL-KHAIR | Welfare Society',
    description: 'Official Digital Ecosystem of Idara Al-Khair Welfare Society.',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body>{children}</body>
        </html>
    );
}
