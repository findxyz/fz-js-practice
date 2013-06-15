/*
 * File:listlinks.js
 * 在新窗口中列出指定文档内的所有链接。
 */
function listlinks(dom){
	var newwin = window.open("","listlinks","width=600,height=500");
	if(dom.links.length > 0){
		for(var i=0;i<dom.links.length;i++){
			newwin.document.write("<a href='"+dom.links[i].href+"'>");
			newwin.document.write(dom.links[i].href);
			newwin.document.write("</a><br>")
		}
		newwin.document.close();
	}
}