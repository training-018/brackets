module.exports = function check(str, bracketsConfig) {
  let bracketsStack = [];

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsStack[bracketsStack.length - 1] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
        bracketsStack.pop();
      } else {
        if (str[i] === bracketsConfig[j][0]) {
          bracketsStack.push(str[i]);
        }
      }
    }
  }
  return (bracketsStack.length === 0) ? true : false;
}