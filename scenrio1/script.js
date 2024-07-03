// let userDetail = {
//     firstName: "Waqas",
//     lastName: "Rehman",
//     designation: "Developer",
//     office: "Skylinx Technologies",
//     address: {
//         street: "2",
//         buildingNo: "13",
//         postalCode: "54000",
//     },
//     skills: ["html", "css", "js"],
// };

// function addUserDetail(user, key, value) {
//     const lowerCaseKey = key.toLowerCase();
//     // check skills
//     if (lowerCaseKey == "skills") {
//         if (Array.isArray(user[key])) {
//             const newSkills = value.split(",").map((skill) => skill.trim().toLowerCase());
//             user[key] = Array.from(new Set(user[key].concat(newSkills)));
//         } else {
//             user[key] = value.split(",").map((skill) => skill.trim().toLowerCase());
//             user[key] = Array.from(new Set(user[key]));
//         }
//     }
//     // handling key etc address,street
//     else if (lowerCaseKey.startsWith("address")) {
//         const addressKeys = lowerCaseKey.split(",");
//         if (addressKeys.length === 1) {
//             const [postalCode, street, buildingNo] = value.split(",").map((part) => part.trim());
//             user["address"] = {
//                 postalCode,
//                 street,
//                 buildingNo,
//             };
//         }
//         //handling key like 'Address,street,buildingNo'
//         else {
//             user["address"] = user["address"] || {};
//             addressKeys.slice(1).forEach((subKey, index) => {
//                 const subValue = value.split(",")[index].trim();
//                 const existingKey = Object.keys(user["address"]).find(
//                     (existing) => existing.toLowerCase() === subKey.trim().toLowerCase()
//                 );
//                 user["address"][existingKey || subKey.trim()] = subValue;
//             });
//         }
//     }
//     // other keys and values+
//     else {
//         user[lowerCaseKey] = value;
//     }
// }
//
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
            const [postalcode, street, buildingno] = value.split(",").map((s) => s.trim());
            user["address"] = {
                postalcode,
                street,
                buildingno,
            };
        }
    }
}

function addAddressKey(user, key, value) {
    if (!user["address"]) {
        user["address"] = {};
    }
    const addressKeyMap = {
        buildingno: "buildingno",
        postalcode: "postalcode",
        street: "street",
    };

    const lowerCaseKey = key.toLowerCase();
    if (addressKeyMap[lowerCaseKey]) {
        user["address"][addressKeyMap[lowerCaseKey]] = value;
    } else {
        user[lowerCaseKey] = value;
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
        case "postalcode":
        case "street":
        case "buildingno":
            addAddressKey(user, key, value);
            break;
        default:
            user[lowerCaseKey] = value;
            break;
    }
}
let waqas = {};
addUserDetail(waqas, "street", "2");
addUserDetail(waqas, "postalcode", "2400");
addUserDetail(waqas, "firstName", "Waqas");
addUserDetail(waqas, "lastName", "rehman");
addUserDetail(waqas, "designation", "developer");
addUserDetail(waqas, "skills", "js,Js,java,js,java,html ");
// addUserDetail(waqas, "Address", "5400,,12");
// addUserDetail(waqas, "street", "12");
addUserDetail(waqas, "postalcode", "2400");
// addUserDetail(waqas, "buildingno", "12");

console.log("object :", waqas);

// console.log("object :", waqas);
// issues if address wants to only give a street or postalCode or buildingNo if address value have give then again if street , buildingNo or
// postalCode to change it with addUserDetail(waqas, "Address,street", "2"); it will chnge in same address object etc postalCode or other
// in skills if duplicat in same string

//  task
// let arr = ["a", "b", "a", "c", "a", "d", "c", "b", "a", "e", "d", "a", "f"];
//  function maxOccur() {
//     const inputStr = prompt("enter alphabet or string values with space");
//     const wordsArray = inputStr.split(/\s+/);
//     const wordsObjOccurence = {};
//     let maxCount = 0;
//     let maxWord = {};
//     const resultWords = {};

//     wordsArray.forEach((word) => {
//         wordsObjOccurence[word] ? wordsObjOccurence[word]++ : (wordsObjOccurence[word] = 1);

//         if (wordsObjOccurence[word] > maxCount) {
//             maxCount = wordsObjOccurence[word];
//             maxWord = [word];
//         } else if (maxCount === wordsObjOccurence[word]) {
//             maxWord.push(word);
//             // maxWord = maxCount;
//             // resultWords[word] = maxWord;
//         }
//     });
//     // maxWord.forEach((word) => {
//     // if (maxCount === wordsObjOccurence[word]) {
//     // resultWords[word] = maxCount;
//     //     }
//     // });
//     return resultWords;
// }

// const result = maxOccur();
// console.log(result);
// output{
// a: 2
// }
