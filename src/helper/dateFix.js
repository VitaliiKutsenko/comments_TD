export const dataFix = (updateTime, createdTime) => {
	const currentTime = new Date()
	const calcTime = new Date(Date.parse(createdTime))
	return `(${Object.values(getTime(calcTime, currentTime))} ${Object.keys(getTime(calcTime, currentTime))} назад)`
}

function getTime(calcTime, currentTime) {
	if (calcYear()) return {'год.': calcYear()}
	if (calcMonths()) return {'мес.': calcMonths()}
	if (parseInt(calcDays())) return {'дн.': parseInt(calcDays())}
	if (calcHours()) return {'час.': calcHours()}
	if (calcMinutes()) return {'мин.': calcMinutes()}
	if (calcSeconds()) return {'сек.': calcSeconds()}

	function calcYear() {
		return (Math.floor(calcDays() / 365))
	}

	function calcMonths() {
		return (Math.floor((calcDays() - (calcYear() * 365)) / 30))
	}

	function calcDays() {
		return (Math.abs(currentTime.getTime() - calcTime.getTime()) / (1000 * 3600 * 24))
	}

	function calcHours() {
		return parseInt(calcDays() * 24)
	}

	function calcMinutes() {
		return parseInt(calcDays() * 1440)
	}

	function calcSeconds() {
		return parseInt(calcDays() * 86400)
	}
}

