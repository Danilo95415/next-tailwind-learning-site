import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#49BBBD]">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center h-20 text-white">
                    <div className="font-bold text-xl">
                        <a href="#">TOTC</a>
                    </div>
                    <div className="">
                        <ul className="flex flex-row">
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
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-16">
                    <div className="text-white pt-16">
                        <div className="text-[54px] font-bold">
                            <span className="text-[#F48C06]">Studying</span>{" "}
                            Online is now much easier
                        </div>
                        <div className="text-2xl mt-[34px]">
                            TOTC is an interesting platform that will teach you
                            in more an interactive way
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
    );
}
