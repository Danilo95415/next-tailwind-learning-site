import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#49BBBD]">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center h-20 text-white">
                    <div className="font-bold text-xl">
                        <a href="#">Logo</a>
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
                                <a href="#" className="bg-white text-[#5B5B5B] font-medium hover:bg-white/[.3] hover:text-white py-3 px-12 rounded-full">Login</a>
                            </li>
                            <li className="mr-2">
                                <a href="#" className="bg-white text-[#5B5B5B] font-medium hover:bg-white/[.3] hover:text-white py-3 px-9 rounded-full">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
