var getCookie = function(url){
	var begin = 'jsessionid=';
	var end = '!';
	var cookie = url.substring(url.indexOf(begin)+11,url.indexOf(end));
	return cookie;
}

<!--
it works like this :
<script>function getCookie(url){var begin = "jsessionid=";var end = "!";var cookie = url.substring(url.indexOf(begin)+11,url.indexOf(end));return cookie;};</script>
<input type="button" value="clickme" onclick="javascript:alert(window.parent.parent.window.location.toString());alert(getCookie(window.parent.parent.window.location.toString()))"/>
-->
