module.exports = function check(str, bracketsConfig) {
    let bracket = {};
    let ArrOfStr = str.split('');
    for(let item of bracketsConfig) {
        bracket[item[0]] = item[1];
    }
    let result = []
    for (let item of ArrOfStr) {
      bracket[result[result.length - 1]] == item ? result.pop() : result.push(item)  
    }
    return result.length == 0;
  }
