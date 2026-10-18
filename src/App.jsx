


import SectionOne from "./assets/Components/SectionOne"
import SectionTwo from "./assets/Components/SectionTwo";
import SectionThree from "./assets/Components/SectionThree";
import SectionFour from "./assets/Components/SectionFour";
import Footer from "./assets/Components/Footer";





export default function App() {
    return(
        <div>
            <section className="flex justify-center pt-18.25 w-full h-screen bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url('/Group 7.svg')` }}>
            <SectionOne/>
          </section>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <Footer/>
        
        </div>
         
    )
       

    
    
};
