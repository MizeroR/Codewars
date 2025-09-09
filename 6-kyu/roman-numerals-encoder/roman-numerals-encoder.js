function solution(num){
    if (num >= 1000) return 'M' + solution(num - 1000);
    if (num >= 900) return 'CM' + solution(num - 900);
    if (num >= 500) return 'D' + solution(num - 500);
    if (num >= 400) return 'CD' + solution(num - 400);
    if (num >= 100) return 'C' + solution(num - 100);
    if (num >= 90) return 'XC' + solution(num - 90);
    if (num >= 50) return 'L' + solution(num - 50);
    if (num >= 40) return 'XL' + solution(num - 40);
    if (num >= 10) return 'X' + solution(num - 10);
    if (num >= 9) return 'IX' + solution(num - 9);
    if (num >= 5) return 'V' + solution(num - 5);
    if (num >= 4) return 'IV' + solution(num - 4);
    if (num >= 1) return 'I' + solution(num - 1);
    return '';
}