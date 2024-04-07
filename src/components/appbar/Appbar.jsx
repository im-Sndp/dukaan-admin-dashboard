import speaker from "../../assets/images/speaker.webp";
import down from "../../assets/images/down.svg";
import question from "../../assets/images/question.svg"

export const Appbar = ({setClick}) => {
    return(
        <div className="flex bg-white shadow-md sticky top-0 z-30 pt-3 pb-3 md:p-3 items-center">
            
            <div className="flex w-1/3">
                <div className="md:pl-2 pt-1 lg:hidden" onClick={()=>{
                    setClick(click => !click)
                }}>
                    <svg className="h-7 w-7 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6H12H19M5 12H19M5 18H19" stroke="#000000" strokeWidth={3} stroke-linecap="round"/>
                    </svg>
                </div>
                <div className="text-2xl font-normal pl-1 md:pl2 lg:pl-3 ">Payouts</div>
                <div className="flex items-center pt-1 pl-1 md:pl-4 gap-2">
                    <img className="w-4 h-4 mt-1 opacity-80" src={question} alt="questionmark" />
                    <div className="text-xs hidden md:block">How it work</div>
                </div>
            </div>

            <div className="flex shrink-1 w-1/3 bg-black/5 pt-2 pb-2 pl-4 rounded-md">
                <svg className="w-4 w-4 opacity-50 pt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="search" className="ml-2 bg-transparent w-full placeholder:text-md focus:outline-none" placeholder="Search features, tutorials, etc."/>
            </div>
            <div className="flex w-1/3 gap-2 justify-end pr-3  md:pr-0 sm:flex-grow">
                <div className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
                    <img src={speaker} alt="speaker" />
                </div>
                <div className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
                    <img className="h-4 w-4 opacity-70 m-1" src={down} alt="speaker" />
                </div>
            </div>
        </div>
    )
}