//First Unique Character in a String

const uniqueString = function(string){
    let arr = string.split('')
    for(let i =0; i<arr.length; i++){
        let character = arr[i]
        arr.splice(i,1)

        if(arr.includes(character)){
            arr.splice(i,0,character)
        }
        else{
            return i;
        }
    }
    return -1;

    
}
console.log(uniqueString('leetcode'))



















