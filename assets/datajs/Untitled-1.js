const Data = require ('./Storage-and-Distribution-Checklist-Edition-9-2.js')

// for (var i = 0; i < Data.length; i++){
//   console.log(Data[i][0])
// }

function fileFormatter(arr){
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    let newObj = {}
    newObj.clause = arr[i][0]
    newObj.text = arr[i][1]
    newArr.push(newObj)
  }
  console.log(newArr)
   return newArr;
 }
 fileFormatter(Data)