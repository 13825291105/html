
function getEle(id){
	return document.getElementById(id);
}

/**
 *  给定元素查找他的第一个元素子节点 
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getFirstNode(ele) {
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
/**
 * 给定元素查找她得最后一个元素节点 
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getLastNode(ele) {
    return ele.lastElementChild;
}
/**
 * 给定元素查找他的下一个元素兄弟节点
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}
/**给定元素查找他的上一个元素兄弟节点
 * [getPreviosNode description]
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getPreviosNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
    
}
/**
 * 给定元素和索引值查找指定索引值得兄弟元素节点
 * @param  {[type]} ele   [description]
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
function getEleOfIndex(ele, index) {
    return ele.parentNode.children[index];
}

/**
 * 给定元素查找他的所有得兄弟节点
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getAllSiblingNodes(ele) {
    var newArr = []; //定义一个数组 装所有得兄弟节点
    var arr = ele.parentNode.children;
    for (var i = 0; i < arr.length; i++) {
        //如果不是传递过来得元素本身
        if (arr[i] !== ele) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}