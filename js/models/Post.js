import { sanytizeString } from "../utils/funcs.js";
import fetchAPI from "../utils/fetch.js";
export default class Post{
    constructor(title, contents, id = null){
        this.title = title;
        this.contents = contents;
        this.id = id;
    }
    static async constructPost({title, contents, id}){
        try{
            if(!title||!contents||!id)throw new Error("Error, not all params given")
            return new Post(title, contents, id)
        } catch(error){
            console.error(error);
            return error
        }
    }
    static editPost({title, contents}){
        if(title){
            title = sanytizeString(title)
            this.title = title;
        }
        if(contents){
            contents = sanytizeString(contents)
            this.contents = contents;
        }
    }
    static async createPost({title, contents}){
        try{
            const response = await fetchAPI("/posts/", {
                headers:{"Content-Type":"application/json"},
                method:"POST",
                body: JSON.stringify({title, contents})
            })
            return Post.constructPost(response)
        } catch(error){
            console.error(error)
        }
    }
}