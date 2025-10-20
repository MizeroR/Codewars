function evaporator(content, evap_per_day, threshold) {
    let currentPercent = 100;
    
    for (let days = 0; ; days++) {
        if (currentPercent <= threshold) {
            return days;
        }
        currentPercent -= currentPercent * (evap_per_day / 100);
    }
}