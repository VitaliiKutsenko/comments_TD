import $el from '../helper/createElem.js'
import {cleanComments} from "../helper/cleanComments";

export function createdForm(URL, page) {
	const {form} = document.forms
	form.addEventListener('submit', async (e) => {
		e.preventDefault()
		const formData = new FormData(form)
		let response = await fetch(URL, {
			method: 'POST',
			body: formData
		})
		if (response.status === 200) {
			e.target.lastElementChild.children[0].children[0].value = ''
			e.target.lastElementChild.children[1].children[0].children[0].value = ''
			alert(form)
			cleanComments(page)
		}
	})
}

function alert(elem) {
	const alert = $el('div', 'Комментарий \n опубликован', {className: 'alert'})
	alert.classList.add('active')
	elem.append(alert)
	setTimeout(() => {
		alert.remove()
	}, 2000)
}