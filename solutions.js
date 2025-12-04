// Задача 1
const concatenateStrings = (value1, value2) => {
return value1.replace(/\s/g, '') + value2.replace(/\s/g, '');
}

//Задача 2
const getLength = (value) => {
return value.length;
}

//Задача 3
const stringTemplate = (firstName, lastName) => {
return 'Hello, ' + firstName + ' ' + lastName + '!';
}

//Задача 4
const getChar = (value, index) => {
return value[index - 1];
}

// Задача 5
const removeOccurrence = (str, value) => {
const index = str.indexOf(value);
if (index === -1) {
return str;
}
return str.slice(0, index) + str.slice(index + value.length);
}

//Задача 6
const getRectangle = (width, height) => {
 if (width < 2 || height < 2) {
  return '*'.repeat(width) + (height > 1 ? '\n' + '*'.repeat(width) : '');
 }
   let result = '';
    result += '*'.repeat(width) + '\n';
    for (let i = 0; i < height - 2; i++) {
    result += '*' + ' '.repeat(width - 2) + '*\n';
    }
result += '*'.repeat(width);
    return result;
};
