let func = (obj,callback) => {
    let count = 0;
    for (key in obj) {
        if (typeof (obj[key]) == "function") {
            arr.push(obj[key]);
            count++;
        }
    }
    alert(count);
    callback(arr);
}

let obj = {
 i: "ololo",
 say: function() {console.log("hi");},
 123: true,
 maysmthg: function() {console.log(123);},
 sdfsd: 333,
 "rre": function() {console.log(true);},
 onetwo: function() {console.log(321);}
};

let arr = [];

func(obj, function (arr) {
    for (let i = 1, length = arr.length; i<=length; i+=2) {
        arr[i]();
    }
});