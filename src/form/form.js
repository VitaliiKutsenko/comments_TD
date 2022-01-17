import $el from '../helper/createElem.js'
import {cleanComments} from "../helper/cleanComments";

const {form} = document.forms

export function createdForm(URL, page) {

	const forms = async (e) => {
		e.preventDefault()
		const formData = new FormData(form)
		let response = await fetch(URL, {
			method: 'POST',
			body: formData
		})
		if (response.status === 200) {
			const inputTextarea = document.querySelector('#add-comment__area')
			const inputText = document.querySelector("#add-comment__input")
			inputTextarea.value = ''
			inputText.value = ''
			alert(form)
			cleanComments(page)
		}
	}
	form.addEventListener('submit', forms, {once: true})
}

function alert(elem) {
	const alert = $el('div', 'Комментарий \n опубликован', {className: 'alert'})
	alert.classList.add('active')
	elem.append(alert)
	setTimeout(() => {
		alert.remove()
	}, 2000)
}