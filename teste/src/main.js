var myMap = new Map();

var keyString = "uma string",
    keyObj = {},
    keyFunc = function () {};

// configurando os valores
myMap.set(keyString, "valor associado com 'uma string'");
myMap.set(keyObj, "valor associado com keyObj")
console.log(myMap.set(keyFunc, "valor associado com keyFunc"));

myMap.size; // 3

// obtendo os valores
console.log(myMap.get(keyString));    // "valor associado com 'uma string'"
console.log(myMap.get(keyObj));       // "valor associado com keyObj"
console.log(myMap.get(keyFunc));      // "valor associado com keyFunc"

console.log(myMap.get("uma string")); // "valor associado com 'uma string'"
                         // pois keyString === 'uma string'
myMap.get({});           // undefined, pois keyObj !== {}
myMap.get(function() {}) // undefined, pois keyFunc !== function () {}