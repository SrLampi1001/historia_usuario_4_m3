import { sanytizeString } from "../utils/funcs.js";
export default class Post{
    constructor(title, contents, id = null){
        this.title = title;
        this.contents = contents;
        this.id = id;
    }
    static constructPost({title, contents, id}){
        try{
            if(!title||!contents||!id)throw new Error("Error, not al params given")
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
}