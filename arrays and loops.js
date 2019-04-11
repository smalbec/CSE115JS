
/*It consists of 3 variables whose names are

NewEnglandStateName[0]
NewEnglandStateName[1]
NewEnglandStateName[2]

Also a length

NewEnglandStateName.length

Which value is 3


An array is an object of   1+n of definitions, the one is the length of the array at the start of the object

You can use arrayname.push to add to an array

//x.push() to add one or more leements to the end of an

//x.pop()  removes the last element for the array x and teruns that element

//x.length reflect the number of elements in the array x


*/

function get_length(x){
    return x.length
}

function get_value(x){
    return x[2]
}

function sum_values(x){
    sum = x[11] + x[6] + x[3];
    return sum
}

function add_value(x){
    x.push(30);
}

function print_list(x){
    var y = x.length
    for(var i = 0; i < y; i++){
        console.log(x[i]);
    }
}


function indexed_list(){
    var n = [];
    for(i = 0;  i <= 32; i++) {
        n.push(i)
    }
    return n
}


function list_concat(x){
    var array = "";
    for(var i = 0; i<x.length;i++) {
        array = array + " " + x[i];
    }
    return array
}



function list_sum(x){
    var sum = 0;
    for(var i in x){
        sum = sum + x[i]
    }
    return sum
}

function list_sum(x){ // FUNCIONA PERO TRATA CON EL DE ARRIBA
    var sum = 0;
    for(var i = 0; i<x.length; i++){
        sum = sum + x[i]
    }
    return sum
}


function find_value(x){
    for (var y = 0; y<x.length; y++){
        if(x[y] == 0){
            return true;
        }
    }
    return false
}


function count_values(x){
    var sum = 0
    for(var i = 0; i<x.length; i++){
        if (x[i]>305){
            sum= sum + 1;
        }
    }
    return sum;
}

function count_in_range(x){
    var sum = 0
    for(var y in x){
        if ((x[y]>25.98) && (x[y]<37.3)){
            sum++
        }
    }
    return sum
}








function timesNumbers(start, end) {
    var result = 1;
    for (var i=start; i<=end; i=i+1){
        result = result * i;
    }
    return result;
}

console.log(timesNumbers(1,3));

function sumNumbers(bound){
    var sum = 0;
    for (var i=1; i<=bound; i=i + 1){
        sum = sum + 1
    }
    return sum;
}

console.log(sumNumbers(5));

function writeArray(arr) {
    for (i=0; i<arr.length; i=i+1) {
        console.log(arr[i]);
    }
}


//This function prints every single array variable until it states them all and stops


function printSequence_0(seq) {
    For (i = 0; i < seq.length; i = i + 1){
        console.log(seq[i]);
    }
}

printSequence_0(['a', 'b', 'c']);
t

function everyOther(s){
    var result = "";
    for (var i = 0; i < s.length; i = i + 2){
        result = result + s[i];
    }
}

function implode(x){  //takes a string and joins it
    var result = "";
    var v;
    for (v of x) {
        result = result + v
    }
    return result;
}


function explode(y){ //takes a string and separates it
    var x = [];
    var v;
    for (v of y){
        x.push(v);
    }
    return x;
}





function print_list(x){
    var y = x.length
    for(var i = 0; i < y; i++){
        console.log(x[i])
    }
    return
}

