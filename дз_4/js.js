function reverseString(word) {
    word = word.split( "").reverse().join("")
    console.log( word)
}

reverseString("hello world")



//2
var array = [1, 2, 3]


function avarage(...numbers) {
    if ( numbers.length === 0 ){
        console.log('not enough numbers');
        return
    }
    var sum=0
    for ( var i = 0; i < numbers.length; i++){
        sum = sum + numbers[i]
    }

    var result = sum / numbers.length
    console.log( result);
}
avarage ( 3 , 0 ,20)



//3
var array = ['name', 'John', 'lastname', 'Black', 'age', '23'];
var result = {}
for (var i = 0; i< array.length;i+=2){
    var key = array [i]
    var value = array [i+1]
    result[key]=value
}
console.log(result);




var mixedList = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo', "hello", "name"]

var sortedArrays = {
    strings: [] // Добавляем массив для хранения строк
};

for (var i = 0; i < mixedList.length; i++) {
    var item = mixedList[i];
    var type = typeof item;

    if (type !== 'string') {
        if (!sortedArrays[type]) {
            sortedArrays[type] = [];
        }
        sortedArrays[type].push(item);
    } else {
        sortedArrays.strings.push(item); // Добавляем строки в отдельный массив
    }
}

var sortedKeys = Object.keys(sortedArrays).sort(function(a, b) {
    if (a === 'strings' || b === 'strings') {
        return a.localeCompare(b);
    }
    return sortedArrays[a].length - sortedArrays[b].length;
});

var finalResult = sortedKeys.map(function(key) {
    return sortedArrays[key];
});

console.log(finalResult);
