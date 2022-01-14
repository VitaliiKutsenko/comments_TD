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
			createdForm(URL, +url)
			cleanComments(+url)
		}
		Array.from(btns).map(item => {
			item.addEventListener('click', itemHandler)
		})
	})
		.catch(item => console.log(`${item} is not defined`));
}

fetches(1, URL);

