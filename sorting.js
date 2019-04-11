    //sorting

    function sort_list(arr){
        arr.sort()
    }

    //sorting by length of string

    function sort_by_length(arr){
        arr.sort(function(a,b){
            return a.length - b.length
        })
    }


    //sorting by key in object in array

    function sort_kvs(arr){
        arr.sort(function(a,b){
            return a['power'] - b['power']
        })
    }

    //sort by index

    function sort_by_index(arr){
        arr.sort(function(a,b){
            return a[2] - b[2]
        })
    }


    //average

    function sort_by_average_rating(arr) {
        function average(a, b) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var avga = a['ratings'].reduce(reducer) / a['ratings'].length;
            var avgb = b['ratings'].reduce(reducer) / b['ratings'].length;
            if (avga < avgb) {
                return -1;
            }
            if (avga > avgb) {
                return 1;
            }
            return 0;

        }

        arr.sort(average)

    }

    function sort_by_product(arr){
        arr.sort(function(a,b){
            return ((a[3] * a[5]) - (b[3] * b[5]))
        })
        }
