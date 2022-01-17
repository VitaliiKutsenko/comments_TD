import {comments} from './comments/comments.js'
import {navigationButton} from './navigation/navigationButton/navigationButton.js'
import {createdForm} from "./form/form";
import {cleanComments} from "./helper/cleanComments";
import './style.css'

const URL = 'https://jordan.ashton.fashion/api/goods/30/comments'

export async function fetches(page = 1, url = URL) {

	const api = new Promise((resolve, reject) => {
		const API = fetch(`${url}?page=${page}`)
		resolve(API)
	})
	api.then((item) => {
		return item.json()
	})
		.then((data) => {
			data.data.map((item) => comments(item));
			return data
		})
		.then(data => {
			navigationButton(data)
			return data
		}).then(item => {
		const btns = document.querySelectorAll('.btn');
		const itemHandler = (e) => {
			const url = e.target.dataset.btn
			cleanComments(+url)
		}
		Array.from(btns).map(item => {
			item.addEventListener('click', itemHandler)
		})
		return item
	}).then(data => {
		const postForm = document.querySelector('.add-comment__post-btn')
		postForm.onclick = () => createdForm(URL,data.current_page)
	})
		.catch(item => console.log(`${item} is not defined`));
}

fetches(1, URL);

