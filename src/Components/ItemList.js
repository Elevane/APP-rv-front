import React from "react";
import getUser from "../Hooks/UserService";
import Header from "./Header";
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
async function getItems(userId, token) {

  return fetch("https://localhost:7139/api/Nfts/" + userId, {
    method: "GET",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    }
  }).then((data) => data.json());
}

export default class ItemList extends React.Component {
  constructor() {
    super();
    const loggedUser = getUser();
    this.state = {
      user: loggedUser.user,
      items: [],
      style: {
        height: "100%", width: "100%", display: "block"
      },
      profileimgstyle: {
        height : "25px",
        width: "25px",
        borderRadius : "50%"
      }
    }
     this.HandleClick = this.HandleClick.bind(this);

  }
   HandleClick = async e => {
    e.preventDefault();
    
    let item = this.state.items.find( (elm) => this.state.items.indexOf(elm) === parseInt(e.currentTarget.id))
    console.log(item)
    localStorage.setItem(
      "item",
      JSON.stringify({ item: item})
    );
    window.location.href ="/item/"+e.currentTarget.id
    }
  async componentDidMount() {
    await getItems(this.state.user.id, this.state.user.token).then((value) => {
      console.log(value)
      this.setState({items: value.result});
    });

  }

  render() {
    return (
      <div className="w-100 h-100">
        


        <div className="album py-5 w-100 h-100">

          <div className="container">

            <div className="row">
              {this.state.items.map((nft, key) => (
                <a key={key} id={key} className="card-nft-list col-md-4 text-decoration-none text-dark" onClick={this.HandleClick}>
                  <div className="card mb-4 shadow-sm">
                    <img className="card-img-top p-1" src={nft.img === undefined ||nft.img === null  ? "https://wegoboard.com/img/p/fr-default-large_default.jpg" : nft.img}alt="Thumbnail [100%x225]" style={this.state.style} />
                    <div className="card-body">
                      
                      <p className="card-text">{nft.name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        </div>
                        <div><small className="p-2 text-muted"><img style={this.state.profileimgstyle} alt="progile_img" src={nft.user.img === undefined ||nft.user.img === null  ? "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" : nft.img}></img></small>
                        <small className="p-2 text-muted text-secondary">{nft.user.username}</small></div>
                        
                      </div>
                    </div>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
    );
  }

}