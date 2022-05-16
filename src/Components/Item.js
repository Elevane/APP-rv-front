import React from "react";
import { useParams } from "react-router-dom";
import getUser from "../Hooks/UserService";
export default function Item(props){
    const user = getUser()
    const cancel = async ()=> {
        window.location.href = "/items"
    }
    const item = JSON.parse(localStorage.getItem("item"));
    console.log(item)
    const imgpath = item.item.img === undefined || item.item.img === "" || item.item.img === null ? "https://wegoboard.com/img/p/fr-default-large_default.jpg" : user.user.img
   
    return(
        <div> 
        <div className="container rounded bg-white mt-5 mb-5 ">
           
    <div className="row">
        <div className="col-md-3 border-right">
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <h1 className="text-center">{item.item.name}</h1>
                </div>
                
                <div className="row mt-3">
                <img className="rounded-circle mt-5" width="150px" src={imgpath} />
                </div>
                <div className="d-flex justify-content-center mt-10 align-items-center mb-3">
                <a  onClick={cancel}>Retour</a>
                </div>
            </div>
        </div>
        
    </div>
   
</div>

</div>
    );
}