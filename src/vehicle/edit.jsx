import React from "react";
import Inner from "../components/inner/inner";
import x from "/src/assets/x.svg"
import kendaraan from "/src/assets/kendaraan.svg";

const Edit = () => {

    return(
        <div>
            <title>Edit</title>
            <Inner>
                <a href="/vehicle">
                    <img className="float-right right-0 top-0 hover:bg-slate-200 hover:rounded-full" src={x} alt="" /> 
                </a>
                <form className="mt-24" action="" method="">
                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="no.polisi">No. Polisi</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="no.polisi" type="text" placeholder="No.Polisi" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="model">Model Mobil</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="model" type="text" placeholder="Model Mobil" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="merek">Merek Mobil</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="merek" type="text" placeholder="Merek Mobil" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="warna">Warna Mobil</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="warna" type="text" placeholder="Warna Mobil" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="tipe">Tipe Mobil</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="tipe" type="text" placeholder="Tipe Mobil" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="jumlah">Jumlah Kursi</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="jumlah" type="text" placeholder="Jumlah Kursi" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="bensin">Bensin</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md px-3 placeholder:font-sf-pro placeholder:text-LightGray placeholder:font-semibold mb-6" id="bensin" type="text" placeholder="Bensin" />

                    <label className="font-sf-pro font-semibold text-lg ml-2" htmlFor="tipe">Tipe Mobil</label>
                    <input className="h-14 w-full mt-2 border-8 border-LightGray rounded-md font-sf-pro text-LightGray file:bg-[#BFBFBF] file:border-0 file:py-3 file:px-3" id="tipe" type="file" placeholder="Tipe Mobil" />
                    
                    <button type="submit" className="inline-flex bg-ButtonColor rounded-xl h-12 w-[215px] py-3 px-4 relative hover:bg-ButtonHover mt-12 mb-10">
                    <p className="text-white font-sf-pro font-semibold">Tambah Kendaraan</p>
                    <img className="absolute top-0 ml-[155px] mt-1" src={kendaraan} alt="vehicle" />
                    </button>
                    
                </form>
            </Inner>
        </div>
    );
        
}

export default Edit;