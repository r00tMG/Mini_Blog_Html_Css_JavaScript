// // Fonction pour créer un article
// /**
// * @param {title:string, body: string}
// * @returns {HTMLElement}
// */
// function createArticle(post){

// //Creation element article et ses attributs
// const article = createElement(
// 'article',
// {
// class:'article mb-4 bg-light rounded-4'
// }
// )

// //Element parent de link
// const divImage = createElement(
// 'div',
// {
// class:' '
// }
// )

// //Element link parent de l'image
// const a = createElement(
// 'a',
// {
// class:"article-img text-decoration-none",
// href:'article.html'
// }
// )

// //Element image avec ses attributs
// const img = createElement(
// 'img',
// {
// class: 'img-fluid',
// src:'img/blog-post.jpg',
// id:`article-image`,
// alt:'image article'
// }
// )

// // Element div contenant la date de publication
// const divDate = createElement(
// 'div',
// {
// class:'article_date mt-3'
// }
// )
// divDate.innerText = `Publié par ${new Date().toLocaleDateString()}`


// // Creation de l'element div contenant la date le titre et le paragraphe
// const divDateTitreParag = createElement(
// 'div',
// {
// class:'bg-light'
// }
// )

// // Insertion du titre et du paragraphe dans l'element article
// const h2 = createElement(
// 'h2',
// {
// class:'article_titre'
// }
// )
// h2.innerHTML = post.title

// const p = createElement(
// 'p',
// {
// class:'article_titre'
// }
// )
// p.innerHTML = post.body


// // insertion de l'element image dans le lien
// a.appendChild(img)
// divImage.appendChild(a)

// // Insertion de l'element divImage, divDate, divDateTitreParag dans l'element article

// divDateTitreParag.append(h2, p)
// article.append(divImage, divDate, divDateTitreParag)

// const divIdArticle = document.querySelector('div #article')
// divIdArticle.append(article)

// // article.innerHTML = `

// // <div class="container-fluid d_flex">
    // // <div class="container">
        // // <div id="article">
            // // <!----- Affichage des articles ----->


            // // <!-----Fin affichage des articles----->

            // // <div id="commentaire">
                // // <ul class="comments-list">
                    // // <!----- Affichage des commentaires ----->
                    // // <div class="comment-author">
                        // // <div class="profile-photo ">
                            // // <img class="rounded rounded-circle" src="img/profile-photo.jpeg" width="50px"
                                // height="50px" alt="">
                            // // </div>
                        // // Titre :
                        // // </div>
                    // // <div class="comment-content">
                        // // Contenue :
                        // // </div>
                    // // <!-----Fin affichage des commentaires----->
                    // // </ul>
                // // <form class="form-group comment-form">
                    // // <div class="mb-3">
                        // // <label for="comment-name">Nom</label>
                        // // <input type="text" id="comment-name" name="comment-name">
                        // // </div>
                    // // <div class="mb-3">
                        // // <label for="comment-content">Commentaire:</label>
                        // //
                        // <textarea class="form-control" id="comment-content" name="comment-content"></textarea>
                        // //
                    // </div>
                    // // <button type="submit">Ajouter un commentaire</button>
                    // // </form>
                // // </div>
            // // </div>



        // // </div>
    // // </div>
// // `

// // Création de l'affichage de donnée entrée dans le formulaire de commentaire
// const ulComment = createElement(
// 'ul',
// {
// class:'comments-list'
// }
// )
// const divCommentAuthor = createElement(
// 'div',
// {
// class:'comments-author'
// }
// )
// const divPhotoProfile = createElement(
// 'div',
// {
// class:'profile-photo'
// }
// )
// const imageProfil = createElement(
// 'img',
// {
// class:'rounded rounded-circle',
// src:'img/profile-photo.jpeg',
// with:"50px",
// height:"50px",
// alt:'Photo Profil'
// }
// )
// imageProfil.innerText = 'Titre :'
// const divCommentContent = createElement(
// 'img',
// {
// class:'comment-content',

// }
// )
// divCommentContent.innerText = 'Commentaire :'

// divPhotoProfile.appendChild(imageProfil)
// divCommentAuthor.appendChild(divPhotoProfile)

// ulComment.append(divCommentAuthor, divCommentContent)

// //Creation element formulaire
// const formComment = createElement(
// 'form',
// {
// class:'form-group comment-form'
// }
// )
// // Creation elements input et label du nom dans un div
// const divInputLabel1 = createElement(
// 'div',
// {
// class:'mb-3'
// }
// )
// const id='comment-name'
// const labelNom = createElement(
// 'label',
// {
// for:id
// }
// )
// labelNom.innerText = 'Nom'
// const inputNom = createElement(
// 'input',
// {
// type:'text',
// id,
// name:id,

// }
// )

// divInputLabel1.append(labelNom,inputNom)

// // Creation elements input et label du commentaire dans un div
// const divInputLabel2 = createElement(
// 'div',
// {
// class:'mb-3'
// }
// )
// const idc='comment-content'
// const labelCommentaire = createElement(
// 'label',
// {
// for:idc
// }
// )
// labelCommentaire.innerText='Commentaire'
// const textareaCommentaire = createElement(
// 'textarea',
// {
// class:"form-control",
// idc,
// name:idc
// }
// )
// divInputLabel2.append(labelCommentaire,textareaCommentaire)
// const buttonSubmit = createElement(
// 'button',
// {
// type:'submit',
// class:'btn btn-primary'
// }
// )
// //
// formComment.append(divInputLabel1,divInputLabel2,buttonSubmit)

// const sectionIdCommentaire = document.querySelector('div #commentaire')
// sectionIdCommentaire.append(ulComment,formComment)
// divIdArticle.append(sectionIdCommentaire)



// console.log(article)

// return article

// }


// // Fonction création d'element et ajout d'attributs
// /**
// * @param {tagName: string, attributes:Object}}
// * @returns {HTMLElement}
// */

// function createElement(tagName, attributes = {}) {
// const element = document.createElement(tagName)
// // element.innerHTML = content
// for(let [key,value] of Object.entries(attributes)){
// element.setAttribute(key,value)
// }
// return element
// }



// async function main(){
// const wrapper = document.querySelector("div #article")
// const loader = document.createElement('p')
// loader.innerText = 'Loading...'
// wrapper.prepend(loader)
// try {
// const r = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=1`,{
// headers:{
// Accept: "application/json"
// }
// })
// if(!r.ok){
// throw new Error("Erreur server")
// }
// const posts = await r.json()
// console.log(posts)
// for(const post of posts){
// wrapper.prepend(createArticle(post))
// }
// loader.remove()
// } catch (e) {
// loader.innerText = 'Impossible de récupérer les données'
// loader.style.background = 'red'
// return
// }

// }
// main()














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
