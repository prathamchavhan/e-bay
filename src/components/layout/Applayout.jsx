import Headers from "../ui/Headers1";  

import Footers  from "../ui/Footers1"; 

import {Outlet} from "react-router-dom";


export const Applayout =()=>{
    return (
    <>
   
    <Headers/>|
     <Outlet />
    <Footers/>
    </>
    );
};