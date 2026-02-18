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
