
// Liste des articles 
let articles = [];

// Chargement des articles depuis le localStorage
if (localStorage.getItem("articles")) {
    articles = JSON.parse(localStorage.getItem("articles"));
}

// Fonction pour sauvegarder les articles dans le localStorage
function saveArticles() {
    localStorage.setItem("articles", JSON.stringify(articles));
}

// Rechercher sur la liste d'articles
function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));
    displaySearchResults(filteredArticles);
}
document.getElementById("search-form").addEventListener("submit", handleSearch);

// Ajouter un nouvel article
document.getElementById("article-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("article-title").value;
    const content = document.getElementById("article-content").value;
    const image = document.getElementById("article-image").files[0];
    
    // Conversion de l'image en URL
    const imageUrl = URL.createObjectURL(image);

    const articleData = {
        title: title,
        content: content,
        imageUrl: imageUrl,
        date: new Date().toLocaleDateString() 
    };


    articles.push(articleData);
    saveArticles(); 

    afficherNewArticle(articleData);
    document.getElementById("article-form").reset();
});

// Afficher un nouvel article
function afficherNewArticle(articleData) {
    const newArticle = `
        <div class="container">
            <article class="article mb-4 bg-light rounded-4">
                <div class="">
                    <a class="article-img" href="article.html">
                        <img src="${articleData.imageUrl}" id="article-image" class="img-fluid" alt="">
                    </a>
                </div>
                <div class="bg-light">
                    <div class="article_date  mt-3">Publié le ${articleData.date}</div>
                    <h2 class="article-title"><a href="">${articleData.title}</a></h2>
                    <p class="article-content">${articleData.content}</p>
                </div>
            </article>
        </div>
    `
    document.querySelector(".d_flex").innerHTML += newArticle;
    
}

// Gestion des commentaires
function commentairePublish(){
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
        Titre : ${commentName}
        </div>
        <div class="comment-content">
        Contenue : ${commentContent}
        </div>
    `;

    const commentsList = commentForm.parentElement.querySelector('.comments-list');

    commentsList.appendChild(newComment);

    commentForm.reset();
});

}
