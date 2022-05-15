import Header from "./Header";
import "./style/UserProfilestyle.css";


export default function UserProfile(props){
    const lastName = {
     textTransform: "capitalize"   
    }
    const imgpath = props.user.user.img === undefined || props.user.user.img === "" ? "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" : props.user.user.img
    return(
        <div> <Header></Header>
        <div className="container rounded bg-white mt-5 mb-5">
           
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src={imgpath} />
                <span className="font-weight-bold"><span style={lastName}>{props.user.user.lastName}</span> {props.user.user.firstName}</span>
                <span className="text-black-50">{props.user.user.Email}</span>
                <span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">User Profile Settings</h4>
                </div>
                <div className="row mt-2">
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="new Email" /></div>
                    <div className="col-md-12"><label className="labels">Username</label><input type="text" className="form-control" placeholder="new userName" /></div>
                    <div className="col-md-12"><label className="labels">Password</label><input type="password" className="form-control" placeholder="new Password" /></div>
                </div>
                <div className="row mt-3">
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        
    </div>
</div>
</div>
    );
}