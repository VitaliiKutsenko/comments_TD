import $el from "../../helper/createElem";

const page = document.querySelector('.navigation_comment__pagination')
export const navigationButton = (data) => {
	const match = (str) => {
		if (isNaN(+str)) {
			if (str.toLowerCase().includes('previous')) {
				return '<'
			} else if (str.toLowerCase().includes('next')) {
				return '>'
			} else return str
		} else {
			return str
		}
	}
	data.links.forEach(item => {
		const el = $el("button", match(item.label), {className: `btn`})
		el.dataset.btn = item.label
		if (item.active) {
			el.classList.add('active')
		}
		page.append(el)
	})
}
