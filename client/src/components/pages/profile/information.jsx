import {FaPhoneAlt} from "react-icons/fa";
import {TfiPencil} from "react-icons/tfi";
import {HiOutlineCreditCard, HiOutlineMail} from "react-icons/hi";
import {BsTruck} from "react-icons/bs";

const Information = ({user}) => {
    return (
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
                        <p className="text-sm font-medium text-gray-200 mt-2">{user.phone_number ? `+${user.phone_number}` : 'No phone number'}</p>
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
                        <p className="text-sm font-medium text-gray-200 mt-2">{user.email}</p>
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
    )
}

export default Information