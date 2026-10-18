
import imgTwo from "../Oval Copy 5.svg"
export default function GridTwo() {
    return(

        <div className="flex flex-col justify-center items-center gap-6 ">
                       <div className="flex flex-col ">
                          
                            <p className="font-Livvic font-semibold text-white leading-6.25 text-[15px] text-center"> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        </div>
                        <div>
                            <p  className="font-Livvic font-bold text-RaptureBlue leading-7 text-[18px] text-center">Aiysha Reese</p>
                            <p  className="font-Livvic font-[500px] text-white leading-4.5 text-[13px]">Founder of Manage</p>
                        </div>
                        <div className="w-15.5 h-15.5 ">
                            <img src={imgTwo} />
                        </div>

                    </div>
    )
    
};
