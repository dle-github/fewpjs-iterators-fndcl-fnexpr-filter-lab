// Code your solution here
function findMatching(a, s){
    const results = a.filter(driver => driver.toLowerCase() == s.toLowerCase());
    return results;
}

function fuzzyMatch(a, s){
    const results = a.filter(driver => driver.charAt(0).toLowerCase() == s.charAt(0).toLowerCase());
    return results;
}

function matchName(a, s){
    const results = a.filter(driver => driver.name == s);
    return results;
}