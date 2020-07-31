function spupof(string) {

var a = "a".charCodeAt(0);
var z = "z".charCodeAt(0);
var newArr = [];

for(var i =0; i<string.length; i++){
    var code = string.charCodeAt(i);
    if(code>=a && code<=z){
        if(code>=z)
            newArr.push(String.fromCharCode(a));
        else
            newArr.push(String.fromCharCode(code+1));
    }else{
        newArr.push(string[i]);}
    }
     console.log(newArr.join(""));
}

spupof('abcdz')