// Initialization for ES Users
// import { Input, Ripple, initMDB } from "mdb-ui-kit";

// initMDB({ Input, Ripple });

// const a = document.querySelector('a')

// console.log(
//     a.nodeName,
    // a.innerHTML
    // a.innerText
    // a.textContent
// )
// a.inne rHTML = "hello"

// a.setAttribute("href", "https://www.baid")
// a.removeAttribute("href")
// console.log(a.getAttribute("class"))
// console.log(a.classList.add("bg-danger"))
// console.log(a.classList.remove("navbar-brand"))

// setInterval(()=>{
//     a.classList.toggle("bg-primary")
//     a.classList.remove("bg-danger")
// },1000)

// a.style.color="red";
// console.log(a.style.color)
// console.log(getComputedStyle(a).color);

// const newEl = document.createElement('a')
// newEl.innerHTML = "Hello world"
// document.querySelector('a').appendChild(newEl)

// const link = document.querySelector("a")
// console.log(
    // link.querySelector("img")
    // link.children
    // link.childNodes
    // link.parentElement
// )

// Écoute l'événement de soumission du formulaire
document.getElementById("article-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    // Récupère les valeurs saisies par l'utilisateur
    const title = document.getElementById("article-title").value;
    const content = document.getElementById("article-content").value;
    
    // Crée un nouvel élément d'article
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
    
    // Ajoute l'élément d'article à la section des articles
    document.querySelector(".d_flex").innerHTML += newArticle;
    
    // Réinitialise le formulaire
    document.getElementById("article-form").reset();
});
