import { useState } from "react";
import swal from "sweetalert2"
async function generateCall() {
    return fetch("https://localhost:7139/api/Nfts/generate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
      },
    }).then((data) => data.json());
  }


export default function CreateNft(){
    const [template, setTemplate] = useState();
    const generate = async e => {
        e.preventDefault();
        console.log("Asking for a template.....");
        await generateCall().then((value) => {
            if (!value.isSuccess) {
              new swal("Failed connection Error", value.errorMessage, "error");
            }
            if (value.result === undefined) {
              new swal("Failed connection Error", "", "error");
            }
        console.log("Api awnsers.....")
        DrawNft(value.result)
          });

          
    }
    const DrawNft = (cubes) => {
        console.log("Drawin method receiving cubes : " , cubes)
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        cubes.rows.forEach((row , x) => {
            //console.log("loggin rows : ", row)
            row.cells.forEach((cell, y) => {
                console.log("loggin cells : ", cell)
                ctx.fillStyle = `rgb(${cell.colors[0]}, ${cell.colors[1]}, ${cell.colors[2]})`
                ctx.fillRect(x*6, y*6, 5, 5)
            })
            

        })
    }
    const nftstyle = {
        height : "125px",
        width : "125px",
    }
    return(
        <div> 
        <div className="container rounded bg-white mt-5 mb-5 ">
           
    <div className="row">
        <div className="col-md-3 border-right">
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <h1 className="text-center">Nft generator</h1>
                </div>
                
                <div  className="d-flex justify-content-center align-items-center mb-3">
                    <canvas id="canvas" style={nftstyle}className="bg-dark " width="150px" ></canvas>
                </div>
                <div className="d-flex justify-content-center mt-10 align-items-center mb-3">
                <button className="btn btn-primary primary" onClick={generate}>Generate</button>
                </div>
            </div>
        </div>
        
    </div>
   
</div>

</div>
       
    );
}