import {fetches} from "../app";

export function cleanComments(page) {
	const btns = document.querySelectorAll('.btn');
	const comments = document.querySelectorAll('.comment-list')
	Array.from(comments).map(item => item.remove())
	Array.from(btns).map(item => item.remove())
	fetches(page)
}