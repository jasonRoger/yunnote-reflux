module.exports = {
	composeData: function(ret, errcode, errmsg, data) {
		return {
			ret: ret,
			errcode: errcode || 200,
			errmsg: errmsg || '',
			data: data || {}
		}
	},
	fetchData: function(error, results, message, checkExist, checkNotExist) {
		if(error) {
			return this.composeData(false, '500', error);
		} else if(checkExist) {
			return results && results.length > 0 ? this.composeData(false, 100, message, results[0]) : this.composeData(true);
		} else if(checkNotExist) {
			return results && results.length > 0 ? this.composeData(true) : this.composeData(false, 111, message);
		} else {
			return this.composeData(true, '', '', results);
		}
	}
}