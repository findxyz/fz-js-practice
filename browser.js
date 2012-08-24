var browser = new Object();
browser.version = parseInt(navigator.appVersion);
browser.appName = "";
if(navigator.appName.indexOf("Netscape") != -1){
	browser.appName = "Netscape";
}else if(navigator.appName.indexOf("Microsoft") != -1){
	browser.appName = "Microsoft";
}
document.write("browserVersion="+browser.version+",browserAppName="+browser.appName);