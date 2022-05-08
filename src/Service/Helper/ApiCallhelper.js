

export default async function loginUser(username, password) {
  const user ={
    username : username,
    password : password
  }
  return fetch("https://localhost:7139/api/Users/authenticate" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      "Accept" : "*/*"
    },
    body: JSON.stringify(user)
  })
    .then(data => data.json())
 }



