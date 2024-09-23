

const ProjectDetail = () => {
    return (
        <div className="p-8">
            <h1 className="text-[#015C28] font-serif font-bold text-xl">About The Safeplace Home for Elderly</h1>
            <p className="text-[#3B3B3B] font-medium">The SafePlace Home for  Elderly, is a home where we prioritize compassionate care and a nurturing
                environment for seniors. Founded on the belief that every individual deserves respect and dignity
                in their golden years, SafePlace provides a safe haven where elderly residents can thrive. Our dedicated
                team of caregivers and staff are committed to ensuring each resident receives personalized attention,
                fostering a sense of community and belonging. At SafePlace, we strive to create a home away from home,
                where families can entrust their loved ones with confidence.
            </p>
            <h2 className="text-[#015C28] font-serif font-bold text-xl">Proposal</h2>

            <p className="text-[#3B3B3B] font-medium">Proposal
                <br /><b>Name of Organisation:</b> The Safe place Home
                <br /><b>Location:</b> Lagos, Nigeria
                <br /><b>Year of Establishment:</b> 1988
                <br /><b>Mission/ Service provided:</b>  is a home where we prioritize compassionate care and a nurturing environment for seniors
                <br /><b>Number of residents:</b> 97
                <br /><b>Demographic categories of residents:</b> age 60 and above
                <br /><b>Needs Request:</b> We are seeking funding to enhance our facilities and services, enabling us to continue providing high-quality care to our elderly residents. The funds will specifically support the following initiatives:
                <br />Facility Improvement: Renovation of communal areas, installation of safety equipment, and upgrading accessibility features.
                <br />Healthcare Services:Expansion of healthcare services including medical check-ups, specialized care programs, and access to allied health professionals.
                <br />Staff Training: Continuous education and training for our caregivers to ensure they are equipped with the latest techniques in elderly care
                <br />Enrichment Programs: Introduction of recreational and social activities to promote mental and emotional well-being among residents.
            </p>

            <p className="text-[#3B3B3B] font-medium"><span className="text-[#015C28]">Total Amount Needed:</span>  $500
                <br /><span className="text-[#015C28]">Total Donation Received:</span> $200
                <br /><span className="text-[#015C28]">Funding Status:</span> Funded
                <br /><span className="text-[#015C28]">DAO Status:</span> 3 Votes
            </p>
            <button className="bg-[#FF7827] hover:bg-[#11785A] text-white font-bold py-2 px-4 rounded">
                Vote now
            </button>
            <p className="text-[#3B3B3B] font-medium"><span className="text-[#015C28]">Terms and Conditions:</span>
                Voting is applicable only to DAO members, make a donation of $250 and above to become a member
                <br />5 votes from a DAO releases the fund to homes/center
            </p>
        </div>
    );
};

export default ProjectDetail;
