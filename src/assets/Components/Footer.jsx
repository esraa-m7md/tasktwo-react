
import logoImg from "../myteam 2.svg"
import { style } from "../Style";
import { RiFacebookFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <section className="flex justify-center items-center w-full h-49 bg-DarkGreen pt-12">
            <div className="container flex w-277.5 justify-between ">
                <div className=" flex gap-[125.05px] w-182.5 ">
                    <div className="flex flex-col gap-6.25" >
                    <img className="w-40 h-10" src={logoImg} />
                    <nav className="flex gap-10">
                        <a className={style.navStyle}>home</a>
                        <a className={style.navStyle}>about</a>
                    </nav>
                    </div>
                    <p className=" text-white font-Livvic font-semibold leading-6.25 text-[15px] opacity-50">987  Hillcrest Lane<br/>Irvine, CA<br/>California 92714<br/>Call Us : 949-833-7432</p>
                </div>

                <div className="flex flex-col gap-12.75">
                    <div className="w-63.75 flex gap-4 justify-end ">
                        <RiFacebookFill className="w-6 h-6 bg-White flex justify-center items-center" />
                        <FaPinterest className="w-6 h-6 flex justify-center items-center text-White" />
                       <FaTwitter className="w-6 h-6 text-white flex justify-center items-center" />
                    
                    </div>
                    <div>
                        <p className=" text-white font-Livvic font-semibold leading-6.25 text-[15px] opacity-60">Copyright 2020. All Rights Reserved</p>
                    </div>

                    
                </div>

            </div>

        </section>

    );

};
