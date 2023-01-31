import Header from "../login/header";
import {IoCloseSharp} from "react-icons/io5";
import {AiOutlinePlus} from "react-icons/ai";
import {FaPhoneAlt} from "react-icons/fa";
import {HiOutlineCreditCard, HiOutlineMail} from "react-icons/hi";
import {BsTruck} from "react-icons/bs";
import {TfiPencil} from "react-icons/tfi";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <>
            {/* image header */}
            <div className="bg_mirage h-1/3 flex justify-center">
                {/* text header and close page */}
                <div className="flex justify-between items-center pt-16 absolute z-10 w-full px-6">
                    {/* empty space */}
                    <div className="invisible"></div>
                    {/* text header */}
                    <p className="text-gray-200 text-lg font-medium text-center ml-10">My Profile</p>
                    {/* button close page */}
                    <Link to='/' className="bg_dark rounded-2xl p-2.5"><IoCloseSharp size={20} className="text-gray-200"/></Link>
                </div>
                {/* header */}
                <Header/>
            </div>
            {/* content */}
            <div className="bg_dark px-8 py-16 rounded-t-main fixed bottom-0 w-full h-4/5 z-10">
                {/* profile image button add image person name */}
                <div className="relative -top-28 pt-2.5">
                    <div className="flex justify-center items-baseline">
                        {/* profile img */}
                        <img src={require('../../../assets/images/person.jpg')} alt="image profile"
                             className="w-20 h-20 rounded-full"/>
                        {/* button add image to profile */}
                        <label htmlFor="image_profile" className="p-0.5 rounded-full bg-white relative right-6 bottom-0 border border-gray-800 outline-0 cursor-pointer">
                            <input type="file" name="image_profile" id="image_profile" hidden/>
                            <AiOutlinePlus size={17} className="text-black"/>
                        </label>
                    </div>
                    {/* person name */}
                    <p className="text-lg text-gray-200 font-bold text-center mt-2 mr-4">Ebrahimi Bagha</p>
                </div>
                {/* user information */}
                <div className="relative -top-20">
                    {/* phone number */}
                    <div className="flex items-stretch py-5">
                        {/* icon */}
                        <div className="bg_mirage py-5 px-3.5 rounded-xl">
                            <FaPhoneAlt size={18} className="color-burlywood"/>
                        </div>
                        {/* placeholder and phone */}
                        <div className="flex justify-between items-baseline w-full">
                            {/* number and placeholder */}
                            <div className="ml-7">
                                {/* placeholder */}
                                <p className="text-sm font-normal color-auro_metal_saurus">Phone Number</p>
                                {/* phone number */}
                                <p className="text-sm font-medium text-gray-200 mt-2">+989330343126</p>
                            </div>
                            {/* button edit */}
                            <button type="button" className="p-2 bg_gunmetal rounded-full"><TfiPencil size={15}
                                                                                                      className="color-auro_metal_saurus"/>
                            </button>
                        </div>
                    </div>
                    {/* email */}
                    <div className="flex items-stretch py-5">
                        {/* icon */}
                        <div className="bg_mirage py-5 px-3.5 rounded-xl">
                            <HiOutlineMail size={18} className="color-burlywood"/>
                        </div>
                        {/* placeholder and phone */}
                        <div className="flex justify-between items-baseline w-full">
                            {/* number and placeholder */}
                            <div className="ml-7">
                                {/* placeholder */}
                                <p className="text-sm font-normal color-auro_metal_saurus">Email</p>
                                {/* phone number */}
                                <p className="text-sm font-medium text-gray-200 mt-2">mabrahimiabgha@gmail.com</p>
                            </div>
                            {/* button edit */}
                            <button type="button" className="p-2 bg_gunmetal rounded-full"><TfiPencil size={15}
                                                                                                      className="color-auro_metal_saurus"/>
                            </button>
                        </div>
                    </div>
                    {/* payment methods */}
                    <div className="flex items-stretch py-5">
                        {/* icon */}
                        <div className="bg_mirage py-5 px-3.5 rounded-xl">
                            <HiOutlineCreditCard size={18} className="color-burlywood"/>
                        </div>
                        {/* placeholder and phone */}
                        <div className="flex justify-between items-baseline w-full">
                            {/* number and placeholder */}
                            <div className="ml-7">
                                {/* placeholder */}
                                <p className="text-sm font-normal color-auro_metal_saurus">Payment Methods</p>
                                {/* phone number */}
                                <p className="text-sm font-medium text-gray-200 mt-2">Credit Card, Apple Pay</p>
                            </div>
                            {/* button edit */}
                            <button type="button" className="p-2 bg_gunmetal rounded-full"><TfiPencil size={15}
                                                                                                      className="color-auro_metal_saurus"/>
                            </button>
                        </div>
                    </div>
                    {/* address */}
                    <div className="flex items-stretch py-5">
                        {/* icon */}
                        <div className="bg_mirage py-5 px-3.5 rounded-xl">
                            <BsTruck size={18} className="color-burlywood"/>
                        </div>
                        {/* placeholder and phone */}
                        <div className="flex justify-between items-baseline w-full">
                            {/* number and placeholder */}
                            <div className="ml-7">
                                {/* placeholder */}
                                <p className="text-sm font-normal color-auro_metal_saurus">Address</p>
                                {/* phone number */}
                                <p className="text-sm font-medium text-gray-200 mt-2">3720 Filbert Dr, Danielsville,
                                    PA</p>
                            </div>
                            {/* button edit */}
                            <button type="button" className="p-2 bg_gunmetal rounded-full"><TfiPencil size={15}
                                                                                                      className="color-auro_metal_saurus"/>
                            </button>
                        </div>
                    </div>
                    {/* button save profile */}
                    <button type="submit"
                            className="bg_red_coral text-lg text-white font-bold py-3 mt-10 w-full rounded-2xl">Save
                    </button>
                </div>
            </div>
            {/* bg class */}
            <div className="bg_content_glass"></div>
        </>
    )
}
export default Profile