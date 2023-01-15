import Header from "./header";
import {FcAlarmClock} from "react-icons/fc";
import {FaMapMarkedAlt} from "react-icons/fa";

const DeliveryInformation = () => {
    return (
        <>
            {/* start page */}
            <section className="bg_mirage min-h-full">
                {/* header */}
                <div className="px-12 py-8">
                    <Header/>
                </div>
                {/* information time from restaurant and data courier */}
                <div className="px-12 py-8 w-full fixed bottom-0">
                    {/* time from restaurant to home  */}
                    <div className="bg_dark px-6 py-8 rounded-full-main">
                        {/* line */}
                        <div className="w-full flex justify-center mb-4">
                            <div className="relative after:content-[''] w-16 h-1 bg_auro_metal_saurus rounded-full bottom-4"></div>
                        </div>
                        {/* time */}
                        <div className="flex items-center">
                            {/* clock */}
                            <FcAlarmClock size={23}/>
                            {/* delivery time */}
                            <div className="ml-5">
                                <p className="text-xs font-thin color-auro_metal_saurus">Delivery Time</p>
                                <p className="text-sm mt-1 text-gray-200">26 minutes</p>
                            </div>
                        </div>
                        {/* address */}
                        <div className="flex items-center mt-20">
                            {/* map */}
                            <FaMapMarkedAlt size={23} className="text-blue-300"/>
                            {/* delivery time */}
                            <div className="ml-5">
                                <p className="text-xs font-thin color-auro_metal_saurus">Your Address</p>
                                <p className="text-sm mt-1 text-gray-200">3720 Filbert Dr, Danielsville, PA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DeliveryInformation