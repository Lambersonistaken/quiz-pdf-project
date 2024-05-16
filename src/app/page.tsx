
import {Button} from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col flex-1'>
      <main className="flex min-h-screen items-center flex-col flex-1">
      <h1 className="text-6xl font-bold mt-6 bg-gradient-to-r from-rose-200 to-rose-600 bg-clip-text text-transparent">AI PDF Quiz Creator</h1>
      <h2 className='mt-10 text-2xl font-bold text-white' >PDF Dosyalarınızı yükleyin ve onlardan harika quizler üretin!</h2>
      <Button className='mt-20 py-8 px-14 bg-gradient-to-r from-rose-500 to-rose-700 text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out'>
          Başla
        </Button>
    </main>
    <footer className='relative mt-0 mb-10 text-center'>
      
    </footer>
    </div>
    
  )
}
