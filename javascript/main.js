// https://edabit.com/user/NGKHp2BDR9nBt98e3

function objectToArray(obj) {
	var keys = Object.keys(obj);
	var values = Object.values(obj);
	var tab=[]
	for(var i=0;i<keys.length;i++){
	  tab.push([keys[i],values[i]])
	  
}
return tab
}
console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}))