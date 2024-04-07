import { Container } from "./Container"
import down from "../../assets/images/drop-down.svg";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download.svg";
import sort from "../../assets/images/sort.svg";
import { tabledata } from "./tabledata";
import { ContainerWhite  } from "./ContainerWhite";

export const Body = () => {

    return (
        <div className="z-20">
            <div className="flex justify-between p-4 sm:p-6 sm:pr-8">
                <div className="text-2xl font-normal">Overview</div>
                <div className="flex border border-black-900 items-center gap-2 p-1 pl-4 pr-2 rounded-md" >
                    <div className="text-lg text-black/70">This Month</div>
                    <div className="pt-1">
                        <img src={down} className="h-5 w-5 opacity-70" alt="down" />
                    </div>
                </div>
            </div>


            <div className="flex pb-6 pl-6 pr-6 gap-5 flex-wrap">
                <Container />
                <ContainerWhite title={"Amount Pending"} amount={"₹92,312.20"} order={"13 Orders"} />
                <ContainerWhite title={"Amount Processed"} amount={"₹23,92,312.19"} order={""} />
            </div>

            <div className="pl-6">
                <div className="text-xl font-medium">Transactions | This Month</div>
                <div className="flex pt-6 gap-4">
                    <div className="bg-gray-300  opacity-60 text-gray-600 font-semibold rounded-full p-2">
                        <div className="pl-2 pr-2">Payouts (22)</div>
                    </div>
                    <div className="bg-[#146EB4] text-white/90 font-semibold rounded-full p-2">
                        <div className="pl-2 pr-2">Refunds (6)</div>
                    </div>
                </div>
            </div>

            <div className="pl-6 pt-6 flex justify-between pr-4 sm:pl-10 sm:pr-10">
                <div className="flex border p-1 rounded-md items-center gap-2 w-[300px]">
                    <div className="pl-3 font-bold">
                        <img src={search} className="h-4 w-4 opacity-50 focus:border-0" alt="search" />
                    </div>
                    <input type="text" className="w-full placeholder:text-lg focus:outline-none" placeholder="Order ID or transactions ID"/>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center border pt-1 pb-1 pl-2 pr-2 gap-1 rounded-md text-gray-500">
                        <div className="text-lg">Sort</div>
                        <div>
                            <img src={sort} className="w-5 h-5 opacity-70" alt="sort" />
                        </div>
                    </div>
                    <div className="flex items-center border pl-2 pr-2 border-md">
                        <img src={download} className="h-6 w-6 opacity-70" alt="download" />
                    </div>
                </div>
            </div>

            <div>
                <div className="px-10 py-2 text-md">
                <table className="table-auto w-full divide-y divide-gray-200">
                    <tr className="bg-black/10">
                        <td className="pl-2 py-1">Order ID</td>
                        <td className="pl-2">Status</td>
                        <td className="pl-2">Transaction ID</td>
                        <td className="pl-2">Refund Date</td>
                        <td className="pl-2">Order Amount</td>
                    </tr>
                    {tabledata.map((data , index)=>{
                        return(
                            <tr key={index}>
                                <td className="pl-2 py-2 text-[#146EB4] font-medium">{data.id}</td>
                                <td className="pt-3 sm:pt-2 pl-2 flex items-center">
                                    {data.status == "Successful" ?
                                        <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span> : <span className="bg-gray-400 w-[10px] h-[10px] rounded-full"></span>
                                    }
                                    <div className="pl-2" >{data.status}</div>
                                </td>
                                <td className="pl-2">{data.transaction}</td>
                                <td className="pl-2">{data.refund}</td>
                                <td className="pl-2">{data.amount}</td>
                            </tr>
                        )
                    })}
                </table>
                </div>
            </div>
            <div className="flex justify-center py-4 text-lg font-semibold">
                <div>Made By <a className="text-blue-900 underline" href="https://www.linkedin.com/in/imsndp/">Sandeep Talukdar</a></div>
            </div>
        </div>
    );
}
