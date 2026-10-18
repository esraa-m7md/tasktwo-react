
import imgThree from "../Oval Copy 6.svg"
export default function GridThree() {

    return(
          <div className="flex flex-col justify-center items-center gap-6 ">
                       <div className="flex flex-col ">
                          
                            <p className="font-Livvic font-semibold text-white leading-6.25 text-[15px] text-center"> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        </div>
                        <div>
                            <p  className="font-Livvic font-bold text-RaptureBlue leading-7 text-[18px] text-center">Arthur Clarke</p>
                            <p  className="font-Livvic font-[500px] text-white leading-4.5 text-[13px]">Co-founder of MyPhysio</p>
                        </div>
                        <div className="w-15.5 h-15.5 ">
                            <img src={imgThree} />
                        </div>

                    </div>

    )
    
};
