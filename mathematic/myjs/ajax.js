// AJAX 物件
var ajax;

// 依據不同的瀏覽器，取得 XMLHttpRequest 物件
function createAJAX() {
　if (window.ActiveXObject) {
　　try {
　　　return new ActiveXObject("Msxml2.XMLHTTP");
　　} catch (e) {
　　　try {
　　　　return new ActiveXObject("Microsoft.XMLHTTP");
　　　} catch (e2) {
　　　　return null;
　　　}
　　}
　} else if (window.XMLHttpRequest) {
　　return new XMLHttpRequest();
　} else {
　　return null;
　}
}

// 非同步傳輸的回應函式，用來處理伺服器回傳的資料
function onRcvData () {
　if (ajax.readyState == 4) {
　　if (ajax.status == 200) {
　　　var content =$("#content");
　　　content.append("這是Ajax顯示的:"+ajax.responseText+"<br>");
　　} else {
　　　alert ("伺服器處理錯誤");
　　}
　} 
}

// 非同步送出資料
function ajaxSendRequest(uri, content) {
　ajax = createAJAX() ;
　if (!ajax) {
　　alert ('使用不相容 XMLHttpRequest 的瀏覽器');
　　return 0;
　}
　ajax.onreadystatechange = onRcvData;
　ajax.open ("POST", uri, true);
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
　ajax.send (content);
}