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
const optArticleTagsSelector = ".post-tags .list";
const optArticleAuthorSelector = ".post-author";

function generateTitleLinks(customSelector = "") {
  /* remove contents of titleList */
  const listTitle = document.querySelector(optTitleListSelector);
  console.log(listTitle);
  listTitle.innerHTML = "";
  console.log(customSelector);
  let html = "";

  /* for each article */
  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  console.log(customSelector);
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
    const articleTags = article.dataset.tags;

    /* split tags into array */
    const articleTagsArray = articleTags.split(" ");
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);

      /* generate HTML of the link */
      const list = article.querySelector(optArticleTagsSelector);
      console.log(list);
      /* add generated code to html variable */
      const linkHTML =
        '<li><a href="#tag-' + tag + '"><span>' + tag + "</span></a></li>";
      console.log(linkHTML);
      console.log(tag);

      list.insertAdjacentHTML("beforeend", linkHTML);
      html = html + linkHTML;
    }
    /* END LOOP: for each tag */
  }

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  clickedElement.classList.add("active");
  console.log(this);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute("href");
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace("#tag-", "");
  console.log(tag);

  /* find all tag links with class active */
  const tags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(tags);
  /* START LOOP: for each active tag link */
  for (let tag of tags) {
    if (tag.className == "active") {
      /* remove class active */
      tag.classList.remove("active");

      /* END LOOP: for each active tag link */
    }
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  generateTitleLinks('[data-tags~="' + tag + '"]');

  /* START LOOP: for each found tag link */

  /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}
const href = document.querySelectorAll('a[href^="#tag-"]');
console.log(href);
for (let tags of href) {
  tags.addEventListener("click", tagClickHandler);
  console.log(tags);
}

function addClickListenersToTags() {
  const href = document.querySelectorAll('a[href^="#tag-"]');
  console.log(href);
  for (let tags of href) {
    tags.addEventListener("click", tagClickHandler);
    console.log(tags);
  }
}

addClickListenersToTags();

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

function generateAuthors() {
  const authors = document.querySelectorAll(optArticleAuthorSelector);
  console.log(authors);
  for (let author of authors) {
    console.log(author);

    const authorList = author.querySelector(optArticleAuthorSelector);
    console.log(authorList);

    let html = "";
    console.log(html);

    const authorTags = author.dataset.tags;
    console.log(authorTags);

    const list = author.querySelector(optArticleAuthorSelector);
    console.log(list);

    const authorTagsArray = authorTags;
    console.log(authorTagsArray);

    const linkHTML =
      '<li><a href="#' + +author + '"><span>' + author + "</span></a></li>";
    console.log(linkHTML);
    console.log(author);

    author.insertAdjacentHTML("beforeend", linkHTML);
    html = html + linkHTML;
  }
}
generateAuthors();
//
//
//
//
//
function addClickListenersToAuthors() {
  const href = document.querySelectorAll('a[href^="#"]');
  console.log(href);
  for (let author of href) {
    console.log(author);

    const authorList = author.querySelector(optArticleAuthorSelector);
    console.log(authorList);

    author.addEventListener("click", authorClickHandler);
    console.log(author);
  }
}

addClickListenersToAuthors();

for (let link of links) {
  link.addEventListener("click", authorClickHandler);
}

function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log(clickedElement);
}

//
//
//
//
