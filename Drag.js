function beginDrag(elementToDrag,event){

	// 被拖拽元素坐标
	var x = parseInt(elementToDrag.style.left);
	var y = parseInt(elementToDrag.style.top);

	// 鼠标点击元素时的坐标
	var eX = event.clientX;
	var eY = event.clientY;

	// 给元素注册mousemove事件和mouseup事件
	document.addEventListener("mousemove",moveHandler,true);
	document.addEventListener("mouseup",upHandler,true);

	event.stopPropagation();
	event.preventDefault();

	function moveHandler(event){

		elementToDrag.style.left = event.clientX - eX + x + "px";
		elementToDrag.style.top = event.clientY - eY + y + "px";

		event.stopPropagation();
	}

	function upHandler(event){

		document.removeEventListener("mousemove",moveHandler,true);
		document.removeEventListener("mouseup",upHandler,true);

		event.stopPropagation();
	}
}