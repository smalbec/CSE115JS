//Object.keys(x)

//Object.values(x)

//Object.entries(x)

function get_value(x){
    if('hike' in x){
        return x['hike']
    }
    else{
        return 0
    }
}


function find_key(x){
    if("magnetic" in x){
        return true
    }
    return false
}

function find_value(x){
    for(var i in x){
        if(x[i] == 6){
            return true
        }
    }
        return false
}

function add_key_value(x){
    x['boot'] = 31
}

function create_kv(){
        var x = {"satisfaction": 9, "send": -1, "color": 8, "different": 15,"surrounding": 14}
        return x
    }


function sum_values(x){
    var sum = 0;            //REMBEMBER TO MAKE THE VARIABLE INTO AN INT U DUMB
    for(var i in x){
        sum += x[i]
    }
    return sum;
}


function print_values(x){
    for(var i in x){
        console.log(x[i])
    }
}

function indexed_kvs(){
    x = {};
    for(var i = 0; i<=42; i++){
        x[i.toString()] = i
    }
    return x
}


function count_large(x){
    var count = 0
    for(var i in x){
        if(x[i]>33.98){
            count = count + 1
        }
    }
    return count
}

function get_size(x){
    var count = 0
    for(var i in x){
        count++
    }
    return count
}
