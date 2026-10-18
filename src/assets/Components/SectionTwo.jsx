


import IconOne from './IconOne';
import IconThree from './IconThree';
import IconTwo from './IconTwo';


export default function SectionTwo() {
    
    return(
         <section className=" flex justify-center py-35 w-full h-screen bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url('/Group 20.svg')` }}>
            <div className="container w-277.5 flex gap-32">
              <div className="flex flex-col gap-13.5 w-111.25">
                <div className="w-12.5 h-1 bg-LightCoral"></div>
                <p className="font-Livvic font-bold text-white leading-12 text-[48px] ">Build & manage distributed teams like no one else.</p>

              </div>
              <div className="pt-13.5 w-135 flex flex-col gap-8 ">
               <IconOne/>
               <IconTwo/>
                <IconThree/>
              </div>
            </div>
          </section>
    );
    
};
