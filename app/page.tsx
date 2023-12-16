import NextImage from './NextImage';
import ImageTag from './ImageTag';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="grid grid-cols-2 gap-10">
        <NextImage />
        <ImageTag />
      </div>
    </main>
  )
}
