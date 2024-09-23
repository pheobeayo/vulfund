import DonorSidebar from "../components/DonorSidebar"
import { Outlet, Link } from "react-router-dom"
import MobileSidebar from "../components/MobileSidebar"


const DashboardLayout = () => {
  return (
    <div>
      <div className="flex bg-white">
        <DonorSidebar/>

        <div className="px-6 w-[100%] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll">
          <MobileSidebar />
          <div className="lg:flex md:flex justify-end my-6 hidden ml-auto">
            <Link to='/sign_in'>  <button className="bg-[#DA8450] hover:bg-[#11785A] text-white font-bold py-2 px-4  rounded">
              Connect Wallet
            </button> </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;