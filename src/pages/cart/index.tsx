export function Cart() {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-gray-300 ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDELYyHgSKezvUcI7yGM-Vy3hnl1FOcHfzg&usqp=CAU" alt="imagem do produto" className="w-28 mb-4" />
        <strong>Preço: R$ 1000</strong>
        <div className="flex gap-3 justify-center items-center">
          <button className="bg-slate-600 text-white font-bold  flex items-center justify-center px-2">-</button>
          <span>2</span>
          <button className="bg-slate-600 text-white font-bold flex items-center justify-center px-2">+</button>
        </div>
        <strong className='float-right'>
          SubTotal: R$1.000
        </strong>
      </section>
      <p className="font-bold mt-4">Total: R$1.000</p>
    </div>
  )
}