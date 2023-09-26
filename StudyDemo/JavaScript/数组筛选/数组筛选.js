let arr=[2,0,6,1,77,0,52,0,25,7],new_arr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!==10)
        new_arr.push(arr[i]);
}
console.log(new_arr);