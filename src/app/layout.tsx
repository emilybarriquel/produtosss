import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Produtos',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body className={`${inter.className} bg-orange-50 text-orange-700 min-h-screen flex items-start justify-center`}>
        <main className="max-w-5xl mx-auto p-6">
        <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-bold mb-6 text-orange-500 border-2 border-black p-4 align-center">Produtos</h1></div>
            {children}
        </main>
        </body>
        </html>
    )
}
