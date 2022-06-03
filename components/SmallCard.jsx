function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 space-x-4 rounded-xl mx-2 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative" style={{ width:100, height:100 }}>
        <img src={img} layout="fill" loading="lazy" className="rounded-lg" />
      </div>
        <div className="">
          <b><h1 style={{ fontSize:18 }}>{location}</h1></b>
          <h2 className="text-gray-700">{distance}</h2>
        </div>
    </div>
  );
}

export default SmallCard;
