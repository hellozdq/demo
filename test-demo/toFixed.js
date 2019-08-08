          /* 重写toFixed */
Number.prototype.toFixed=function(n){
	const number=this;   //获取值
	let num=Math.round(number*Math.pow(10,n))/Math.pow(10,n); //四舍五入
	console.log(num)
	let l=num.toString().split(".").length==2?num.toString().split(".")[1].length:0; //获取小数的位数
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

// Number.prototype.toFixed=function(v){
// 	var n=Number(this); //转成数字
// 	if(v==undefined){   //v 为空就则默认为0
// 		v=0;
// 	}
// 	var d=Number(v);    
// 	if(d<=0){           //小于0的当0
// 		d=0;
// 	}
// 	var s=n+"",//转字符串
// 		a1=s.split(".")[0],//整数
// 		a2=s.split(".")[1]||"";//小数
// 		
// 	if(d===0&&a2.length===0){
// 		return a1;
// 	}
// 	
// 	l=d-a2.length;
// 	if(l<0){  //小数比参数长
// 		var b=a2.substr(d,1);
// 		if(d===0){ // 参数等于0时
// 			if(Number(b)>=5){   //(2.5).toFixed(0)
// 				return Number(a1)+1;
// 			}
// 			return a1;
// 		}
// 		
// 		if(Number(b)>=5){ //参数的后一位数大于5
// 			var max=Number((new Array(d+1)).join("9"));
// 			var ditValue=(Number(a2.substr(0,d))+1);
// 			if(ditValue>max){  //小数加1后超过最大位数式则整数部分减1，小数部分取后两位 如(1.99).toFixed(1);
// 				return (Number(a1)+1)+"."+ditValue.toString().substr(1,d);
// 			}
// 			return a1+"."+ditValue
// 		}
// 		return a1+'.'+a2.substr(0,d);
// 	}
// 	var z= (new Array(l+1)).join("0")//补"0";
// 	return a1+'.'+a2+z;
// }


console.log((1).toFixed(2));
console.log((1.115).toFixed(2));
console.log((1.1115).toFixed(3));
console.log((1.11115).toFixed(4));

