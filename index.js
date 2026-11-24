import { articleList } from "./articleList.js";

// Elements
const articleContainer = document.getElementById('article-container');
const viewMoreBtn = document.getElementById('view-more');

// Functions
function getHtmlBlog({id, image, date, title, description}) {
	return `
				 <li class="card" id='card-${id}'>
					<img src="./images/article-image-0${image}.png" alt="" class="blog-image">
					<p class="article-date">${date}</p>
					<h2 class="article-title">${title}</h2>
					<p class="article-description">${description}</p>
				 </li>
	`
}

function getArticleListHtml(blogs) {
	return blogs.map(art=>getHtmlBlog(art)).join('');
}

function renderBlogs(blogs) {
	articleContainer.innerHTML = getArticleListHtml(blogs)
}

// Render

renderBlogs(articleList)

// EventListener

document.addEventListener('click',(e)=>{
	if(e.target.id === 'view-more') {
		viewMoreBtn.textContent = 'There is no more blog for the moment';
		viewMoreBtn.disabled = true;
		setTimeout(() => {
			viewMoreBtn.textContent = 'View more';
		viewMoreBtn.disabled = false;
		}, 5000);
	}
})