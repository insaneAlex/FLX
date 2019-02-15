// ***ADDITION***
const data = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]

//  **1** +
const findTypes = (...args) => {
    const types = [];
    for (const el of args) {
        types.push(typeof el);
    }
    return types;
}
findTypes('number');
findTypes(null, 5, 'hello');

// **2** +
const executeForEach = (arr, foo) => {
    for (const el of arr) {
        foo(el);
    }
}
executeForEach([1, 2, 3], function (el) {
    console.log(el)
});


// **3** +
const mapArray = (arr, foo) => {
    const newArr = [];
    executeForEach(arr, (el) => {
        newArr.push(foo(el))
    })
    return newArr;
}
mapArray([2, 5, 8], function (el) {
    return el + 3
});


// **4** +
const filterArray = (arr, foo) => {
    const newArr = [];
    executeForEach(arr, (el) => {
        if (foo(el)) {
            newArr.push(el);
        }
    })
    return newArr;
}
filterArray([2, 5, 8], function (el) {
    return el > 3
});


// **5** +
const getAmountOfAdultPeople = data => {
    let counter = 0;
    filterArray(data, (el) => {
        if (el.age > 18) {
            counter++;
        }
    })
    return counter;
}
getAmountOfAdultPeople(data);


// **6** +
const getGreenAdultBananaLovers = data => {
    const bananaLovers = [];
    const filtered = [];
    filterArray(data, el => {
        if (el.age > 18 && el.eyeColor === 'green' && el.favoriteFruit === 'banana') {
            filtered.push(el)
        }
    })
    mapArray(filtered, (el) => {
        bananaLovers.push(el.name);
    })
    return bananaLovers;
}
getGreenAdultBananaLovers(data);



// **7** +
const keys = obj => {
    const keys = []; //Object.keys(obj);
    for (let key in obj) {
        keys.push(key)
    }
    return keys;
}
keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});

// **8** +
const values = obj => {
    const values = []; //Object.values(obj)
    for (let key in obj) {
        values.push(obj[key])
    }
    return values;
}
values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});

// **9**

// **10**
// **11**