"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");

  /* [DONE] remove class 'active' from all article links  */
  
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  console.log("clickedElement:", clickedElement);
  
  clickedElement.classList.add(".active");
  
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".post");

  // for (let activeArticle of activeArticles) {
  //   activeArticle.classList.remove("active");
  // }
  /* get 'href' attribute from the clicked link */
  const articleId = clickedElement.href.split("#")[1];
  console.log(articleId);

  const articles = document.querySelectorAll(".posts article");

  for (let article of articles) {
    article.classList.remove("active");
  }

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.getElementById(articleId);
  /* add class 'active' to the correct article */
  console.log(targetArticle);
  targetArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
 
  /* remove contents of titleList */
const listTitle = document.querySelector('.titles');
console.log(listTitle);
listTitle.innerHTML = '';
  
  /* for each article */
  const articles = document.querySelector('.post');

for (let post of posts) {
  console.log(articles);
}

    /* get the article id */
    
    const linkHTML = '<li><a href="#' + articleId +  '"><span>' + articleTitle +  '</span></a></li>';
    
    console.log(linkHTML)
    
    /* find the title element */
    
    titleList.innerHTML = titleList.innerHTML + linkHTML;

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();