Array.prototype.qsort = function(begin,end){
	
	function swap(array,a,b){
		var c = array[a];
		array[a] = array[b];
		array[b] = c;
	}

	if(begin < end){
		var array = this;
		var index = begin;
		var pivot = array[index];
		swap(array,index,end);
		for(var i=begin; i<=end; i++){
			if(array[i] < pivot){
				swap(array,index,i);
				index++;
			}
		}
		swap(array,index,end);
		this.qsort(begin,index-1);
		this.qsort(index+1,end);
		return this;
	}else{
		return this;
	}
}