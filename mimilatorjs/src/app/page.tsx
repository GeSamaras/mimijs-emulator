import EmulatorComponent  from './EmulatorComponent'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}

const Emulator = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <EmulatorComponent />
    </div>
  )
}