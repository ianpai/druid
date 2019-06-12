/**
 * 防抖函数
 * @param {function} func 需要执行的函数
 * @param {number} wait 等待执行的时间
 */
export function debounce(func, wait) {
	console.log('debounce', this)
	let timer = 0;
	return function(...args) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args)
		}, wait);
	}
}


