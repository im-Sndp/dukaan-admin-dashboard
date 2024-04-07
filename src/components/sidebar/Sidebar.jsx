import profile from "../../assets/images/profile.svg";
import { sidebaritems } from "./sidebaritmes";
import wallet from "../../assets/images/wallet.svg";

export const Sidebar = ({click}) => {
    return(
        <div className={`bg-[#1E2640] text-white flex flex-col justify-between h-screen duration-300 transition-all z-50 fixed lg:sticky top-0 ${click ? "w-[224px]" : "w-[0]"} lg:w-[224px]`}>
                <div className={`duration-300 transition-all lg:block ${click ? "block" : "hidden"}`}>
                    <div className="flex px-4 py-4 justify-between items-center">
                        <div className="flex">
                            <img className="rounded-xl" src={profile} alt="profile" />
                            <div className="pl-4">
                                <div className="font-semibold">Sandeep</div>
                                <div className="text-sm cursor-pointer font-light underline">Visit Store</div>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="p-2">
                        {sidebaritems.map((item,index)=>{
                            return(
                                <div key={index} className={`flex cursor-pointer rounded-md mt-1 ${item.activated && "bg-white/10"} hover:bg-white/10 py-2 px-4 gap-2`}>
                                    <div className="">
                                        <img  src={item.logo} className="h-5 w-5" alt="home" />
                                    </div>
                                    
                                    <div className="text-sm	">{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={`duration-300 transition-all lg:block ${click ? "block" : "hidden"}`}>
                    <div className="flex items-center bg-white/10 p-1 my-4 mx-2 rounded-md">
                        <div className="p-2">
                            <div className="p-2 bg-white/10 rounded-md">
                                <img src={wallet} alt="wallet" />
                            </div>
                        </div>
                        <div>
                            <div className="text-sm">Available Credits</div>
                            <div className="font-semibold">224.10</div>
                        </div>
                    </div>
                </div>
        </div>

    )
}