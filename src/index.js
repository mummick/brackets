module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];
    let stackArray = [];

    bracketsConfig.forEach((element) => {
        openBrackets.push(element[0]);
        closeBrackets.push(element[1]);
    });

    let last = "";
    let index = -1;
    for (let bracket of str) {
        last = stackArray.pop();
        if ((index = closeBrackets.indexOf(bracket)) != -1) {
            if (last === openBrackets[index]) {
                //do nothing
            } else {
                if (openBrackets[index] === closeBrackets[index]) {
                    if (last != undefined) {
                        stackArray.push(last);
                    }
                    stackArray.push(bracket);
                } else {
                    return false;
                }
            }
        } else {
            if (last != undefined) {
                stackArray.push(last);
            }
            stackArray.push(bracket);
        }
    }
    return stackArray.length == 0;
};
