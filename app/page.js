import Feed from '@/Components/Feed/Feed'
import Sidebar from '@/Components/Sidebar/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-7xl mx-auto'>
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed />
      {/* widget */}

      {/* modal */}

    </main>
  )
}
