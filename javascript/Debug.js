function debug(msg){
	if(!debug.box){
		debug.box = document.createElement("div");
		debug.box.setAttribute("style",
							   "background-color:white; " +
							   "font-family:monospace; " +
							   "border:solid black 3px; " +
							   "padding:10px;");
		debug.box.count = 1;
		document.body.appendChild(debug.box);
		debug.box.innerHTML = "<h1>Debugging Output!</h1>";
	}
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(debug.box.count++ + ": " + msg));
	debug.box.appendChild(p);
}