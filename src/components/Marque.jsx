import marque from "../assets/marque.svg";
import marque2 from "../assets/marque2.jpg";
import marque3 from "../assets/marque3.svg";


const Marque = () => {
    return (

        <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex gap-2">
                <img src={marque} alt="marque"  className='h-[70px] w-[150px]' />
                <img src={marque2} alt="marque2" className='h-[70px]  w-[150px]'/>
                <img src={marque3} alt="marque3" className='h-[70px]  w-[150px]'/>
                <img src={marque} alt="marque" className='h-[70px]  w-[150px]'/>
            </div>


        </div>


    );
};

export default Marque;
