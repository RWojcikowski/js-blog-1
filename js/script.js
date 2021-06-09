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
  console.log(activeArticles);

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

const optArticleSelector = ".post";
const optTitleSelector = ".post-title";
const optTitleListSelector = ".titles";
const optArticleTagsSelector = ".post-tags.list";

function generateTitleLinks() {
  /* remove contents of titleList */
  const listTitle = document.querySelector(optTitleListSelector);
  console.log(listTitle);
  listTitle.innerHTML = "";

  let html = "";

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  for (let article of articles) {
    console.log(article);

    /* get the article id */
    const articleId = article.id;

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* find the title element */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";
    console.log(linkHTML);
    console.log(articleId);

    /* get the title from the title element */

    /* create HTML of the link */

    listTitle.insertAdjacentHTML("beforeend", linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
    console.log(html);
  }
}

generateTitleLinks();
const links = document.querySelectorAll(".titles a");
console.log(links);

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles) {
    console.log(article);
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    console.log(titleList);
    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */
    const articleTags = document.querySelectorAll(optArticleTagsSelector);
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(" ");
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);
      /* generate HTML of the link */
      /* add generated code to html variable */
    }
    /* END LOOP: for each tag */
  }
  /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
}

generateTags();
