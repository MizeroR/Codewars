function calculateYears(P, I, T, D) {
    let years = 0;
    while (P < D) {
        const interest = P * I;
        const tax = interest * T;
        P += interest - tax;
        years++;
    }
    return years;
}