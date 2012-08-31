function findObjProperties(obj,objString){
	
	var resultDiv = document.createElement("div");
	var result = obj+"<font size='5' color='blue'>"+objString+"'s properties !</font><br>";
	var count = 1;
	for(var p in obj){
		try{
			result += count+".propertyName:<font color='green'>"+p+"</font> , propertyValue:"+obj[p]+"<br>";
		}catch(e){
			result += count+".not found:<font color='red'>"+p+"</font><br>";
		}
		count++;
	}
	resultDiv.innerHTML = result;
	document.body.appendChild(resultDiv);
}