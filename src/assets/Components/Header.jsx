
import logoImg from "../myteam 2.svg"
import { style } from "../style";


export default function Header() {
    return(
         <header className="h-12 flex justify-between">
                    <div className="flex justify-between items-center h-10 w-95 gap-[80.5px]">
                        <img className="w-40 h-10" src={logoImg}/>
                        <nav className="flex gap-10">
                            <a className={style.navStyle}>home</a>
                            <a className= {style.navStyle}>about</a>
                        </nav>
                    </div>
                
                    <button  className= "w-38.25 h-12  border-2 rounded-3xl text-white font-Livvic font-semibold leading-7 text-[18px]">contact</button>

                </header>
    );
    
};
