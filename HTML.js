function insertWord(){
    var ID = document.getElementById("content");
    ID.innerHTML = "guitar";
}

function copyInput(){
    var ui = document.getElementById("user_input").value;
    var ci = document.getElementById("copied_input");
    ci.innerHTML = ui
}

function getUserInput(){
    var ui = document.getElementById("user_input").value;
    return ui
}

function additionCalculator(){
    var input1 = document.getElementById("input_one").value;
    var input2 = document.getElementById("input_two").value;
    var sum = document.getElementById('sum');

    total = Number(input1) + Number(input2)
    sum.innerHTML = total
}

        function plotPie(array){

            var data = [{
                values: array.map(i => i[0]),
                labels: array.map(i => i[1]),
                type: "pie"
            }];

            Plotly.newPlot('plot', data);
        }
function plotLine(array){

    var trace1 = {
        x: array.map(x => x[0]),
        y: array.map(x => x[1]),
    };

    var data = [trace1];

    Plotly.newPlot('plot', data);
}