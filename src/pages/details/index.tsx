import toast from 'react-hot-toast';
import { BsCartPlus } from "react-icons/bs";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { ProductsProps } from "../home";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";

export function Details() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { addItemCart } = useContext(CartContext);
  const [product, setProduct] = useState<ProductsProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProduct();

  }, [id])

  function handleAddCartItem(product: ProductsProps) {
    toast.success('Produto adicionado ao carrinho!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    addItemCart(product);
    navigate('/cart');
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto mb-12 ">
      {product && (
        <section className='flex flex-col mt-20 lg:flex-row gap-8 justify-center items-center'>
          <img className='w-full rounded-lg max-h-72 object-contain' src={product?.cover} alt={product.title} />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-2xl">{product.title}</p>
            <p className='text-justify'>{product.description}</p>
            <div className='flex gap-3 items-center'>
              <button onClick={() => product && handleAddCartItem(product)} className='bg-slate-600 text-white p-2 rounded-md'>
                <BsCartPlus size={20} />
              </button>
              <strong className='text-zinc-700/90 text-lg'>
                {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </strong>
            </div>
          </div>
        </section>
      )
      }
    </main>
  )
}