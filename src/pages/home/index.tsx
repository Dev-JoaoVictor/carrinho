import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { api } from '../../services/api'
import { BsCartPlus } from 'react-icons/bs'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';


export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {

  const { addItemCart } = useContext(CartContext);

  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    getProducts();
  }, [])

  function handleAddCartItem(product: ProductsProps) {
    toast.success('Produto adicionado ao carrinho!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    addItemCart(product);
  }

  return (
    <div>
      <main className="w-full max-w-7xl my-10 px-4 mx-auto mb-12">
        <h1 className="font-bold text-2xl text-center text-zinc-600">Produtos em alta</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
          {
            products.map((product) => (
              <section className="w-full" key={product.id}>
                <Link to={`/details/${product.id}`}>
                  <img
                    className='w-full rounded-lg max-h-70 mb-2'
                    src={product.cover} alt="imagem do produto" />
                  <p className='font-medium mt-1 mb-2 text-center'>{product.title}</p>
                </Link>
                <div className='flex gap-3 items-center justify-center'>
                  <strong className='text-zinc-700/90 text-lg'>
                    {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </strong>
                  <button onClick={() => handleAddCartItem(product)} className='bg-slate-600 text-white p-2 rounded-md'>
                    <BsCartPlus size={20} />
                  </button>
                </div>

              </section>
            ))
          }
        </div>
      </main>
    </div>
  )
}