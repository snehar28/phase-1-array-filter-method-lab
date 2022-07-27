// Code your solution here
function findMatching(collection, name){
    return collection.filter(function(driver){
        return driver.toLowerCase() == name.toLowerCase();
    })
}

function fuzzyMatch(collection, letters){
    const newArray = [];
    return collection.filter(function(driver){
        if (driver.startsWith(letters)){
            return newArray.push(driver)
        }
    })
}

function matchName(collection, string){
    return collection.filter(function(driver){
        if (driver.name === string){
            return driver;
        }
    })
}