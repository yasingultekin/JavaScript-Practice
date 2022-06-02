// Merge Sorted Array

const a = [1, 22, 3, 755, 7, 9];
const b = [];

const mergeArray  = (a, b) => {
    if (a  === 0 && b.length === 0) {   
        return [];
    } else {
        const arr = a.concat(b).sort((a, b) => a - b);
        return arr;
    }
};

console.log(mergeArray(a, b));

