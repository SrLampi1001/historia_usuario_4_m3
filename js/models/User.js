import fetchAPI from "../utils/fetch.js";
import POST from "./Post.js"
export default class User {
    constructor(name, email, password, posts, id = null){
        this.name = name;
        this.email = email;
        this.password = password;
        this.posts = posts;
        this.id = id;
    }
    async constructUser({name, email, password, posts, id}){
        try{
            if(!name || !email || !password || !id ) throw new Error("Error, not al params given")
            return new User(name, email, password, posts||[], id)
        } catch(error){
            console.error(error)
            return error
        }
    }
    logOut(){
        localStorage.removeItem("user")
    }
    logIn(){
        localStorage.setItem("user", JSON.stringify(this))
    }
    async removeAccout(){
        try{
            const response = await fetchAPI(`/users/${this.id}`,{method:"DELETE"})
            if(!response.ok)throw new Error("Error, ", response.status)
            return response;
        } catch(error){
            console.error(error)
            return error;
        }
    }
    async post(){

    }
}