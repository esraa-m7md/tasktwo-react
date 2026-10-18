



import GridOne from "./GridOne";
import GridThree from "./GridThree";
import GridTwo from "./GridTwo";

export default function SectionThree() {
    return(

        <section className="flex justify-center pt-35 w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/Group 7 (1).svg')`}}>
            <div className="container w-277.5 flex flex-col justify-center items-center gap-14">
                <div>
                    <p className="font-Livvic font-bold text-white leading-12 text-[48px] text-center">Delivering real results for top <br/> companies. Some of our <span className="text-RaptureBlue">success stories.</span></p>

                </div>
                <div className="grid grid-cols-3 gap-7.5 pt-9">
                    <GridOne/>
                    <GridTwo/>
                    <GridThree/>
                </div>
            </div>
        </section>
    );
    
};
