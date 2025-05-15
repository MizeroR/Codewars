function nbYear(p0, percent, aug, p) {
    let years = 0;
    let currentPopulation = p0;
    
    while (currentPopulation < p) {
        currentPopulation += Math.floor(currentPopulation * (percent / 100)) + aug;
        years++;
    }
    
    return years;
}