// var prop = 'muscles'
// groupBy(el=>el[prop], exercises);
function groupBy(getProp, arrOfObj){
    return arrOfObj.reduce((acc, el, i , arr)=>{
      let prop = getProp(el);
      if(prop){

      }
      acc[prop] = acc[prop]
      ? [...acc[prop], el]
      : [el]
    }, {} )
}

function isFalse(value){
  let x = new String(value)
}