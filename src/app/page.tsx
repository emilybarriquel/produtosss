'use client'

import ProductList from '../components/ProductList'

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-500 border-2 border-black">
            <h1 className="text-3xl font-bold text-center text-orange-600 my-8">Catálogo de Produtos</h1>
            <ProductList />
        </main>
    )
}
