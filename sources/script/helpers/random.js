export default {
    index(array){
        if(!(array instanceof Array)){
            console.log('error in random arrow');
            return false;
        }
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    },
    chance(prob){
        return Math.random() < (prob / 100);
    }
};