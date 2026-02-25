import fetchAPI from "./fetch.js";

async function log_auth(username, password){
    let securePassword = encodeURIComponent(password);
    let secureEmail = encodeURIComponent(username.trim().toLowerCase());
    try{
        const response = await fetchAPI(`/users?email=${secureEmail}&password=${securePassword}`);
        if(response instanceof Error) throw response;
        if(response.length > 0){
            localStorage.setItem('user', JSON.stringify(response[0]));
            window.location.href = 'manipulacion_dom.html';
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    } catch(error){
        console.error(error);
    }
}
function logout(){
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}
async function sign_auth(name, email, password){
    let securePassword = encodeURIComponent(password);
    let secureEmail = encodeURIComponent(email.trim().toLowerCase());
    let secureName = encodeURIComponent(name)
    try{
        const response = await fetchAPI(`/users`, {headers:{"Content-Type":"application/json"}, method:"POST", body:stringify({
            "name":secureName,
            "email":secureEmail,
            "password":securePassword
        })})
        if (response instanceof Error) throw response;
        console.log("user created!")
        return response;
    } catch(error){
        console.error("The user could not be created: ", error)
        return null;
    }
}
export {log_auth, sign_auth, logout}