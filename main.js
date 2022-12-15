//First Task Starts
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const cars = ["Volvo", "Mercedes", "Ferrari", "Lombargini"];

const unification = fruits.concat(cars);
console.log(unification);
//First Task Ends

//Second Task Starts
function filter_array(test_array) {
  var index = -1,
    arr_length = test_array ? test_array.length : 0,
    resIndex = -1,
    result = [];

  while (++index < arr_length) {
    var value = test_array[index];

    if (value) {
      result[++resIndex] = value;
    }
  }

  return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, "", undefined, 47, null]));
//Second Task Ends

//Third Task Starts
console.log(Array(5).fill(2));
//Third Task Ends
