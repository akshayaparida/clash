import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
     <Image src="/404Error.svg" width={500} height={500} alt="404 error"></Image>
      <Link href="/">Return Home</Link>
    </div>
  )
} 