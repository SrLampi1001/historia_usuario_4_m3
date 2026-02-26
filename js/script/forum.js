import User from "../models/User.js"
import Post from "../models/Post.js"
const user = await User.constructUser(JSON.parse(localStorage.getItem("user")))

const createPost = async ()=>{
    const title = document.getElementById('postTitle').value.trim();
    const contents = document.getElementById('postContent').value.trim();
    if (!title || !contents) return; // basic validation
    const post = await Post.createPost({title, contents})
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
    <div class="d-flex justify-content-between">
        <strong>${user.name}</strong>
        <span class="badge badge-twilight">${post.title}</span>
        <button class="btn p-0 dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">More actions</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" style="max-width:150px;right:0;">
            <li><a class="dropdown-item" href="#">Ocultar</a></li>
            <li><a class="dropdown-item" href="#">Bloquear</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-danger" href="#">Eliminar</a></li>
        </ul>
    </div>
    <p class="mt-2 mb-1">${post.contents}</p>
    `;
    user.post(post.id)
    return newPost;
}
document.querySelector("form").addEventListener("submit",async e=>{
    e.preventDefault();
    const post = await createPost();
    const main = document.querySelector("main");
    console.log(post)
    main.insertBefore(post, main.children[3]) //Inserts the post first
})