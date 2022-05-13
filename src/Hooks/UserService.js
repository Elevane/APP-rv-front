


export default function getUser() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    return user;
}

