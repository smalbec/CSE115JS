function higher_lower(x){
    if (x>22){
        return "lower";
    }
    else if (x<22){
        return "higher";
    }
    else {
        return "correct"
    }
}


function categorize(x){
    if (x<24){
        return("low");
    }
    else if (x>=24 && x<39){
        return("medium");
    }
    else{
        return("high");
    }
}

function compute_xp(x,y){
    if (y == true){
        return (19780 + x);
    }
    else{
        return 19780;
    }
}

function same_side(x,y){
    if ((x>36 && y>36) || (x<36 && y<36)){
        return true
    }
    else{
        return false
    }
}

function categorize(x){
    if (x.length<5){
        return("short");
    }
    else if (5<=x.length && x.length<7){
        return("medium");
    }
    else{
        return("long");
    }
}