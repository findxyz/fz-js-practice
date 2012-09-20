/**
 * BarChart.js
 * 该文件定义了makeBarChart()函数，它将创建条形图来显示data[]数组中的数字。
 * 图像的大小颜色均可进行设置。
 * 
 * 用如下代码把该函数插入到一个html文件中：
 *		<script type="text/javascript" src="BarChart.js"></script>
 * 用如下代码在html中使用函数：
 *		<script type="text/javascript">makeBarChart([1,4,5,6,7],300,150,"yellow");</script>
 */
function makeBarChart(data,width,height,barColor){

	// 为可选的参数提供默认值
	if (!width) width = 500;
	if (!height) height = 350;
	if (!barColor) barColor = "blue";

	// 参数width和height指定了生成图表的整体大小。
	// 我们必须减去边线和补白的大小以得到我们实际创建的元素的大小。
	width -= 24; // 减去10px的左右补白和2px的左右边线
	height -= 14; // 减去10px的上补白和2px的上下边线

	// 下面创建存放图表的元素。
	// 注意，我们使图表相对定位，以便使他有绝对定位的元素，
	// 但仍能出现在常规元素流中。
	var chart = document.createElement("div");
	chart.style.position = "relative";
	chart.style.width = width + "px";
	chart.style.height = height + "px";
	chart.style.paddingLeft = "10px";
	chart.style.paddingRight = "10px";
	chart.style.paddingTop = "10px";
	chart.style.paddingBottom = "0px";
	chart.style.border = "solid 2px black";
	chart.style.backgroundColor = "white";

	// 计算每个边栏的宽度
	var barWidth = Math.floor(width/data.length);
	// 找到data[]中最大的数字，apply是用数组传递参数的，call使用","分割开传递参数的，Math.max函数的用法是Math.max(num1,num2,...numN)所以要使用apply来进行最大值的筛选
	var maxData = Math.max.apply(this,data);
	// 图表的缩放因子。scale*data[i]设置了条形的高度。
	var scale = height/maxData;
	// 遍历数据数组，为每个数据创建条形。
	for(var i = 0; i < data.length; i++){
		var bar = document.createElement("div");
		var barHeight = data[i]*scale;
		bar.style.position = "absolute";
		bar.style.left = (barWidth*i+1+10) + "px";
		bar.style.top = height - barHeight + 10 + "px";
		bar.style.width = (barWidth - 2) + "px";
		bar.style.height = (barHeight - 1) + "px";
		bar.style.border = "solid 1px black";
		bar.style.fontSize = "1px";
		bar.style.backgroundColor = barColor;
		chart.appendChild(bar);
	}
	document.body.appendChild(chart);

	// 最后返回图表元素，以便调用者可以操作它。
	return chart;
}