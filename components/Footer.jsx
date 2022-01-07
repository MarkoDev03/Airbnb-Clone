import { Facebook , Instagram, Twitter} from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="grid grid-cols-1  gap-y-5 md:gap-y-10  pb-1 md:grid-cols-4 pl-16 pt-8 pr-8 md:px-32 md:pt-14 bg-gray-100 text-gray-600 ">
            <div className="space-y-2 text-base text-gray-800 border-b-2 border-gray-200  pb-5 md:border-none">
                <h4 className="font-bold">ABOUT</h4>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
                <p>Airbnb for Job</p>
                <p>Employment</p>
                <p>Letter from the founder</p>
                <p>Airbnb 2021.</p>
                <p>How Airbnb works</p>
            </div>

            <div className="space-y-2 text-base text-gray-800 border-b-2 border-gray-200  pb-5 md:border-none">
                <h4 className="font-bold">COMUNITY</h4>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Marko Perović</p>
                <p>Recommended guests</p>
                <p>Diversity and belonging</p>
                <p>Airbnb associates</p>
                <p>For special needs</p>
            </div>

            <div className="space-y-2 text-base text-gray-800 border-b-2 border-gray-200 pb-5 md:border-none">
                <h4 className="font-bold">HOST</h4>
                <p>Community Center</p>
                <p>Host in your home</p>
                <p>Organize an online experience</p>
                <p>Organize the experience</p>
                <p>Responsible hosting</p>
                <p>Material Center</p>
            </div>

            <div className="space-y-2 text-base text-gray-800   pb-5 md:border-none">
                <h4 className="font-bold">SUPPORT</h4>
                <p>Our response to COVID-19</p>
                <p>Help Center</p>
                <p>Cancellation options</p>
                <p>Neighborhood support</p>
                <p>Trust and security</p>
            </div>
            <div className="flex col-span-1 md:col-span-4 border-t border-gray-300 justify-between pt-3">
                  <p className="text-gray-800 text-sm md:text-lg">© 2021 Airbnb, Inc. · Privacy · Terms · Site Map</p>
                 <div className="flex">
                 <Facebook className="text-xl m-3" ></Facebook>
                 <Instagram  className="text-xl m-3"></Instagram>
                 <Twitter  className="text-xl m-3"></Twitter>
         
                 </div>
            </div>
        </div>
    )
}

export default Footer
