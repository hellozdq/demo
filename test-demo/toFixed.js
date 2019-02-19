          /* 重写toFixed */
Number.prototype.toFixed=function(n){
	const number=this;   //获取值
	let l=number.toString().split(".").length==2?number.toString().split(".")[1]:0; //获取小数的位数
	let num=Math.round(number*Math.pow(10,n))/Math.pow(10,n); //四舍五入
	if(n-l>0){           //n大于小数位数时补零
		if(l==0){       //number 为整数时，补小数点
			num+=".";
		}
		for(let i=0;i<n-l;i++){
			num+="0";
		}
	}
	return num.toString();
}
console.log((1).toFixed(2));
console.log((1.115).toFixed(2));
console.log((1.1115).toFixed(3));
console.log((1.11115).toFixed(4));