import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useState, createContext } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import { useRouter } from 'next/dist/client/router'
import Logo from "../media/logo.png"

export const LocationContext = createContext()

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter()

  const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startDate)
      setEndDate(ranges.selection.endDate)
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
       setSearchInput("")
       setStartDate(new Date())
       setEndDate(new Date())
  }

  const search = () => {
     router.push({
       pathname:'/search',
       query: {
          location:encodeURIComponent(searchInput),
          startDate:startDate.toISOString(),
          endDate:endDate.toISOString(),
          noOfGuests:noOfGuests
       }
     })
     resetInput()
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-1 px-1 md:p-3 md:px-10">
      <div 
      onClick={() => router.push('/')}
      className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          src={Logo.src}
          layout="fill"
          loading="lazy"
          objectFit="contain" 

          style={{height:"100%"}}
        />
      </div>

      <div className="flex col-span-2 md:col-span-1 m-2 justify-center items-center md:border-2 rounded-full md:py-1 md:shadow-sm text-gray-600 text-sm placeholder-gray-400">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="md:flex-grow md:pl-5 bg-transparent outline-none text-sm text-center md:text-left"
        />
        <SearchIcon className="hidden md:inline-flex h-8  text-white rounded-full p-2 cursor-pointer md:mx-2 " style={{ backgroundColor:"#d70466" }} />
        <div className="flex md:hidden md:auto mr-2  w-auto md:col-span-1 md:space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline-flex h-5" />
        <div className="flex items-center space-x-1 border-2 p-1 rounded-full bg-white">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      </div>

      <div className="hidden md:flex  w-auto md:col-span-1 md:space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline-flex h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col mx-auto mt-5" style={{ position:"fixed", top:window.innerWidth > 650 ? 65 : 40, left: 0, justifyContent:"flex-start", alignItems:"center", width:"100%", backgroundColor:"rgba(0,0,0,0.5)", height:"100vh" }}>
          <div className="bg-white rounded-lg p-3 mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#d70466"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
              <UserIcon className="h-5" />
              <input 
                 value={noOfGuests}
                 onChange={(e) => setNoOfGuests(e.target.value)}
                 type="number" 
                 min={1}
                 className="w-12 text-lg outline-none " style={{ color:"#d70466" }}/>
          </div>
          <div className="flex pb-3 md:pb-0">
              <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
              <button  className="flex-grow" style={{ color:"#d70466" }}  onClick={search}>Search</button>
          </div>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;
