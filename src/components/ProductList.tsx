'use client';

import { useState } from 'react';
import { Product } from '@/types/Product';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([{
        id: 1,
        name: 'Gabinete',
        price: 100.00,
        category: 'Periférico',
    }]);

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    return (
        <div className="px-6">
            <ProductForm onAdd={addProduct} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}