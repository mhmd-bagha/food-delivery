import Back from "../../tools/back";
import {TbCurrentLocation} from "react-icons/tb";

const Header = () => {
  return (
      <>
          {/* header */}
          <div className="flex justify-between items-center">
              {/* back button */}
              <Back/>
              {/* current location */}
              <button id="current_location" className="bg_dark p-2.5 rounded-2xl border border-gray-700">
                  <TbCurrentLocation size={17} className="text-white"/></button>
          </div>
      </>
  )
}
export default Header