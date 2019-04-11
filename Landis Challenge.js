    function takePath(lvl_json,pc_mvt_array){
    var lvl_obj = JSON.parse(lvl_json);
    var grid = lvl_obj['grid'];
    var start = lvl_obj['start'];
    var crystals = 0;
    var x = 0;
    var y = 0;
    for (var i of pc_mvt_array){
        start = movePlayer(lvl_obj,i);
        lvl_obj['start'] = start;
        var location = lvl_obj['start'];
        x = location[0];
        y = location[1];
        if(grid[y][x] === 2){
            grid[y][x] = 0;11
            crystals++
        }
        //console.log(crystals)
        //console.log(grid[y][x])

    }

    var return_obj = {
        'location':location,
        'crystals':crystals
    };
    return return_obj
}


console.log(takePath('{"start": [2, 0], "grid": [[1, 1, 0, 1], [1, 2, 0, 2], [2, 2, 2, 1], [0, 1, 0, 0]]}', ['s', 'a', 'a', 's', 'w']))






function movePlayer(lvl_obj,pc_mvt){
    var grid = lvl_obj['grid'];
    var pc_start_loc = lvl_obj['start'];                    //variable with initial player location, which is an array [x,y]
    var x = pc_start_loc[0];
    var y = pc_start_loc[1];

    var new_x = 0;
    var new_y = 0;
    var new_location = [];

    if (pc_mvt == 'w'){
        if (y<grid.length + 1 && (y-1)>=0 && grid[y-1][x] != 1 && grid[y-1][x] != 3 && grid[y-1][x] != 7){
            new_location.push(x,(y-1))
        }
        else{
            new_location.push(x,y)
        }
    }

    if (pc_mvt == 'a'){
        if (x<grid.length + 1 && (x-1)>=0 && grid[y][x-1] != 1 && grid[y][x-1] != 3 && grid[y][x-1] != 7 ){
            new_location.push(x-1,y)
        }
        else{
            new_location.push(x,y)
        }
    }

    if (pc_mvt == 'd'){
        if (x<grid.length - 1 && (x+1)>=0 && grid[y][x+1] != 1 && grid[y][x+1] != 3 && grid[y][x+1] != 7){
            new_location.push(x+1,y)
        }
        else{
            new_location.push(x,y)
        }
    }

    if (pc_mvt == 's'){
        if (y<grid.length - 1 && (y+1)>=0 && grid[y+1][x] != 1 && grid[y+1][x] != 3 && grid[y+1][x] != 7){
            new_location.push(x,(y+1))
        }
        else{
            new_location.push(x,y)
        }
    }

    return new_location
}