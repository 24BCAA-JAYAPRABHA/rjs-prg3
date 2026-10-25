const checkOddEven = (num) => {
    if(num%2===0){
        return "Even";

    }else{
        return "odd";
    }
};
let number = 11;
console.log(number+"is"+ checkOddEven (number)+"Number");

module.exports = checkOddEven;
