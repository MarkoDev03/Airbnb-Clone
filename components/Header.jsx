import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import { useRouter } from 'next/dist/client/router'
import Geocode from "react-geocode";

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
          location:searchInput,
          startDate:startDate.toISOString(),
          endDate:endDate.toISOString(),
          noOfGuests:noOfGuests
       }
     })
     resetInput()
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      <div 
      onClick={() => router.push('/')}
      className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain" 
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-1 md:shadow-sm text-gray-600 text-sm placeholder-gray-400">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="flex-grow md:pl-5 bg-transparent outline-none text-sm text-center md:text-left"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 " />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline-flex h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
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
                 className="w-12 text-lg outline-none text-red-400" />
          </div>
          <div className="flex">
              <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
              <button  className="flex-grow text-red-500" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
