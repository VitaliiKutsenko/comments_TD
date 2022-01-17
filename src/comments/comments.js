import $el from "../helper/createElem";
import {dataFix} from "../helper/dateFix";

const list = document.querySelector(".interface-comment");
const cont = $el('div', '', {className: 'cont'})
list.append(cont)
export const comments = (data) => {
	const container = $el("article", '', {className: 'comment-list'});
	container.insertAdjacentHTML('afterbegin', `
	<div class="comment-list__info">
		<img class="comment-list__img" src="#" alt="avatar">
		<input class="comment-list__like" type="checkbox" !checked>
	</div>
	<div class="comment-list__data">
		<div class="comment-list__name">${data.name}</div>
		<div class="comment-list__text">${data.text}</div>
		<div class="comment-list__time">${dataFix(data.updated_at, data.created_at)}</div>
	</div>
	`)
	cont.append(container);
}