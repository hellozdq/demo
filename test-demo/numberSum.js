				                            /* 加减乘除 */

/* 
     相加 
	 获取到所有数字中小数点后最多的位数，再相加，所有数字中最多的位数作为总和的小数的位数
 */
let add=(...nums)=>{
	//获取小数点后的位数
	let lengths= nums.map((x)=>{
		return x.toString().split(".").length==2?x.toString().split(".")[1].length:"";
	})
	//获取最多的位数
	let max=lengths.sort((a,b)=>{
		return b-a;
	})[0];
	
	//所有数相加
	let sum=nums.reduce((prev, curr, index, arr)=>{
		return prev+curr;
	})
	
	return sum.toFixed(max);
}
console.log(add(0.1,0.2))
console.log(add(268.34,0.8))

/* 
      相减 
	  获取到所有数字中小数点后最多的位数，再相减，所有数字中最多的位数作为总和的小数的位数
 */
let minus=(...nums)=>{
	//获取小数点后的位数
	let lengths= nums.map((x)=>{
		return x.toString().split(".").length==2?x.toString().split(".")[1].length:"";
	})
	//获取最多的位数
	let max=lengths.sort((a,b)=>{
		return b-a;
	})[0];
	
	//所有数相减
	let sum=nums.reduce((prev, curr, index, arr)=>{
		return prev-curr;
	})
	
	return sum.toFixed(max);
}
console.log(minus(0.1,0.2))

/* 
      相乘 
	  获取到所有数字中小数点后的位数相加，再相乘，所有数字的小数的位数相加得到的位数作为总和的小数的位数
 */
let plan=(...nums)=>{
	//获取小数点后的位数
	let lengths= nums.map((x)=>{
		return x.toString().split(".").length==2?x.toString().split(".")[1].length:"";
	})
	//所有小数点后的位数相加
	let max=lengths.reduce((prev, curr, index, arr)=>{
		return prev+curr;
	});
	
	//所有数相乘
	let sum=nums.reduce((prev, curr, index, arr)=>{
		return prev*curr;
	})
	
	return sum.toFixed(max);
}
console.log(plan(0.1,0.2))

/* 
      相除
	  获取到所有数字中小数点后的位数相减，再将所有数去掉小数点后相除，最后再乘以Math.pow(10,-max)
 */
let div=(...nums)=>{
	//获取小数点后的位数
	let lengths= nums.map((x)=>{
		return x.toString().split(".").length==2?x.toString().split(".")[1].length:"";
	})
	//所有小数点后的位数相减
	let max=lengths.reduce((prev, curr, index, arr)=>{
		return prev-curr;
	});
	
	//所有数相除
	let sum=nums.reduce((prev, curr, index, arr)=>{
		return prev.toString().replace(".","")/curr.toString().replace(".","");
	})
	
	return plan(sum,Math.pow(10,-max));
}
console.log(div(0.1,0.01))

