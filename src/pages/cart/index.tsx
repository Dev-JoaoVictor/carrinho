import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";


export function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      {
        cart.length === 0 && (
          <div className="flex flex-col gap-2 justify-center items-center h-96">
            <p className="font-medium text-xl text-gray-400">Seu carrinho está vazio!</p>
            <Link to="/" className="bg-slate-600 text-white font-bold px-4 py-2 rounded-md ml-4">Voltar para a loja</Link>
          </div>
        )
      }
      {
        cart.map((product) => (
          <section key={product.id} className="flex items-center justify-between border-b-2 border-gray-300 ">
            <img src={product.cover} alt="imagem do produto" className="w-28 mb-4" />
            <strong>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
            <div className="flex text-white font-bold gap-6 justify-center items-center bg-slate-600 p-3 rounded-lg">
              <button onClick={() => removeItemCart(product)} className="flex items-center justify-center">-</button>
              <span>{product.amount}</span>
              <button onClick={() => addItemCart(product)} className="  -2xl font-bold flex items-center justify-center">+</button>
            </div>
            <strong className='float-right'>
              SubTotal: {product.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </strong>
          </section>
        ))
      }
      {
        cart.length !== 0 && (
          <p className="font-bold mt-4">Total: {total}</p>
        )
      }
    </div>
  )
}