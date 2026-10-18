import iconOne from '../Group 9.svg';
import { style } from "../style";

export default function IconOne() {
    return(
        <div className="flex gap-5.75 ">
                          <div className={style.iconStyle}>
                             <div className="w-14 h-14 z-10">
                              <img src={iconOne} />
                            </div>
                            <div className={"absolute w-10 h-10 bg-PoliceBlue rounded-full right-1 bottom-1"}>
                            </div>
                          
                          </div>
        
        
                          <div className="w-111.25 flex flex-col gap-4 " >
                            <p className="text-LightCoral font-Livvic font-bold text-[18px] leading-7 ">Experienced Individuals</p>
                            <p className="text-white font-Livvic font-semibold text-[15px] leading-6.25 ">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                          </div>
                        </div>
        
    );
    
};
