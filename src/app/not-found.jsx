import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='bg-red-500'>
        <h1>OOPS! 404!</h1>
        <div >
          <figure>
            <Image className='rounded-sm' src="https://http.cat/images/404.jpg"  width={750} height={600} alt="Cachorro cavando"/>
          </figure>
        </div>
        <p>Página não encontrada!</p>
    </div>
  )
}