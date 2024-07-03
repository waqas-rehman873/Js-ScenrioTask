// let userDetail = {
//     firstName: "Waqas",
//     lastName: "Rehman",
//     designation: "Developer",
//     office: "Skylinx Technologies",
//     address: {
//         street: "2",
//         buildingNo: "13",
//         postalCode: "54000"
//     },
//     skills: ['html',"css","js"]
// }
function addSkills(user, key, value) {
    if (Array.isArray(user[key])) {
        const newSkills = value.split(",").map((skill) => skill.trim().toLowerCase());
        user[key] = Array.from(new Set(user[key].concat(newSkills)));
    } else {
        user[key] = value.split(",").map((skill) => skill.trim().toLowerCase());
        user[key] = Array.from(new Set(user[key]));
    }
}
function addAddress(user, key, value) {
    const lowerCaseKey = key.toLowerCase();
    if (lowerCaseKey.startsWith("address")) {
        const addressKeys = lowerCaseKey.split(",");
        if (addressKeys.length === 1) {
            const [postalCode, street, buildingNo] = value.split(",").map((s) => s.trim());
            user["address"] = {
                postalCode,
                street,
                buildingNo,
            };
        } else {
            user["address"] = user["address"] || {};
            addressKeys.slice(1).forEach((subKey, index) => {
                const subValue = value.split(",")[index].trim();
                const existingKey = Object.keys(user["address"]).find(
                    (existing) => existing.trim().toLowerCase() === subKey.trim().toLowerCase()
                );
                user["address"][existingKey || subKey.trim()] = subValue;
            });
        }
    }
}

function addUserDetail(user, key, value) {
    const lowerCaseKey = key.toLowerCase();
    switch (lowerCaseKey) {
        case "skills":
            addSkills(user, key, value);
            break;
        case "address":
            addAddress(user, key, value);
            break;
        default:
            if (lowerCaseKey.startsWith("address")) {
                addAddress(user, key, value);
            } else {
                user[lowerCaseKey] = value;
            }
            break;
    }
}
// let arr = ["a", "b", "a", "c", "a", "d", "c", "b", "a", "e", "d", "a", "f"];
// function maxOccur() {
//     const inputStr = prompt("enter alphabet or string values with space");
//     const wordsArray = inputStr.split(/\s+/);
//     const wordsObjOccurence = {};
//     let maxCount = 0;
//     let maxWord = {};
//     const resultWords = {};

//     let heighestKey = null;

//     wordsArray.forEach((word) => {
//         wordsObjOccurence[word] ? wordsObjOccurence[word]++ : (wordsObjOccurence[word] = 1);

//         heighestKey = heighestKey ?? word;

//         if (wordsObjOccurence[word] > maxCount) {
//             maxCount = wordsObjOccurence[word];
//             maxWord = [word];
//         } else if (maxCount === wordsObjOccurence[word]) {
//             maxWord.push(word);
//         }
//     });
//     maxWord.forEach((word) => {
//         if (maxCount === wordsObjOccurence[word]) {
//             resultWords[word] = maxCount;
//         }
//     });
//     return resultWords;
// }
// const result = maxOccur();
// console.log(result);
// output{
// a: 2
// }
