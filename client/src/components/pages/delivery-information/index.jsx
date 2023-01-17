import Header from "./header";
import {FcAlarmClock} from "react-icons/fc";
import {FaMapMarkedAlt} from "react-icons/fa";
import "./styles.scss";
import {IoMdCall} from "react-icons/io";
import {Rating} from 'react-simple-star-rating'
import {useEffect, useState} from "react";
import {MapView} from "../../tools/mapSetting";

const DeliveryInformation = () => {
    const [downEl, setDownEl] = useState(false); // state get down true/false card address
    let classScrollAddress;
    (!downEl) ? classScrollAddress = 'top-9' : classScrollAddress = 'top-44'; // check the false/true then add class
    var scrollTopDefault = 20; // set default variable scroll top

    useEffect(() => {
        // scroll down/up card address
        document.addEventListener('scroll', () => {
            var scrollTopCurrentPage = document.scrollingElement.scrollTop; // get scroll height page current
            (scrollTopCurrentPage <= scrollTopDefault) ? setDownEl(false) : setDownEl(true);
        })
        return MapView
    })

    return (
        <>
            {/* start page */}
            <section className="bg_mirage min-h-full">
                {/* header */}
                <div className="px-12 fixed top-8 z-10 w-full">
                    <Header/>
                </div>
                {/* map */}
                <div id="map" className="h-80 w-full"></div>
                {/* information time from restaurant */}
                <div className="px-8 py-8 w-full fixed bottom-0 z-10">
                    {/* time from restaurant to home  */}
                    <div
                        className={`bg_dark px-7 py-8 rounded-full-main relative ${classScrollAddress} z-10 transition-all ease-in-out duration-700`}
                        id="card_address">
                        {/* button close data courier */}
                        <div className="w-full flex justify-center mb-5">
                            <button
                                className="relative after:content-[''] w-16 h-1 bg_auro_metal_saurus rounded-full bottom-4"
                                onClick={() => downEl ? setDownEl(false) : setDownEl(true)}></button>
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
                        {/* dow down */}
                        <div className="dots_down">
                            {/* white dot */}
                            <p className="dot_white"></p>
                            {/* white dot */}
                            <p className="dot_white"></p>
                            {/* white dot */}
                            <p className="dot_white"></p>
                            {/* white dot */}
                            <p className="dot_white"></p>
                            {/* white dot */}
                            <p className="dot_white"></p>
                            {/* dark dot */}
                            <p className="dot_dark"></p>
                            {/* dark dot */}
                            <p className="dot_dark"></p>
                            {/* dark dot */}
                            <p className="dot_dark"></p>
                        </div>
                        {/* address */}
                        <div className="flex items-center mt-1">
                            {/* map */}
                            <FaMapMarkedAlt size={23} className="text-blue-300"/>
                            {/* delivery time */}
                            <div className="ml-5">
                                <p className="text-xs font-thin color-auro_metal_saurus">Your Address</p>
                                <p className="text-sm mt-1 text-gray-200">3720 Filbert Dr, Danielsville, PA</p>
                            </div>
                        </div>
                    </div>
                    {/* data courier */}
                    <div className="bg-white px-7 py-9 rounded-b-[2.2rem]">
                        <div className="flex justify-between items-center mt-6">
                            {/* image, name and type person */}
                            <div className="flex items-center">
                                {/* image */}
                                <img src={require('../../../assets/images/person.jpg')} alt="image food courier"
                                     className="h-16 w-16 rounded-full"/>
                                <div className="ml-5">
                                    {/* name */}
                                    <p className="text-lg font-bold">Robert Odell</p>
                                    {/* person type */}
                                    <p className="text-sm color-auro_metal_saurus">Food Courier</p>
                                    {/* rating */}
                                    <Rating readonly={true} initialValue={5} fillClassName="color-red_coral" size={18}
                                            className="courier_rate"/>
                                </div>
                            </div>
                            {/* call width food courier */}
                            <button className="bg_malachite p-3 rounded-full"><IoMdCall size={25}
                                                                                        className="text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DeliveryInformation