
import iconTwo from '../Combined Shape.svg';
import { style } from "../style";

export default function IconTwo() {
return(
    <div className="flex gap-5.75 ">
                     <div className={style.iconStyle}>
                        <div className="w-[41.7px] h-12.5 z-10">
                         <img src={iconTwo} />
                       </div>
                       <div className="absolute w-10 h-10 bg-PoliceBlue rounded-full right-1 bottom-1">
                       </div>

                     </div>
   
                     <div className="w-111.25 flex flex-col gap-4 " >
                       <p className="text-LightCoral font-Livvic font-bold text-[18px] leading-7 ">Easy to Implement</p>
                       <p className="text-white font-Livvic font-semibold text-[15px] leading-6.25 ">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                     </div>
                   </div>

);

};
