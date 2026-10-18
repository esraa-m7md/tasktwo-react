import imgOne from "../Oval.svg"

export default function GridOne() {
    return(
          <div className="flex flex-col justify-center items-center gap-6 ">
                       <div className="flex flex-col ">
                          
                            <p className="font-Livvic font-semibold text-white leading-6.25 text-[15px] text-center"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        </div>
                        <div>
                            <p  className="font-Livvic font-bold text-RaptureBlue leading-7 text-[18px] text-center">Kady Baker</p>
                            <p  className="font-Livvic font-[500px] text-white leading-4.5 text-[13px]">Product Manager at Bookmark</p>
                        </div>
                        <div className="w-15.5 h-15.5 ">
                            <img src={imgOne} />
                        </div>

                    </div>
    );
    
};
