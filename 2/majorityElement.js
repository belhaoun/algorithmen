function majorityElement(tab) {
    let count = 0;
    let result = [];
    for (let i = 0; i < tab.length; i++) {
        count = 0;
        for(let j = i; j < tab.length; j++) {
            if(tab[i] == tab[j]) {
                count ++;
            }
            result.push([tab[i], count]);
        }
    }
    for(let k = 0; k < result.length - 1; k++) {
        if(result[k][1] > tab.length / 2) {
            console.log("le major de plus de moitie est : ", result[k][0])
            break;
        } 
    }
    return 0;
}