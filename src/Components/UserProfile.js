import getUser from "../Hooks/UserService";

import React from "react";
import "./style/UserProfilestyle.css";


import swal from "sweetalert2"
async function update(img, username, id) {
    let token = getUser();
    const user = {
      username : username,
      img : img
    };
    return fetch("https://localhost:7139/api/Users/"+id, {
      method: "PUT",
      headers: {
          "Authorization" : token.user.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }

export default function UserProfile(){
    let user = getUser();
    const [username, setUserName] = React.useState(user.user.username);
    const [img] = React.useState(user.user.img);


    
    const labels = {
        padding : "5px",
        fontSize: "15px",
        fontWeight: "500"
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await update(img, username, user.user.id).then((value) => {
            if (!value.isSuccess) {
              new swal("Failed connection Error", value.errorMessage, "error");
            }
            if (value.result === undefined) {
              new swal("Failed connection Error", "", "error");
            }
      
            localStorage.setItem(
              "user",
              JSON.stringify({ user: value.result, auth: true })
            );
            window.location.href = "/home";
          });
    }
    
    
    const imgpath = user.user.img === undefined || user.user.img === "" || user.user.img === null ? "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" : user.user.img
    return(
        <div> 
        <form className="container rounded bg-white mt-5 mb-5" onSubmit={handleSubmit}>
           
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" alt="profile_img" width="150px" src={imgpath} />
                
                <span className="text-black-50">{user.user.Email}</span>
                <span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">User Settings</h4>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label style={labels} className="labels">Email</label><input disabled type="text" className="form-control" placeholder={user.user.email} /></div>
                    <div className="col-md-12">
                        <label style={labels}  className="labels">Username</label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder={user.user.username}/>
                        </div>
                    <div className="col-md-12">
                        <label style={labels} className="labels">Password</label>
                        <input type="password"  className="form-control" placeholder="*********************" disabled/>
                    </div>
                </div>
                <div className="row mt-3">
                </div>
                <div className="mt-5 text-center"> <input type="submit" id="create" value="save"/></div>
            </div>
        </div>
        
    </div>
</form>
</div>
    );
}