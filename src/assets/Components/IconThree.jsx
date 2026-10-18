import iconThree from '../Combined Shape (1).svg';
import { style } from "../style";

export default function IconThree() {
    
    return(

         <div className="flex gap-5.75 ">
                  <div className={style.iconStyle}>
                     <div className="w-[41.7px] h-12.5 z-10">
                      <img src={iconThree} />
                    </div>
                    <div className="absolute w-10 h-10 bg-PoliceBlue rounded-full right-1 bottom-1">
                    </div>
                  
                  </div>


                  <div className="w-111.25 flex flex-col gap-4 " >
                    <p className="text-LightCoral font-Livvic font-bold text-[18px] leading-7 ">Enhanced Productivity</p>
                    <p className="text-white font-Livvic font-semibold text-[15px] leading-6.25 ">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                  </div>
                </div>
    );
    
};
