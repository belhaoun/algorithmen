function sumpair(tab, sum) {
    let result = [];

    for(let i = 0; i < tab.length; i++) {
        for(let j = i + 1 ; j < tab.length; j++) {
            if((tab[i] + tab[j]) == sum) {
                result.push([tab[i], tab[j]]);
            }
        }
    }
    return result;
}