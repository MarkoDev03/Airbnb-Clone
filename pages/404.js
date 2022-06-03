import Link from 'next/link'

export default function FourOhFour() {
  return (
      <div className='bg-white flex justify-center items-center' style={{height:"100vh"}}>
                 <div className='flex justify-center items-center flex-col'>
                       <h1 className='font-semibold ' style={{fontSize:"150px", color:"#d70466"}}>404</h1>
                       <h1 className='font-semibold text-gray-700' style={{fontSize:"37px", marginTop:"-55px"}}>Page Not Found</h1>
                       <Link href='/' className='text-blue-900 underline' style={{fontSize:"30px"}}>Go back to Home</Link>
                 </div>
      </div>
  )
}