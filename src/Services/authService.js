


const AddUserToContext = (user) => {
    localStorage.setItem("token", JSON.stringify(user.token));
};
const RemoveUserToContext = () => {
  localStorage.removeItem("token");
};
const getCurrentUserToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};
const AuthService = {AddUserToContext, RemoveUserToContext, getCurrentUserToken};
export default AuthService;