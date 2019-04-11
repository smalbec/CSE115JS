function to_json(data){
    json_str = JSON.stringify(data)
    return json_str
}

function read_json(json_data){
    var obj = JSON.parse(json_data)
    return obj
}

function get_value(json_str){
    var obj = JSON.parse(json_str)
    return obj['release']
}

function get_y(json_str){
    var arr = JSON.parse(json_str)
    var count = 0
    while (arr['x'][count] !== 0){
        count++
    }
    return arr['y'][count]
}

function json_filter(json_str){
    var arr = JSON.parse(json_str)
    var new_arr = []
    for (var i of arr){
        if (i['velocity'] >47.29){
            new_arr.push(i)
        }
    }
    var return_str = JSON.stringify(new_arr)
    return return_str
}

    function json_average(json_str){
        var arr = JSON.parse(json_str)
        var average = 0
        var sum = 0
        var count = 0
        for (var i of arr){
            sum += i['density']
            count += 1
        }
        average = sum / count
        var average_obj = {'density':average}
        var return_str = JSON.stringify(average_obj)
        return return_str
    }