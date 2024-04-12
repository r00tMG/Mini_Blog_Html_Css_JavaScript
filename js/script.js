

function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));
    displaySearchResults(filteredArticles);
}
document.getElementById("search-form").addEventListener("submit", handleSearch);



document.getElementById("article-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const title = document.getElementById("article-title").value;
    const content = document.getElementById("article-content").value;

    
    const newArticle = `
        <div class="container">
            <article class="article mb-4 bg-light rounded-4">
                <div class="">
                    <a class="article-img" href="article.html"><img src="img/blog-post.jpg" class="img-fluid" alt=""></a>
                </div>
                <div class="bg-light">
                    <div class="article_date  mt-3">Publié le ${new Date().toLocaleDateString()}</div>
                    <h2 class="article_titre"><a href="">${title}</a></h2>
                    <p class="article_contenue">${content}</p>
                </div>
            </article>
           
        </div>
    `;

    
    
    document.querySelector(".d_flex").innerHTML += newArticle;
    
    document.getElementById("article-form").reset();

    

    commentForm.reset();
});


const commentForm = document.querySelector('.comment-form');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const commentName = document.getElementById('comment-name').value;
    const commentContent = document.getElementById('comment-content').value;

    const newComment = document.createElement('li');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <div class="comment-author">
        <div class="profile-photo ">
                    <img class="rounded rounded-circle" src="img/profile-photo.jpeg" width="50px" height="50px" alt="">
        </div> 
        ${commentName}
        </div>
        <div class="comment-content">Contenue :${commentContent}</div>
    `;

    const commentsList = commentForm.parentElement.querySelector('.comments-list');

    commentsList.appendChild(newComment);

    commentForm.reset();
});














