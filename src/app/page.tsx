"use client"
import Image from "next/image";
import { useState, useMemo } from "react";

export default function Home() {
    const [active, setActive] = useState(false);

    return (
        <div>
            <div className="bg-[#49BBBD]">
                <div className="container mx-auto">
                    <div className="header flex flex-row justify-between items-center h-20 text-white">
                        <div className="font-bold text-xl">
                            <a href="#">TOTC{active?"true":"false"}</a>
                        </div>
                        <div className="">
                            <ul className="hidden lg:flex">
                                <li className="mr-20">
                                    <a href="#">Home</a>
                                </li>
                                <li className="mr-20">
                                    <a href="#">Courses</a>
                                </li>
                                <li className="mr-20">
                                    <a href="#">Careers</a>
                                </li>
                                <li className="mr-20">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="mr-20">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="mr-6">
                                    <a
                                        href="#"
                                        className="bg-white text-[#5B5B5B] font-medium hover:bg-white/[.3] hover:text-white py-3 px-12 rounded-full"
                                    >
                                        Login
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a
                                        href="#"
                                        className="bg-white text-[#5B5B5B] font-medium hover:bg-white/[.3] hover:text-white py-3 px-9 rounded-full"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                            <div className={"block md:hidden cursor-pointer " + (active ? 'active' : '')} onClick={() => setActive(!active)}>
                                <div className="bar transition-all ease-in-out duration-300 w-[25px] h-[3px] my-[5px] bg-white"></div>
                                <div className="bar transition-all ease-in-out duration-300 w-[25px] h-[3px] my-[5px] bg-white"></div>
                                <div className="bar transition-all ease-in-out duration-300 w-[25px] h-[3px] my-[5px] bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
                        <div className="text-white pt-16">
                            <div className="text-[54px] font-bold">
                                <span className="text-[#F48C06]">Studying</span>{" "}
                                Online is now much easier
                            </div>
                            <div className="text-2xl mt-[34px]">
                                TOTC is an interesting platform that will teach
                                you in more an interactive way
                            </div>
                            <div className="flex mt-[52px] items-center">
                                <button className="bg-white/[.3] h-[80px] font-medium text-[24px] hover:bg-white hover:text-black px-[38px] rounded-full">
                                    Join for free
                                </button>
                                <button className="">
                                    <Image
                                        width={80}
                                        height={80}
                                        src={"/images/play.svg"}
                                        alt={"Play Icon"}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <Image
                                width={500}
                                height={500}
                                src={"/images/person.png"}
                                alt={"Play Icon"}
                            />
                            <div className="absolute flex items-center bg-white/80 h-[100px] px-7 top-12 left-0 rounded-[20px]">
                                <div className="w-[50px] h-[50px] bg-[#23BDEE] flex justify-center items-center rounded-lg">
                                    <Image
                                        width={28}
                                        height={28}
                                        src={"/images/calendar.png"}
                                        alt={"Play Icon"}
                                    />
                                </div>
                                <div className="ml-8">
                                    <div className="text-[#595959] text-2xl font-bold">
                                        250k
                                    </div>
                                    <div className="text-[#545567] text-xl">
                                        Assisted Student
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex items-center bg-white/80 h-[100px] px-7 top-[200px] right-0 rounded-[20px]">
                                <div className="w-[50px] h-[50px] bg-[#F88C3D] flex justify-center items-center rounded-lg">
                                    <Image
                                        width={28}
                                        height={28}
                                        src={"/images/email.png"}
                                        alt={"Play Icon"}
                                    />
                                </div>
                                <div className="ml-8">
                                    <div className="text-[#595959] text-2xl font-bold">
                                        Congratulations
                                    </div>
                                    <div className="text-[#545567] text-xl">
                                        Your admission completed
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bg-white/80 p-7 top-[400px] left-0 rounded-[20px]">
                                <div className="flex items-center">
                                    <div className="w-[56px] h-[56px] rounded-full">
                                        <Image
                                            width={56}
                                            height={56}
                                            src={"/images/avatar.png"}
                                            alt={"Play Icon"}
                                        />
                                    </div>
                                    <div className="ml-8">
                                        <div className="text-[#595959] text-2xl font-bold">
                                            Congratulations
                                        </div>
                                        <div className="text-[#545567] text-xl">
                                            Your admission completed
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="bg-[#D8587E] text-white mt-[19px] h-16 font-medium text-[24px] hover:opacity-95 px-[38px] rounded-full">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-[134px]">
                <div className="max-w-3xl mx-auto">
                    <div className="w-fit">
                        <h1 className="text-[#010514] text-5xl font-bold text-center">
                            Our Success
                        </h1>
                        <p className="text-[#010514] text-opacity-80 font-normal text-lg text-center mt-4">
                            Ornare id fames interdum porttitor nulla turpis
                            etiam. Diam vitae sollicitudin at nec nam et
                            pharetra gravida. Adipiscing a quis ultrices eu
                            ornare tristique vel nisl orc.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-20">
                    <div className="mx-auto">
                        <h1 className="text-8xl bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            15K+
                        </h1>
                        <p className="text-[32px] text-[rgb(1,5,20)] text-opacity-80">
                            Students
                        </p>
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-8xl bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            15K+
                        </h1>
                        <p className="text-[32px] text-[rgb(1,5,20)] text-opacity-80">
                            Students
                        </p>
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-8xl bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            15K+
                        </h1>
                        <p className="text-[32px] text-[rgb(1,5,20)] text-opacity-80">
                            Students
                        </p>
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-8xl bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            15K+
                        </h1>
                        <p className="text-[32px] text-[rgb(1,5,20)] text-opacity-80">
                            Students
                        </p>
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-8xl bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            15K+
                        </h1>
                        <p className="text-[32px] text-[rgb(1,5,20)] text-opacity-80">
                            Students
                        </p>
                    </div>
                </div>
                <div className="mt-[130px] max-w-[837px] mx-auto text-center">
                    <h1 className="text-blue-500 text-[36px] font-bold">
                        All-In-One{" "}
                        <span className="text-teal-500">Cloud Software.</span>
                    </h1>
                    <p className="mt-5 text-2xl text-[#696984] leading-[1.8]">
                        TOTC is one powerful online software suite that combines
                        all the tools needed to run a successful school or
                        office.
                    </p>
                </div>
            </div>
        </div>
    );
}
