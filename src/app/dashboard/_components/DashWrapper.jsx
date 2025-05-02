import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function DashWrapper({ children }) {
     return (
          <div className=" w-full flex  flex-row justify-between items-start ">

               <Sidebar />

               <div className=" w-full  px-2">
                    <Navbar />
                    <div>
                         {children}
                    </div>

               </div>
          </div>
     )
}
