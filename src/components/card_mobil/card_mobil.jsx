import react from "react";
import mobil from "/src/assets/mobil.png";
import logo from "/src/assets/logo_bmw.png";
import Ringkas from "../ringkasan_mobil/ringkasan_mobil.jsx";
import DetailButton from "../button_detail/button_detail.jsx";
import EditButton from '../button_edit/button_edit.jsx';


const Card = () => {

    return(
        <div className="mt-12 inline-flex mr-2">
            <div className="bg-white w-[330px]  h-[480px] md:w-[370px] rounded-xl relative shadow-md">
            <div className="bg-gradient-to-b from-transparent from-20% to-white to-35% rounded-xl w-[350px] h-full md:w-[370px] absolute">
                <div className="inline-flex bg-slate-500 px-3 rounded-lg opacity-80 m-2">
                    <div className="w-3 h-3 bg-BlueAvailable rounded-full mt-[6px] mr-1"></div>
                    <p className="text-white">Available</p>
                </div>
                <div className="relative">
                    <div className="absolute ml-52 w-50 h-10 bg-white border-2 border-black md:ml-60 mt-40  px-4 pb-10 rounded-lg">
                        <div className="top-0">
                            <p className="font-semibold">B 6797 0B</p>
                            <p className="text-xs absolute top-5 ml-4">05・23</p> 
                        </div>
                    </div>
                </div>
                <div className="ml-6 font-sf-pro">
                    <img src={logo} className="w-12 mt-24" alt="logo" />
                    <h1 className="text-2xl font-bold">Nama Model</h1>
                    <p className="text-slate-500">Nama Merek</p>
                    <p className="text-slate-500">ID : 20121923567</p>
                </div>
                <div className="mt-5 ml-6">
                <p className="font-sf-pro text-xs font-semibold ">Ringkasan:</p>
                    <Ringkas/>
                </div>

                <div className="m-4 inline-flex md:m-6">
                    <DetailButton/>
                    <div className="ml-10 md:ml-14">
                        <EditButton/>     
                    </div>
                </div>
                
            </div>
                  <img className=" rounded-t-xl" src={mobil} alt="car" />  
            </div>
        </div>
    );
};

export default Card;