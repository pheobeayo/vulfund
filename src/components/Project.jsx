import projectphoto from "../assets/projectphoto.svg";
import projectphoto2 from "../assets/projectphoto2.svg";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <main className="bg-gradient-to-r from-[#110A03] via-[#110A03] to-[#DA8450] pb-8">
     <div className="grid place-items-center text-4xl font-bold text-white p-10"> Projects</div>
            <div className=" flex gap-10 md:flex md:flex-row mx-8">
            <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow">
                    <img src={projectphoto} alt="projectphoto" className="rounded-t-lg " />
                    <div className="w-full h-1/2 px-8">
                        <h3 className="text-[#110A03] text-[14px] font-bold leading-loose ">
                            The Heavens Orphanage Home
                        </h3>
                        <p className="text-[#3B3B3B] text-[13px] font-normal text-justify">
                            We are commited to provide Love, support and opportunities for orphaned children
                            who have faced unimaginable challenges at young age
                        </p>
                        <h3 className="text-[#110A03] text-[13px] font-bold leading-loose ">
                            Amount Needed: $300
                        </h3>
                       <Link to='/project_details'> <button className="bg-[#110A03] hover:bg-[#11785A] text-white font-bold py-2 px-4  rounded">
                            View details
                        </button>
                        </Link>
                    </div>
                </div>



                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow">
                    <img src={projectphoto2} alt="projectphoto2" className="rounded-t-lg" />
                    <div className="w-full h-1/2 px-8">
                        <h3 className="text-[#110A03] text-[14px] font-bold leading-loose ">
                            The  Safeplace  Home for elderly
                        </h3>
                        <p className="text-[#3B3B3B] text-[13px] font-normal text-justify">
                            We are commited to provide Love, support and opportunities for orphaned children who have
                            faced unimaginable challenges at young age
                        </p>
                        <h3 className="text-[#110A03] text-[13px] font-bold leading-loose ">
                            Amount Needed: $300
                        </h3>
                        <button className="bg-[#110A03] hover:bg-[#11785A] text-white font-bold py-2 px-4  rounded">
                            View details
                        </button>
                    </div>
                </div>

                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow">
                    <img src={projectphoto} alt="projectphoto" className="rounded-t-lg " />
                    <div className="w-full h-1/2 px-8">
                        <h3 className="text-[#110A03] text-[14px] font-bold leading-loose ">
                            The Heavens Orphanage Home
                        </h3>
                        <p className="text-[#3B3B3B] text-[13px] font-normal text-justify">
                            We are commited to provide Love, support and opportunities for orphaned children
                            who have faced unimaginable challenges at young age
                        </p>
                        <h3 className="text-[#110A03] text-[13px] font-bold leading-loose ">
                            Amount Needed: $300
                        </h3>
                        <button className="bg-[#110A03] hover:bg-[#11785A] text-white font-bold py-2 px-4  rounded">
                            View details
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;
