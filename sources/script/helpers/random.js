export default {
    index(array){
        if(!(array instanceof Array)){
            console.log('Ты, педик, учись программировать!');
            return false;
        }
        let index = Math.floor(Math.random() * (array.length + 1));
        return array[index];
    },
    chance(prob){
        return Math.random() < prob;
    }
};