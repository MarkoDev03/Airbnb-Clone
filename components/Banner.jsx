import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[750px] 2xl:h-[700px]"
           style={{
               backgroundImage:"url('https://links.papareact.com/0fm')",
               backgroundSize:"cover",
               backgroundRepeat:"no-repeat",
               backgroundPosition:"bottom",
           }}
        >
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm md:text-lg font-semibold">Not sure where to go? Perfect</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Flexible search</button>
            </div>
        </div>
    )
}

export default Banner
