import Image from "next/image";

function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mt-3">
            <div className="relative w-60 h-60 md:w-[350px] md:h-[350px]">
              <img 
                  src={img}
                  layout='fill'
                  loading="lazy"
                  className="rounded-xl"
               />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard
