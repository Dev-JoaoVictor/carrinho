import { BsCartPlus } from 'react-icons/bs'

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl my-10 text-center text-zinc-600">Produtos em alta</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
          <section className="w-full ">
            <img
              className='w-full rounded-lg max-h-70 mb-2'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDELYyHgSKezvUcI7yGM-Vy3hnl1FOcHfzg&usqp=CAU" alt="imagem do produto" />
            <p className='font-medium mt-1 mb-2 text-center'>Airpods pro</p>
            <div className='flex gap-3 items-center justify-center'>
              <strong className='text-zinc-700/90 text-lg'>
                R$ 1000
              </strong>
              <button className='bg-slate-600 text-white p-2 rounded-md'>
                <BsCartPlus size={20} />
              </button>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  )
}