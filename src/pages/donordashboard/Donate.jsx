import DonorsBanner from "../../components/DonorsBanner";
import ProjectDonate from "../../components/ProjectDonate";
import DonorsProjects from "../../components/DonorsProjects";




const Donate = () => {

    return (

        <main className="bg-white">
            <DonorsBanner/>
            <ProjectDonate/>
            <DonorsProjects/>
           
        </main>

    );
};

export default Donate;