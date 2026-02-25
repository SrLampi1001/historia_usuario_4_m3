const createPost = async ()=>{
    
const title = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();
    if (!title || !content) return; // basic validation
    // Build a new post element (same markup as existing ones)
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
    <div class="d-flex justify-content-between">
        <strong>Yo</strong>
        <span class="badge badge-twilight">Crepúsculo</span>
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
    <p class="mt-2 mb-1">${content}</p>
    `;
    
}