import Image from 'next/image'

export default function Home() {
  const numTimes = 12;
  return (
    <main className="min-h-screen p-24">
      <h2 className='text-center pb-24 tracking-tight text-2xl font-bold'>Image Comparison</h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="rounded-lg border bg-white text-card-foreground shadow-sm w-full max-w-2xl mx-4 px-4 py-2">
          <h4>Next Image</h4>
          <code></code>
          {Array.from({ length: numTimes }, (_, index) => (
            <Image key={index} src="/chicago-next-img.jpg" width="1000" height="500" alt="we chicago-an" className="mb-6"/>
          ))}
        </div>
        <div className="rounded-lg border bg-white text-card-foreground shadow-sm w-full max-w-2xl mx-4 px-4 py-2">
          <h4>Web Image</h4>
          
          {Array.from({ length: numTimes }, (_, index) => (
            <img src="/chicago-img.jpg" width="1000" height="500" alt="we chicago-an" className="mb-6" />
          ))}
        </div>
      </div>
    </main>
  )
}
