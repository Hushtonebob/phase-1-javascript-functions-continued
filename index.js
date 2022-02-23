function saturdayFun(def = `roller-skate`) {
    return (`This Saturday, I want to ${def}!`) ;
}

function mondayWork(mon = `go to the office`){
    return (`This Monday, I will ${mon}.`) ;
}

function wrapAdjective(blam) {
    return function inner(adj = `special`){
        return (`You are ${blam}${adj}${blam}!`) ;
    }
}
