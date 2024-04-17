// liste des articles
let articles = [];

// Chargement des articles dans le localStorage
if (localStorage.getItem("articles")) {
articles = JSON.parse(localStorage.getItem("articles"));
}

// fonction pour sauvegarder les articles dans le localStorage
function saveArticles() {
localStorage.setItem("articles", JSON.stringify(articles));
}

// ajouter un nouveau article
document.getElementById("article-form").addEventListener("submit", function(event) {
event.preventDefault();

const title = document.getElementById("article-title").value;
const content = document.getElementById("article-content").value;
const image = document.getElementById("article-image").files[0];

// conversion de l'image en URL
const imageUrl = URL.createObjectURL(image);
// Données de l'article
const articleData = {
title: title,
content: content,
imageUrl: imageUrl,
date: new Date().toLocaleDateString(),
comments: []
};

articles.push(articleData);
saveArticles();

// Afficher le nouvel article
afficherNewArticle(articleData);

// Réinitialiser le formulaire
document.getElementById("article-form").reset();
});

// Afficher un nouvel article
function afficherNewArticle(articleData) {
const articlesContainer = document.getElementById("articles-container");

const articleElement = document.createElement("div");
articleElement.classList.add("article");
articleElement.innerHTML = `

<article class="article mb-4 bg-light rounded-4">
    <div class="">
        <a class="article-img" href="article.html">
            <img src="${articleData.imageUrl}" id="article-image" class="img-fluid" alt="">
        </a>
    </div>
    <div class="bg-light">
        <div class="article_date  mt-3">Publié le ${articleData.date}</div>
        <h2 class="article-title">${articleData.title}</h2>
        <p class="article-content">${articleData.content}</p>
    </div>
</article>

<h4>Commentaires</h4>
<ul id="comments-${articles.length}" class="comments-list"></ul>
<form id="comment-form-${articles.length}" class="comment-form" data-article-index="${articles.length}">
    <div class="form-group">
        <label for="comment-name-${articles.length}">Nom</label>
        <input type="text" class="form-control" id="comment-name-${articles.length}" required>
    </div>
    <div class="form-group">
        <label for="comment-content-${articles.length}">Commentaire</label>
        <textarea class="form-control" id="comment-content-${articles.length}" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Ajouter un commentaire</button>
</form>
`;

articlesContainer.prepend(articleElement);

// Ajouter un gestionnaire d'événements pour le formulaire de commentaire
const commentForm = document.getElementById(`comment-form-${articles.length}`);
commentForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById(`comment-name-${articles.length}`).value;
const content = document.getElementById(`comment-content-${articles.length}`).value;

const commentData = {
name: name,
content: content,
date: new Date().toLocaleDateString()
};

articleData.comments.push(commentData);
saveArticles();

// afficher le nouveau commentaire
afficherNewComment(commentData, articles.length);

// réinitialiser le formulaire de commentaire
commentForm.reset();
});
}

// afficher un nouveau commentaire
function afficherNewComment(commentData, articleIndex) {
const commentsList = document.getElementById(`comments-${articleIndex}`)
const commentElement = document.createElement("li")
commentElement.classList.add("comment")
commentElement.innerHTML = `
<div><em>${commentData.date}</em></div>
<div class="comment-author">Nom: ${commentData.name}</div>
<div class="comment-content">Commentaire: ${commentData.content}</div>
`
commentsList.appendChild(commentElement);
}

// charger tous les articles au chargement de la page
window.addEventListener("load", function() {
articles.forEach(function(articleData) {
afficherNewArticle(articleData);
});
});
