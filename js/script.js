'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  //console.log("clickedElement:", clickedElement);

  clickedElement.classList.add('.active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post');
  //console.log(activeArticles);

  /* get 'href' attribute from the clicked link */
  const articleId = clickedElement.href.split('#')[1];
  //console.log(articleId);

  const articles = document.querySelectorAll('.posts article');

  for (let article of articles) {
    article.classList.remove('active');
  }

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.getElementById(articleId);
  /* add class 'active' to the correct article */
  //console.log(targetArticle);
  targetArticle.classList.add('active');
}

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';
const optTagsListSelector = '.tags.list';
const optCloudClassCount = '5';
const optCloudClassPrefix = 'tag-size-';
const optAuthorsListSelector = '.list .authors' >


  function generateTitleLinks(customSelector = '') {
    /* remove contents of titleList */
    const listTitle = document.querySelector(optTitleListSelector);
    //console.log(listTitle);
    listTitle.innerHTML = '';
    //console.log(customSelector);
    let html = '';

    /* for each article */
    const articles = document.querySelectorAll(
      optArticleSelector + customSelector
    );
    //console.log(customSelector);
    //console.log(articles);
    for (let article of articles) {
      //console.log(article);

      /* get the article id */
      const articleId = article.id;

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      //console.log(articleTitle);

      /* find the title element */
      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        '</span></a></li>';
      //console.log(linkHTML);
      //console.log(articleId);

      /* get the title from the title element */

      /* create HTML of the link */

      listTitle.insertAdjacentHTML('beforeend', linkHTML);

      /* insert link into titleList */

      html = html + linkHTML;
      //console.log(html);
    }
    const links = document.querySelectorAll('.titles a');
    //console.log(links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };
// generateTitleLinks();

function calculateTagsParams(tags) {


  const params = {
    min: 999999,
    max: 0
  };
  for (let tag in tags) {
    // console.log(tag + ' is used ' + tags[tag] + ' times');

    if (tags[tag] > params.max) {

      params.max = tags[tag];
    }
    if (tags[tag] < params.min) {

      params.min = tags[tag];

    }


  }

  return params;

}

function calculateTagClass(count, params) {

  const normalizedCount = count - params.min;

  const normalizedMax = params.max - params.min;

  const percentage = normalizedCount / normalizedMax;

  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  return optCloudClassPrefix + classNumber;
}



function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */

  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  //console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles) {
    //console.log(article);

    /* find tags wrapper */

    const titleList = article.querySelector(optArticleTagsSelector);
    //console.log(titleList);
    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.dataset.tags;

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    //console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      //console.log(tag);

      /* generate HTML of the link */

      /* add generated code to html variable */
      const linkHTML =
        '<li><a href="#-' + tag + '"><span>' + tag + '</span></a></li>';
      //console.log(linkHTML);
      //console.log(tag);

      html = html + linkHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags.hasOwnProperty(tag)) {
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */

    const list = article.querySelector(optArticleTagsSelector);

    //console.log(list);

    list.insertAdjacentHTML('beforeend', html);
    /* END LOOP: for every article: */
  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  /* [NEW]*/

  const tagsParams = calculateTagsParams(allTags);
  // console.log("tagsParams", tagsParams);

  let allTagsHTML = '';

  /*[NEW] START LOOP */
  for (let tag in allTags) {
    /* */

    const tagsLinkHTML = '<li class="' + calculateTagClass(allTags[tag], tagsParams) + '" ><a  href="#tags-' + tag + '">' + tag + '</a></li>';
    // console.log('tagLinkHTML:', tagsLinkHTML);

    allTagsHTML += tagsLinkHTML;



    // allTagsHTML += '<li><a href="#' + tag + '"><span>' + allTags[tag] + '</span></a></li>';

    // allTagsHTML += tag + '(' + allTags[tag] + ')';
    // console.log(allTagsHTML);
  }
  /*[NEW] END LOOP */

  /*[NEW] */
  tagList.innerHTML = allTagsHTML;
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  clickedElement.classList.add('active');
  //console.log(this);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  //console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');
  console.log(tag);

  /* find all tag links with class active */
  const tags = document.querySelectorAll('a.active[href^="#tag-"]');
  //console.log(tags);
  /* START LOOP: for each active tag link */
  for (let tag of tags) {
    if (tag.className == 'active') {
      /* remove class active */
      tag.classList.remove('active');

      /* END LOOP: for each active tag link */
    }
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagsLinks = document.querySelectorAll(`a[href^="${href}"`);

  /* START LOOP: for each found tag link */
  for (let tag of tagsLinks) {
    /* add class active */
    tag.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  const href = document.querySelectorAll('a[href^="#tag-"]');
  //console.log(href);
  for (let tags of href) {
    tags.addEventListener('click', tagClickHandler);
    //console.log(tags);
  }
}

addClickListenersToTags();

function calculateAuthorsParams(authors) {
  const params = {
    min: 9999,
    max: 0
  };
  for (const author in authors) {
    console.log(author + ' is used ' + authors[author] + ' times');

    if (authors[author] > params.max) {

      params.max = authors[author];
    }
    if (authors[author] < params.min) {

      params.min = authors[author];

    }

  }
  return params;
}

function calculateAuthorsClass(count, params) {

  const normalizedCount = count - params.min;

  const normalizedMax = params.max - params.min;

  const percentage = normalizedCount / normalizedMax;

  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  return optCloudClassPrefix + classNumber;
}


function generateAuthors() {

  let allAuthors = {};


  const articles = document.querySelectorAll(optArticleSelector);
  //console.log(authors);
  for (let article of articles) {
    //console.log(author);

    //console.log(html);
    const author = article.querySelector(optAuthorsListSelector);

    let html = '';
    const authorTag = article.dataset.author;
    //console.log(authorTags);

    const linkHTML = '<li><a href="#author-' + authorTag + '"><span>' + authorTag + '</span></a></li>';

    html = html + linkHTML;
    /* [NEW] check if this link is NOT already in allTags */
    if (!allAuthors.hasOwnProperty(author)) {
      /* [NEW] add generated code to allTags array */
      allAuthors[author] = 1;
    } else {
      allAuthors[author]++;
    }

    const list = article.querySelector(optArticleAuthorSelector);
    //console.log(list);
    list.insertAdjacentHTML('beforeend', linkHTML);
  }
  const authorList = document.querySelector('.list .authors');

  const authorsParams = calculateAuthorsParams(allAuthors);
  console.log('authorParams', authorsParams);

  let allAuthorsHTML = '';

  for (let author in allAuthors) {

    const authorsLinkHTML = '<li class="' + calculateAuthorsClass(allAuthors[author], authorsParams) + '" ><a  href="#authors-' + author + '">' + author + '</a></li>';
    console.log('authorsLinkHTML:', authorsLinkHTML);

    // allAuthorsHTML += '<li><a href="#authors-' + author + '"><span>' + allAuthors[author] + '</span></a></li>';
    allAuthorsHTML += authorsLinkHTML;
    console.log(allAuthorsHTML)
  }

  authorList.innerHTML = allAuthorsHTML;

}
generateAuthors();

function authorClickHandler(event) {
  event.preventDefault();

  const clickedElement = this;

  // console.log(this);

  clickedElement.classList.add('active');

  const href = clickedElement.getAttribute('href');
  // console.log(href);

  const author = href.replace('#author-', '');
  // console.log(author);

  const authors = document.querySelectorAll('a.active[href^="#author-"]');
  // console.log(authors);
  for (let author of authors) {
    if (author.className == 'active') {
      /* remove class active */
      author.classList.remove('active');

      /* END LOOP: for each active tag link */
    }
  }
  const authorsLinks = document.querySelectorAll(`a[href^="${href}"`);
  for (let author of authorsLinks) {
    author.classList.add('active');
  }

  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors() {
  const href = document.querySelectorAll('a[href^="#author-"]');
  console.log(href);
  for (let authors of href) {
    authors.addEventListener('click', authorClickHandler);
    console.log(authors);
  }
}
addClickListenersToAuthors();
