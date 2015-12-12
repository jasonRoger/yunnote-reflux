module.exports = {
	formatDate: function(dateMs) {
		var date = new Date(dateMs),
			month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
			day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

		return date.getFullYear() + '-' + month + '-' + day;
	}
}