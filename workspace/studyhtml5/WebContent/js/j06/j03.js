'use strict';


let info = {
    subject : 'JavaScript',
    credit : 3,
    days : 20,
    tuition : 100
}

for(let i in info) {
    console.log(`i : ${i}, info[${i}]=${info[i]}`);
}

/*
i : subject, info[subject]=JavaScript
i : credit, info[credit]=3
i : days, info[days]=20
i : tuition, info[tuition]=100
*/