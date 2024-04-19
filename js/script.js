// liste des articles
let articles = []

// Chargement des articles dans le localStorage
if (localStorage.getItem("articles")) {
articles = JSON.parse(localStorage.getItem("articles"))
}

// fonction pour sauvegarder les articles dans le localStorage
function saveArticles() {
localStorage.setItem("articles", JSON.stringify(articles));
}

// ajouter un nouveau article
document.getElementById("article-form").addEventListener("submit", function(event) {
event.preventDefault()

const title = document.getElementById("article-title").value
const content = document.getElementById("article-content").value
const image = document.getElementById("article-image").files[0]

// conversion de l'image en URL
const imageUrl = URL.createObjectURL(image);
console.log(imageUrl)
// declaration de l'objet article
let articleData = {
title: title,
content: content,
imageUrl: imageUrl,
date: new Date().toLocaleDateString(),
comments: []
};
console.log(articleData)
articles.push(articleData);
saveArticles();

// Afficher le nouvel article
afficherNewArticle(articleData);

// Réinitialiser le formulaire
document.getElementById("article-form").reset()
});
/**
 * 
 * @param {Object} articleData 
 */
// Afficher un nouvel article
function afficherNewArticle(articleData) {
const articlesContainer = document.getElementById("articles-container")

const articleElement = document.createElement("div")
articleElement.classList.add("article")
articleElement.innerHTML = `

<article class="article bg-light rounded-4">
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
    <button class="mt-3 btn btn-danger delete-article">Delete
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
    </button>
    <button class="mt-3 btn btn-primary edit-article">Edit
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
    </button>
</article>

<h4 class="mt-4 fs-3 ">Commentaires</h4>
<ul id="comments-${articles.length}" class="comments-list"></ul>
<form id="comment-form-${articles.length}" class="comment-form" data-article-index="${articles.length}">
    <div class="form-group">
        <label for="comment-name-${articles.length}">Nom</label>
        <input type="text" class="form-control" id="comment-name-${articles.length}" required>
    </div>
    <div class="form-group ">
        <label for="comment-content-${articles.length}">Commentaire</label>
        <textarea class="form-control" id="comment-content-${articles.length}" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary my-3">Ajouter un commentaire</button>
</form>
`

articlesContainer.prepend(articleElement)


// gestionnaire d'événements pour le bouton de suppression d'article
const deleteButton = articleElement.querySelector('.delete-article');
deleteButton.addEventListener('click', function() {
    removeArticle(articleElement);
});

/**
 * Fonction pour supprimer un article
 */
function removeArticle(articleElement) {
    articleElement.remove();
    // Mettre à jour le tableau d'articles après la suppression
    articles = articles.filter(article => article.title !== articleElement.querySelector('.article-title').innerText);
    saveArticles();
}

 // Ajouter un gestionnaire d'événements pour le bouton de modification d'article
 const editButton = articleElement.querySelector('.edit-article');
 editButton.addEventListener('click', function() {
     editArticle(articleData);
 });


/**
 * Fonction pour modifier un article
 */
function editArticle(articleData) {
    // Créer un formulaire de modification d'article
    const editForm = document.createElement('form');
    editForm.classList.add('edit-article-form');

    // Champ de titre
    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Titre:";
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = articleData.title;
    titleLabel.appendChild(titleInput);
    editForm.appendChild(titleLabel);

    // Champ de contenu
    const contentLabel = document.createElement('label');
    contentLabel.textContent = "Contenu:";
    const contentInput = document.createElement('textarea');
    contentInput.value = articleData.content;
    contentLabel.appendChild(contentInput);
    editForm.appendChild(contentLabel);

    // Bouton de soumission
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Enregistrer';
    submitButton.addEventListener('click', function() {
        // Mettre à jour les données de l'article avec les nouvelles valeurs du formulaire
        articleData.title = titleInput.value;
        articleData.content = contentInput.value;

        // Mettre à jour l'affichage de l'article avec les nouvelles données
        const articleElement = document.querySelector('.article-title');
        articleElement.textContent = articleData.title;

        const articleContentElement = document.querySelector('.article-content');
        articleContentElement.textContent = articleData.content;

        // Cacher le formulaire de modification
        editForm.remove();
        // Sauvegarder les articles mis à jour dans le localStorage
        saveArticles();
    });
    editForm.appendChild(submitButton);

    // Bouton d'annulation
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Annuler';
    cancelButton.addEventListener('click', function() {
        // Cacher le formulaire de modification sans effectuer de modifications
        editForm.remove();
    });
    editForm.appendChild(cancelButton);

    // Insérer le formulaire de modification avant l'article
    const articleContainer = document.querySelector('.article');
    articleContainer.parentNode.insertBefore(editForm, articleContainer);
}



// gestionnaire d'événements pour le formulaire de commentaire
const commentForm = document.getElementById(`comment-form-${articles.length}`)
commentForm.addEventListener("submit", function(event) {
event.preventDefault()

const name = document.getElementById(`comment-name-${articles.length}`).value;
const content = document.getElementById(`comment-content-${articles.length}`).value

const commentData = {
name: name,
content: content,
date: new Date().toLocaleDateString()
}

articleData.comments.push(commentData)
saveArticles()

// afficher le nouveau commentaire
afficherNewComment(commentData, articles.length)

// réinitialiser le formulaire de commentaire
commentForm.reset()
})
}



/**
 * 
 * @param {Object} commentData 
 * @param {Object} articleIndex 
 */
// afficher un nouveau commentaire
function afficherNewComment(commentData, articleIndex) {
const commentsList = document.getElementById(`comments-${articleIndex}`)
const commentElement = document.createElement("li")
commentElement.classList.add("comment")
commentElement.innerHTML = `
<div class="mt-2">
</div>
<div class="comment-author">
    <img class="rounded profile-photo rounded-circle" src="img/profile-photo.jpeg" width="50px" height="50px" alt="">
    ${commentData.name}(<em>${commentData.date}</em>)
 </div>
<div class="comment-content">${commentData.content}</div>
`
commentsList.appendChild(commentElement)
}

// charger les articles au chargement de la page
window.addEventListener(
    "load", 
    function() {
    articles.forEach(function(articleData) {
     afficherNewArticle(articleData)
    })
})

// rechercher un article par titre
document.getElementById('search-input').addEventListener(
    'change', 
    function(event) {
    event.preventDefault()
    let searchTerme = document.getElementById('search-input').value.toLowerCase()
    const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchTerme))
    displaySearchResults(filteredArticles)
})



/**
 * 
 * @param {string} results 
 * @returns {string}   
 */
function displaySearchResults(results) {
    const articlesContainer = document.getElementById("article_rechercher")
    articlesContainer.innerHTML = ` <p class="text-light text-center">Resultats de la recherche :  </p>`;
    try {
        if (results.length === 0) {
        articlesContainer.innerHTML = `<p class="text-danger text-center">Aucun résultat trouvé.</p>`
    } else {
        results.forEach(function(articleData){
                const html = `<p class"text-light text-center">${articleData.title}</p><br/>`
                articlesContainer.innerHTML += html
            afficherNewArticle(articleData)
        })
       
    }
    } catch (error) {
        console.error("L'url de l'image n'est pas dans le localStorage", error)
    }
    

}






