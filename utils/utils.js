/**
 * 防抖函数
 * @param {function} fn 
 */
function debounce(fn) {
	setTimeout(fn, 1000);
}