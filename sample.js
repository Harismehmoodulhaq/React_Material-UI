// var prop = 'muscles'
// groupBy(el=>el[prop], exercises);


function groupBy(getPropFn, arrOfObj) {
    // let group={};

    // arrOfgroup.forEach(el=> {
    //   let mem = getPropFn(el)
    //   if(is(mam)) {
    //     group[mem] = group[mem] ? [...group[mem], el] : [el]
    //   }

    // })
    // return group;
    return arrOfObj.reduce((acc, el, i, arr) => {
        let prop = getPropFn(el);
        debugger;
        if (prop) {

        }
        acc[prop] = acc[prop]
            ? [...acc[prop], el]
            : [el]
        return acc;
    }, {})

}

function ObjTuple(obj) {
    return Object.entries(obj);

}

function is(val) {
    return (typeof val === 'undefined') ? false : true;
}

if (exercises[muscles]) {
    exercises[muscles] = [...exercises[muscles], exercise]
    debugger;
} else {
    exercises[muscles] = [exercise]
}

return ObjTuple(groupBy(el => el.muscles, this.state.exercises))
return Object.entries(groupBy(el => el.muscles, this.state.exercises))