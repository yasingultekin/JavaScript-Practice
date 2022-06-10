function romanToInt(s) {
    const translations = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let counter = 0;
    s.replace("IV", "IIII")
        .replace("IX", "VIIII")
        .replace("XL", "XXXX")
        .replace("XC", "LXXXX")
        .replace("CD", "CCCC")
        .replace("CM", "DCCCC")
    for (let char of s) {
        counter += translations[char];
    }
    // for (let i = 0; i < s.length; i++) {
    //     counter += translations[s[i]]
    // }
    return number;
};

console.log(romanToInt("MMVIII")); // 3);