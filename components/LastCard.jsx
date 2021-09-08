import Image from "next/image";

function LastCard({img, title, description}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mt-3">
            <div className="relative w-60 h-60 md:w-96 md:h-96 ">
              <Image 
                  src={img}
                  layout='fill'
                  className="rounded-xl"
               />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}

export default LastCard
