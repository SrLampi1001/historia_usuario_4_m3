import fetchAPI from "./fetch.js";

export default async function log_auth(username, password){
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
export function logout(){
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}
export async function sign_auth(name, email, password, verification_password){
    let securePassword = encodeURIComponent(password);
    let securVerPassword = encodeURIComponent(verification_password);
    let secureEmail = encodeURIComponent(email.trim().toLowerCase());
    let secureName = encodeURIComponent(name)
    if (!securVerPassword===securePassword){
        console.error("The user could not be created: passwords don't match");
        return null;
    }
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