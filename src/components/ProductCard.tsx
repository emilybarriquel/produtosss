import { Product } from '@/types/Product';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all border border-pink-100">
            <h2 className="text-xl font-bold mb-2 text-orange-600">{product.name}</h2>
            <p className="text-black">Categoria: {product.category}</p>
            <p className="text-orange-600 font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
        </div>
    );
}
