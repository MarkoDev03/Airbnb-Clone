import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 space-x-4 rounded-xl mx-2 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-[72px] w-[72px]">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
        <div className="">
          <h2>{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  );
}

export default SmallCard;
