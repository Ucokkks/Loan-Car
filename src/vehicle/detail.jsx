import React from "react";
import Inner from "../components/inner/inner";
import Header from "../components/header/header";
import x from "/src/assets/X.svg"
import mobil from "../assets/mobil.png"
import Status from "../components/status_mobil/status_mobil"
import Ringkas from "../components/ringkasan_mobil/ringkasan_mobil";
import EditButton from "../components/button_edit/button_edit";
import Rating from "../components/rating/rating";

const Detail = () => {

    return(
        <div>
        <Inner>
            <a href="/vehicle">
                <img className="float-right right-0 top-0 hover:bg-LightGray hover:rounded-full" src={x} alt="" /> 
            </a>
            
            <br />
            <Header>Detail Mobil</Header>
            
            <div className="bg-NavColor shadow-lg pb-10 rounded-b-lg">
                <img className="mt-10" src={mobil} alt="car" />
                <div className="ml-6 mt-12">
                    <h1 className="text-4xl">Nama model</h1>
                    <p className="text-xl">BMW , Biru , MKD 1152</p>    
                    <div className="md:inline-flex mt-6">
                        <Status/>
                        <div className="scale-90 xl:ml-96">
                            <Ringkas/>    
                        </div>
                    </div>
                    <p className="text-slate-500 mt-14 mb-3">Update Terakhir: Tanggal</p>
                    <EditButton/>
                    <div className="mt-16">
                    <Rating/> 
                    <Rating/>   
                    </div>
                </div>
            </div>
        </Inner> 
        </div>
    );

}

export default Detail;