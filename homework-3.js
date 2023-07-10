"use strict";

/**Frequently used functions*/
class UnvalidValueError extends Error {
	constructor(value) {
		super(`Unvalid value: ${JSON.stringify(value)}`);
	}
}

function isNumber(symbol) {
	return !isNaN(symbol) && symbol !== '' && symbol !== "" && symbol !== ``;
}

function isLetter(symbol) {
	return /^[a-zA-Zа-яА-Я]$/.test(symbol);
}

function checkArr(arr, type) {
	const allowedArrayTypes = ["number", "letter", "string", "symbol", "object", "array", "mixed"];
	if(!allowedArrayTypes.includes(type)) {throw new Error(`checkArr second argument get: "${type}", which is'nt allowed array type. \nYou can use: ${allowedArrayTypes.toString()}`)}
	if(!Array.isArray(arr)) {return new UnvalidValueError(arr)};
	if(arr.length === 0) {return "empty arr"};
	if(type === "number" && !arr.every(isNumber)) {return new Error("not only number")};
	if(type === "letter" && !arr.every(isLetter)) {return new Error("not only letter")};
	return true;
}

function sort2DArr([key1, value1], [key2, value2]) {
	if(key1 === undefined ||
		 key2 === undefined ||
		 value1 === undefined ||
		 value2 === undefined) {throw new Error("sort2DArr() got unexpected value")}
	return value2 - value1;
}

function findAllSubstrPosition(sbstr, str) {
	let currentPosition = str.indexOf(sbstr);
	let positionArr = [];

	while(currentPosition !== -1) {
		positionArr.push(currentPosition);
		currentPosition = str.indexOf(sbstr, currentPosition + 1);
	}
	if(positionArr.length === 0) return false;

	return positionArr;
}


/**TASK 0*/
//task from lecture
const InsertionSort = arr => {
	let l = arr.length;

	for (let i = 1; i < l; i++){
		let current = arr[i]
		let j = i;
		while(j > 0 && arr[j - 1] > current){
				arr[j]=arr[j - 1];
				arr[j - 1] = current;
				j--;
		}
	}
	return arr;
}

// console.log( InsertionSort([23,45,23,56,1,6,2,7,9,0]));


/**TASK 1*/
let task_1 = [1, 2, 3, -4], 
task_1_1 = [3, 6, -1, 1, 'a', 0, -10, 0, 12, 11, -5];

// console.log("task_1:", differenceBetweenMaxMinNumb(task_1));
// console.log("task_1_1:", differenceBetweenMaxMinNumb(task_1_1));

function differenceBetweenMaxMinNumb(arr) {
	let arrChecked = checkArr(arr, 'number');
	if( arrChecked instanceof Error) { console.log(arrChecked);}
	if(arr.length === 0 || arr.length === 1) return 0;

	let tempArr = [...arr]; //sort will change arr, clear function can`t change basic variable
	tempArr.sort((a, b) => a - b);

	return tempArr.pop() - tempArr[0];
}


/**TASK 2*/
let task_2 = "Aliens, moon landing, government, secret societies, cover-up, Illuminati, mind control, reptilians, 9/11, Area 51, chemtrails, flat earth, JFK, New World Order, HAARP, Bigfoot, Roswell, false flag, Mandela Effect, deep state", 
task_2_1 = "Conspiracy theories have captivated minds, fueling speculation, skepticism, and alternative narratives, often challenging established truths and sparking controversy.";

// console.log("task_2:", findWordsLongerThanNumb(task_2, 5));
// console.log("task_2_1:", findWordsLongerThanNumb(task_2_1, 10));

function findWordsLongerThanNumb(str, numb) {
	if (typeof str !== "string") return new UnvalidValueError(str);
	if (typeof numb !== "number") return new UnvalidValueError(numb);
	if (numb <= 0 || str.length === 0) return [];

	const punctuationMarks = [".", ",", "?", "!", ":", ";"];
	let strWithoutPunctuationMarks = str;

	for(let i = 0; i < punctuationMarks.length; i++) {
		let regExp = new RegExp("\\" + punctuationMarks[i], 'g');
		strWithoutPunctuationMarks = strWithoutPunctuationMarks.replace(regExp, "");
	}

	return strWithoutPunctuationMarks.split(" ").filter(elem => elem.length > numb);
}


/**TASK 3*/
let task_3 = "barbershop",
task_3_ends = "shop";

// console.log("task_3:", isStrEndsWith(task_3, task_3_ends));

function isStrEndsWith(str, ends) {
	if (typeof str !== "string") return new UnvalidValueError(str);
	if (typeof ends !== "string") return new UnvalidValueError(ends);
	if(str.length === 0 || ends.length === 0) return false;
	if(!str.includes(ends)) return false;

	str = str.toLocaleLowerCase();
	ends = ends.toLocaleLowerCase();
	let endsLength = ends.length;

	if(str.slice(-endsLength) !== ends) return false;
	return true;
}


/**TASK 4*/
let task_4 = [2.2, -2, 2, -2, 2];
let task_4_1 = [1, 3, 5, 1, -10];

// console.log("task_4:", calcAverOfIntNumb(task_4));

function calcAverOfIntNumb(arr) {
	let arrChecked = checkArr(arr);
	let averNumbArr = [];
	if(arrChecked instanceof Error) {console.log(arrChecked)}
	if(!arr.every(isInteger)) return new UnvalidValueError(arr);

	for (let i = 0; i < arr.length - 1; i++) {
		averNumbArr.push((arr[i] + arr[i + 1]) / 2);
	}

	return averNumbArr;

	function isInteger(number) {
		return Number.isInteger(number);
	}
}


/**TASK 5*/
let task_5 = "secret societies";
let task_5_1 = "Illuminati";

// console.log("task_5:", countVowels(task_5_1));

function countVowels(str) {
	if (typeof str !== "string" || str.length === 0) return new UnvalidValueError(str);
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const charLowerArr = str.split('').map(elem => elem.toLocaleLowerCase());

	return charLowerArr.reduce((contVowel, elem) => {
		if(vowels.includes(elem)) {
			return ++contVowel;
		}
		return contVowel;
	}, 0);
}


/**TASK 5.2*/
let task_5_2 = "This might be a bit hard"
// console.log( removeABC(task_5_2));

function removeABC(str) {
	if (typeof str !== "string") return new UnvalidValueError(str);
	if(str.length === 0) return null;

	const removeLetters = ["a", "b", "c"];

	if(!removeLetters.some(letter => str.includes(letter))) {
		return null; 
	}

	removeLetters.forEach(letter => {
		let regExp = new RegExp(letter, 'g');
		str = str.replace(regExp, "")
	});

	return str;
}


/**TASK 6*/
let task_6 = [1, "k", 4];
let task_6_1 = [-100, 2, 2, 12, 4];
let task_6_2 = [-1, -1, 12, 4];
// console.log( uniqElemInArrs(task_6_2, task_6_1));
// console.log( uniqElemInArrs(task_6, task_6_1));

function uniqElemInArrs(arr1, arr2) {
	let arr1Checked = checkArr(arr1, "number");
	let arr2Checked = checkArr(arr1, "number");
	if(arr1Checked instanceof Error) {console.log(arr1Checked)}
	if(arr2Checked instanceof Error) {console.log(arr2Checked)}

	if(arr1.length === 0) {
		let tempArr = [...arr2];
		tempArr.sort((a, b) => a - b);
		return tempArr;
	}

	if(arr2.length === 0) {
		let tempArr = [...arr1];
		tempArr.sort(() => a - b);
		return tempArr;
	}

	let cloneArr1 = [...arr1];
	let cloneArr2 = [...arr2];
	let unsortedResultArr = [];

/**Find unique element in first arr*/
	for (let i = arr1.length; i > 0; i--) {
		const arr1Elem = cloneArr1.pop(); //pop and push is more fuster then shift and unshift
		(cloneArr1.includes(arr1Elem)) ? undefined : unsortedResultArr.push(arr1Elem);
	}

/**Find unique element in first and second arr*/
	for (let i = arr2.length; i > 0; i--) {
		const arr2Elem = cloneArr2.pop();
		(unsortedResultArr.includes(arr2Elem)) ? undefined : unsortedResultArr.push(arr2Elem);
	}

	return unsortedResultArr.sort((a, b) => a - b);
}


/*TASK 7*/
let test7 = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF",}

// console.log(swapKeyToValue(test7));

function swapKeyToValue(obj) {
	if(String(obj) !== "[object Object]") {return new UnvalidValueError(obj);};
	
	const keysArr = Object.keys(obj);
	let swapObj = {};
	
	for(let key of keysArr) {
		swapObj[obj[key]] = key;
	}
	
	return swapObj;
}


/*TASK 8*/
let test8 = {"alient skin": 100, "radar": 32, "shoes": 8};

// console.log(calcLossReturnDifference(test8, 120));

function calcLossReturnDifference(loss, insuranceReturn) {
	if(String(loss) !== "[object Object]") {return new UnvalidValueError(loss)};
	if(typeof insuranceReturn !== "number") {return new UnvalidValueError(insuranceReturn)};
	
	const lossElemArr = Object.keys(loss);
	let lossSum = lossElemArr.reduce((sum, elem) => {
		return sum = sum + loss[elem];
	}, 0)

	if(lossElemArr.length === 0) {return new Error("Object has`nt property")};
	if(lossSum <= insuranceReturn) {return new Error("Too low loss")}
	
	return lossSum - insuranceReturn;
}


/*TASK 9*/
// console.log(isBrickFit(1, 2, 2, 2, 1));
// console.log(isBrickFit(1, 1, 2, "a"));

function isBrickFit(a, b, c, w, h) {
	const funcArguments = [a, b, c, w, h];
	if(!funcArguments.every(isNumber)) return new UnvalidValueError(funcArguments);
	
	const placeArea = w * h;
	const brickSidesAreas = [a * b, b * c, c * a];
	
	return brickSidesAreas.some((brickSidesArea) => {
		return brickSidesArea === placeArea;
	});
}


/*TASK 10*/
/**
	Variant 1 - creating common variable without reflect \ 
*/
let test10 = 'c:\WebServers\home\testsite\www\myfile.txt';
// console.log( getFilenameFromPath_1(test10));

function getFilenameFromPath_1(path) {
	if(typeof path !== "string") {return new UnvalidValueError(path)};
	
	let pathStr = JSON.stringify(path);
	let domen = 'www';
	let domenPosition = pathStr.indexOf(domen);
	let fileNameExtension = pathStr.lastIndexOf(".");
	
	if(domenPosition === -1 || fileNameExtension === -1) {
		return new Error("File path has`nt file");
	}

	return pathStr.slice(domenPosition + domen.length, fileNameExtension);
}

/**
	Variant 2 - creating path with String.raw
*/
let hellString = String.raw`c:\WebServers\home\testsite\www\myfile.txt`;
// console.log(getFilenameFromPath_2(hellString));

function getFilenameFromPath_2(path) {
	if(typeof path !== "string") {return new UnvalidValueError(path)};
	
	let fileNamePosition = path.lastIndexOf("\\");
	let fileNameExtension = path.lastIndexOf(".");

	if(fileNamePosition === -1 || fileNameExtension === -1) {
		return new Error("File path has`nt file");
	}

	return path.slice(fileNamePosition + 1, fileNameExtension);
}


/*TASK 11*/
let test11 = "Illuminati rule the world";
let test11_1 = "alient create human";
let test11_2 = " rule the worldIlluminati";

// console.log( findCyclicShiftStr(test11_2, test11));

function findCyclicShiftStr(shiftStr, baseStr) {
	if(typeof baseStr !== "string") {return new UnvalidValueError(baseStr)};
	if(typeof shiftStr !== "string") {return new UnvalidValueError(shiftStr)};
	if(shiftStr.length > baseStr.length) {return new Error("first string must be equal or less then second string")}
	if(shiftStr.length === 0 || baseStr.length === 0) {return new Error("Dont use empty string")}

	const keyChar = shiftStr.charAt(); //get first char
	const allCharPosition = findAllSubstrPosition(keyChar, baseStr);

	if(!allCharPosition) {return false}
	
	for (let charPosition of allCharPosition) {
		/**divide the string by 2 according to the keyChar*/
		let leftPiceOfStr = baseStr.slice(0, charPosition);
		let rightPiceOfStr = baseStr.slice(charPosition);
		let expectedStr = rightPiceOfStr + leftPiceOfStr;

		if(!expectedStr.includes(shiftStr)) {return false}
		return true;
	}
}


/**TASK 12*/
let test12 = task_1_1 = [3, 6, -1, 1, 0, -10, 0, 12, 11, -5];
let test12_1 = task_1_1 = [3, 'a', 0, -5];

// console.log(splitSort(test12));
// console.log(splitSort(test12_1));

function splitSort(a) {
	arrChecked = checkArr(a, "number");
	if(arrChecked instanceof Error) {console.log(arrChecked)}
	if(a.length % 2 !== 0) {return new Error("Array must contain 2n elements")}

	let cloneA = [...a],
			b = [],
			c = [];
	
	cloneA.sort((a, b) => a - b);

	cloneA.forEach((elem, index) => {
		if(index % 2 === 0) {
			b.push(elem)
		} else {
			c.push(elem);
		}
	});

	return {
		lowArr: b,
		highArr: c,
	}
}


/**TASK 13*/
let conspiracyTheory = `did 12345 -1,2425 you know that the Government truth_revealer@gmail.com is hiding a massive secret, contact <a href="mailto:truth_revealer@gmail.com">Send email</a>, There's a covert operation happening right under our noses, If you <a href="https://www.secretgovoperation.com">Visit</a>, you'll find shocking evidence that they don't want you to see, Have you heard about the latest conspiracy involving <a href="https://www.mysteriousorg.org">Truth</a>, -3.152 They claim to have uncovered the Truth about extraterrestrial life, It's mind-blowing! The mainstream media is deliberately suppressing this information, Stay informed and question everything, There's an anonymous whistleblower truth_seeker007@gmail.com who goes by the email address <a href="mailto:truth_seeker007@gmail.com">Send email</a>, They've been leaking classified documents that expose the Government's -4.2142 dark agenda, Watch out for <a href="https://www.illuminatirevelations.org">Illuminati</a> to discover the shocking Truth, Connect with them to unravel the secrets https://illuminatirevelations.com they 86253 123 coming.`

// console.log( createFormatedString(conspiracyTheory));

function createFormatedString(str) {
	if (typeof str !== "string" || str.length === 0) return new UnvalidValueError(str);

	const mailRegExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
	const linkRegExp = /https?:\/\/(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
	const startStrLength = str.length;
	console.log(startStrLength);

	/**First letter Up rest Down case*/
	str = str.charAt().toUpperCase() + str.toLowerCase().slice(1);

	/**Delete links*/
	str = str.replace(linkRegExp, "[links are forbidden]");

	/**Delete emails*/
	str = str.replace(mailRegExp, "[contacts are forbidden]");

	/**Delete html tegs with emails adress*/
	let mailtoPositions = findAllSubstrPosition('"mailto:', str);
	if(mailtoPositions) {
		for (let mailtoPosition of mailtoPositions) {
			let openTeg = str.lastIndexOf("<a", mailtoPosition);
			let closerTeg = str.indexOf("</a>", mailtoPosition);
			
			if(openTeg === -1 || closerTeg === -1) {continue}
			let leftStr = str.slice(0, openTeg);
			let rightStr = str.slice(closerTeg + 4);

			str = leftStr + "[contacts are forbidden]" + rightStr;
		}
	}

	/**Delete html tegs with link*/
	let linkPositions = findAllSubstrPosition('href="', str);
	if(linkPositions) {
		for (let linkPosition of linkPositions) {
			let openTeg = str.lastIndexOf("<a", linkPosition);
			let closerTeg = str.indexOf("</a>", linkPosition);

			if(openTeg === -1 || closerTeg === -1) {continue}
			let leftStr = str.slice(0, openTeg);
			let rightStr = str.slice(closerTeg + 4);

			str = leftStr + "[contacts are forbidden]" + rightStr;
		}
	}

	/**Delete all words > 3 symbols which contain only digits*/
	let strArr = str.split(" ");
	let strArrWithoutDigits;

	strArrWithoutDigits = strArr.map((word) => {
		if(word.length <= 3) {return word}

		if(word.indexOf(',') !== -1) {
			word = word.replace(/,/g, '.');
		}
		if(isFinite(+word)) {return ""}
		return word;
	});
	str = strArrWithoutDigits.join(" ");

	console.log(str.length);
	/**Compare current string lenght and start length*/
	if(startStrLength < str.length) {
		setInterval(() => {alert("do you need help?")}, 5000);
	}

	return str;
}


/*TASK 14*/
let test14 = "some(random)() () ( ()butiful( and (satisfection ))text)";
let test14_1 = "aircraft( (engine() the) most ) ((()complex part) of airplane and) roket()";

// console.log(bracketBalance(test14_1));

function bracketBalance(str) {
	if(typeof str !== "string") {return new UnvalidValueError(str)};
	
	let openBracketPositions = findAllSubstrPosition("(", str);
	let closeBracketPositions = findAllSubstrPosition(")", str);
	let sortedBracketIndexArr = [...openBracketPositions, ...closeBracketPositions].sort((a, b) => a - b);
	
	if (openBracketPositions.length !== closeBracketPositions.length) {return new Error("Parantheses are not balaced")}
	if(closeBracketPositions[0] < openBracketPositions[0]) {return new Error("close bracket before open bracket")}
	
	for(let i = 1, openCount = 1, closeCount = 0; i < sortedBracketIndexArr.length; i++) {
		const bracket = (() => {
			if(closeBracketPositions.includes( sortedBracketIndexArr[i])) {return "close"}
			return "open";
		})();
		
		if(bracket === "open") { 
			openCount++;
			continue;
		}
		
		closeCount++;
		if(closeCount > openCount) {return new Error("close bracket before open bracket")}
	}
	
	let text = document.createTextNode(str);
	let paragraph = document.createElement('p');
	
	paragraph.appendChild(text);
	paragraph.addEventListener("copy", function(event) {
		event.preventDefault();
	});
	paragraph.style.textAlign = "center";
	document.body.appendChild(paragraph);
	
	window.addEventListener("keydown", function(event) {
		if(event.key === "F12") {
			event.preventDefault();
		}
	});
	window.addEventListener("contextmenu", function(event) {
		event.preventDefault();
	});

	return "ideal balance"
}


/*TASK 15*/
// console.log(passGen(20))

function passGen(passLenght) {
	if(typeof passLenght !== "number") {return new UnvalidValueError(passLenght)};
	if(passLenght < 6 || passLenght > 20) {return new Error('pass generator create password from 6 to 20 symbols')}
	
	let minUpperCaseLetterCount = 2,
			maxNumberCount = 5,
			isNumberOneByOne = false,
			
			rawPassword = ["_"],
			currentNumber = 0,
			currentUpperCase = 0;
	
	/*Generate password*/
	do {
		let symbol = generateASCIISymbol();
		if(symbol === "_") {continue}
		
		if(isNumber(symbol)) {
			if(currentNumber < maxNumberCount) {
				currentNumber++;
				rawPassword.push(symbol);
				continue;
			}
			continue;
		}

		if(isLetter(symbol) && currentUpperCase < minUpperCaseLetterCount){
			currentUpperCase++;
			rawPassword.push(symbol.toUpperCase());
			continue;
		}
		rawPassword.push(symbol);
	} while (passLenght > rawPassword.length)
	
	/**Shuffle array of symbols*/
	if(isNumberOneByOne) {
		return sattoloCycle(rawPassword).join("");
	}
	return fixNumberOneByOne(rawPassword).join("");
	

	function generateASCIISymbol() {
		// Safe ASCII Symbol Range Which can be used for password key 33 - 126
		let ASCIICode = generateNumberInRange(33, 126);
		return String.fromCharCode(ASCIICode);
	}
	
	function generateNumberInRange(start, end) {
		return Math.floor(Math.random() * (end - start + 1) + start);
	}

	function sattoloCycle(arr) {
		let i = arr.length;
		let j;

		while(i > 1) {
			i--;
			j = generateNumberInRange(0, i - 1);
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	function fixNumberOneByOne(arr) {
		let shuffleArr = sattoloCycle(arr);
		let numberCount = 0;
		let isNumberOneByOne = false;

		for (const elem of shuffleArr) {
			if(isNumber(elem)) {
				numberCount++;

				if(numberCount >= 2) { 
					isNumberOneByOne = true;
					break;
				}
				continue;
			}
			numberCount = 0;
		}

		return (isNumberOneByOne) ? fixNumberOneByOne(arr) : arr;
	}
}


/*TASK 16*/
let test16 = [1 ,5, 10, 53, -12, -11, 0, 1, 30];
// let test16 = ["1", "5", "2", ''];

// console.log(mountainSort(test16));

function mountainSort(baseArr) {
	if(checkArr(baseArr, "number") instanceof Error) {return checkArr(baseArr, "number").message};
	
	let arr = [...baseArr], //clone base arr
	lowArr = [],
	highArr = [];
	
	arr.sort((a, b) => b - a);
	
	/*for up-speed algorithm i use pop() method insted of shift()*/
	let i = 0;
	while(arr.length) {
		if(i % 2 === 0) {
			lowArr.push(arr.pop());
		} else {
			highArr.push(arr.pop());
		}
		i++;
	}
	highArr.sort((a, b) => b - a);
	return [...lowArr, ...highArr];
}


/*TASK 17*/
let test17 = "*jj=hqqq3444`pp9']tnvvvv";

// console.log(sortByFrequencySymbols(test17));

function sortByFrequencySymbols(str) {
	if(typeof str !== "string") {return new UnvalidValueError(str)}
	let symbolsCount = {};
	let sortedArr = [];
	
	/*Find Frequency of symbols and encrypt it*/
	loop1:
	for(let i = 0; i < str.length; i++) {
		let symbol = str.charAt(i);
		
		if(symbolsCount.hasOwnProperty(symbol)) {
			symbolsCount[symbol] = ++symbolsCount[symbol];
			continue loop1;
		}
		symbolsCount[symbol] = 1;
	}
	
	/*Sort symbols dy frecuency and decrypt it*/
	sortedArr = Object.entries(symbolsCount).sort(sort2DArr);
	str = "";
	
	for(let cryptArr of sortedArr) {
		str = str + decrypt(cryptArr);
	}
	
	return str;
	
	function decrypt([char, count]) {
		let tempStr = "";
		
		for(let i = 0; i < count; i++) {
			tempStr = tempStr + char;
		}
		return tempStr;
	}
}

/*TASK 18*/
let test18 = "aliens among us, they eat  my potatoes! :(";
let test18_1 = "eat  my potatoes!";
let test18_2 = "aliens potatoes";

// console.log(findMaxSubstr(test18, test18_2));

/*Longest Common Substring Algorithm (my interpritation)*/
function findMaxSubstr(str1, str2) {
	if(typeof str1 !== "string") {return new UnvalidValueError(str1)}
	if(typeof str2 !== "string") {return new UnvalidValueError(str2)}
	if(str1.length === 0 || str2.length === 0) {return ""}
	
	const m = str1.length;
	const n = str2.length;
	let maxLength = 0;
	let endIndex = 0;
	
	for(let i = 0; i < m; i++) {
		for(let j = 0; j < n; j++) {
			if(str1.charAt(i) === str2.charAt(j)) {
				compareNextSymbol(i, j);
			}
		}
	}
	
	if (maxLength === 0) {
		return "";
	}
	return str1.slice(endIndex - maxLength, endIndex);

	
	function compareNextSymbol(i, j) {
		let k = 1;
		let currentLength = 1;

		while(str1.charAt(i + k) === str2.charAt(j + k)) {
			if(str1.charAt(i + k) == "" || str2.charAt(j + k) == "") {return false}
			k++;
			currentLength++;
		}
		
		if(currentLength > maxLength) {
			maxLength = currentLength;
			endIndex = i + k;
		}
		return false;
	}
}


/*TASK 19*/
let test19 = "This Text convert to Caesar cipher";
let test19_1 = "XYxyЯяЮю80*+";

// console.log(cipherCaesar(test19_1, 2));

function cipherCaesar(str, offset) {
	if(typeof str !== "string") {return new UnvalidValueError(str)}
	if(str.length === 0) {return ""}
	if(!isNumber(offset)) {return new UnvalidValueError(offset)}
	
	//Unicode UTF-8 range of symbols
	const number = {start: 48, end: 57};
	const latinUpperLetter = {start: 65, end: 90};
	const latinLowerLetter = {start: 97, end: 122};
	const cyrillicUpperLetter = {start: 1040, end: 1071};
	const cyrillicLowerLetter = {start: 1072, end: 1103};

	const symbolCodeRange = [
		number,
		latinUpperLetter,
		latinLowerLetter,
		cyrillicUpperLetter,
		cyrillicLowerLetter,
	]

	let arrUnicodeUTF8 = str.split("").map((symbol) => symbol.charCodeAt(0));
	let encryptedCaesarArr = arrUnicodeUTF8.map(code => encryptCaesar(code, offset)); 

	return encryptedCaesarArr.join('');

	function encryptCaesar(symbolCode, offset) {
		mainLoop:
		for(let range of symbolCodeRange) {
			let {start, end} = range;
			if(symbolCode < start || symbolCode > end) continue;

			for(let i = offset; i >= 0; i--) {
				if(i === 0) {break mainLoop}
				if(symbolCode + 1 > end) { symbolCode = start }
				else { symbolCode = ++symbolCode}
			}
		}
		return String.fromCharCode(symbolCode);
	}
}


/**TASK 20*/
let test20 = "Listen Triangle";
let test20_1 = "Silent Altering";

// console.log( isAnagram(test20, test20_1));

function isAnagram(str1, str2) {
	// debugger
	if(typeof str1 !== "string") {return new UnvalidValueError(str1)}
	if(typeof str2 !== "string") {return new UnvalidValueError(str2)}
	if(str1.length === "" || str2.length === "") {return false}
	if(str1.length !== str2.length) {return false}

	str1 = str1.toLocaleLowerCase();
	str2 = str2.toLocaleLowerCase();

	for(let i = 0; i < str1.length; i++) {
		let charStr1 = str1[i];
		let positionCharStr1InStr2 = str2.indexOf(charStr1);
		if(positionCharStr1InStr2 === -1) {return false}

		let leftSide = str2.slice(0, positionCharStr1InStr2);
		let rightSide = str2.slice(positionCharStr1InStr2 + 1);
		str2 = leftSide + rightSide;
	}
	return true;
}


/**TASK 21*/
let test21 = {name: "Arseniy", age: 24, course: 3, department: "Computer Science",}
let test21_1 = { name: "Renat", age: 23, course: 2, department: "Engineering",}
let test21_2 = {name: "Nastia", age: 22, course: 1, department: "Economics",}
let test21_3 = {name: "Andrey", age: 25, course: 3, department: "Computer Science",}

let University = createUniversity();
/*
console.log( University.addStudent(test21));
console.log( University.addStudent(test21_1));
console.log( University.addStudent(test21_2));
console.log( University.addStudent(test21_3));
console.log( University.removeStudent(1));
console.log( University.findStudent(2));
console.log( University.getStudentsFromCourse(3));
console.log( University.getStudentsFromDepartment("Economics"));
*/

function createUniversity() {
  class University {
    constructor(name = "Unnamed") {
      this.name = name;
      this.students = [];
      this.course = {};
      this.department = {};
    }

    addStudent(props) {
			let cloneProps = JSON.parse( JSON.stringify(props));			
			if(checkRequiredFields(cloneProps) instanceof Error) {
				return checkRequiredFields(cloneProps);
			}

			const newStudentId = this.generateStudentId();
			cloneProps.id = newStudentId;
			const newStudent = new Student(cloneProps);

			this.students.push(newStudent);
			this.course[newStudent.course].students.push(newStudent.id);
			this.department[newStudent.department].students.push(newStudent.id);
			return `Students with id: ${newStudentId} added`;
		}

    generateStudentId() {
      if(this.students.length === 0) {return 0}
      return this.students[this.students.length - 1].id + 1;
    }

		removeStudent(studentId) {
			if(!isNumber(studentId)) {return new UnvalidValueError(studentId)}
			const deletedStudent = this.findStudent(studentId);
			if(deletedStudent instanceof Error) { return deletedStudent.message;}

			this.course[deletedStudent.course].students.splice( 
				this.course[deletedStudent.course].students.indexOf(studentId),
			1);
			this.department[deletedStudent.department].students.splice(
				this.department[deletedStudent.department].students.indexOf(studentId),
			1)
			
			let indexStudent;
			for(let i = 0; i < this.students.length; i++) {
				if(this.students[i].id === studentId) {
					indexStudent = i;
					break;
				}
			}
			this.students.splice(indexStudent, 1);
			return `Student with id: ${studentId} removed`;
		}

		findStudent(studentId) {
			if(!isNumber(studentId)) {return new UnvalidValueError(studentId)}
			let student = this.students.find((student) => student.id === studentId);

			if(student === undefined) {return Error(`Cant find student with id: "${studentId}"`)}
			return student;
		}

		getStudentsFromCourse(course) {
			if(!isNumber(course)) { return new UnvalidValueError(course); }
      if(course < 1 || course > Object.keys(this.course).length) {
        return new Error(`This course: "${course}" didn't exist`);
      }

      let studentsCourseId = this.course[course].students;
      return studentsCourseId.map((id) => this.findStudent(id));
		}

    getStudentsFromDepartment(department) {
      if(typeof department !== "string" || department == "") {return new UnvalidValueError(str)}
      const allDepartment = Object.keys(this.department);
      if(!allDepartment.includes(department)) {return new Error(`Can't find department ${department}`)}

      let studentsDepartmentId = this.department[department].students;
      return studentsDepartmentId.map((id) => this.findStudent(id));
    }
  } 

  class ZimbabweUniversity extends University {
    constructor(name = "Akujaku") {
      super(name);
      this.course = {
        1: {"responsible": "Mohammed", students: [],},
        2: {"responsible": "Kunal", students: [],},
        3: {"responsible": "Nisha", students: [],},
      };
      this.department = {
        "Computer Science": {specialties: [112, 121], students: [],},
        "Economics": {specialties: [161, 162], students: [],},
        "Engineering": {specialties: [34, 35, 36], students: [],},
      };
    }
  }
	
	class Student {
		constructor(props) {
			this.id = props.id;
			this.name = props.name;
			this.age = props.age;
			this.course = props.course;
			this.department = props.department;
		}
	}

	function checkRequiredFields(props) {
		const requiredFields = ["name", "age", "course", "department"];
		const courses = 3;
		let propsFields = Object.keys(props);
		let propsArr = Object.entries(props);

		for(let requiredField of requiredFields) {
			if(!propsFields.includes(requiredField)) {
				return new Error(`Required "${requiredField}" field`);
			}
		}

		for(let [key, value] of propsArr) {
			if(requiredFields.includes(key)) {
				if(
					value === undefined ||
					value === "" ||
					value === '' ||
					value === null ||
					value === NaN
					) {
						return new Error(`Unexpected value of ${key}: ${value}`);
					}
			}
		}

		if(!isNumber(props.course)) {return new UnvalidValueError(props.course)}
		if(props.course < 1 || props.course > courses) {
			return new Error(`Unexpected value of course "${props.course}"`);
		}
	}

	return new ZimbabweUniversity();
}


/**TASK 22*/
let test22 = `"Deep within the arid expanse of Nevada's desert," exclaimed the intrepid explorer, "lies the enigmatic realm of Area 51, shrouded in a veil of secrecy and veiled whispers!" Legends of extraterrestrial encounters and cutting-edge technology intertwine, leaving no stone unturned. But amidst the sprawling hangars and restricted zones. Are we truly alone in the cosmos? What secrets does Area 51 hold? With bated breath, seekers of truth embark on a journey, driven by an unyielding desire to unravel the cosmic tapestry that awaits beyond our earthly confines. In the realm of Area 51, where legends merge with reality, the secrets of the universe shall finally be unleashed!`;
let test22_1 = "word. New.  \t\n\r word. And... Other... text.";

console.log( textAnalysis(test22));

function textAnalysis(text) {
  if(typeof text !== "string") {return new UnvalidValueError(text)}
  if(text.length === 0) {return new Error("Function get empty string")}

	let symbolsCount = getSymbolsCount(text);
  let clearWhiteSpaceText = clearWhiteSpase(text);
  let sentenceCount = getSentencesCount(clearWhiteSpaceText);
  let arrOfStr = clearWhiteSpaceText.split(" ");

  let clearArrStr = trimPunctuation(arrOfStr);
  let wordsArr = clearNumber(clearArrStr);
  let wordsCount = getWordsCount(wordsArr);
	let mostUsedWords = getMostUsedWords(wordsArr);

  return `
  words: ${wordsCount}\n\r
  sentences: ${sentenceCount}\n\r
  symbols: ${symbolsCount}\n\r
  most used words: ${mostUsedWords}
  `

	function getSymbolsCount(text) {
		return text.split('').length;
	}

  function clearWhiteSpase(text) {
    return text.replace(/[\t\n\r]/g, "");
  }

  function getSentencesCount(text) {
    const separatorDot = "."; //dot can be sentence separator or not be; And dot can be "..." which again can be separator or not!
    const sentenceSeparators = ["?", "!"];
    let sentenceCount = 0;

    sentenceCount += calcSentences(text, separatorDot);

    /**Find more separator*/
    for(const separator of sentenceSeparators) {
      const separatorRegex = new RegExp(escapeRegExp(separator), "g");
      const matches = text.match(separatorRegex);
  
      if (matches) {
        sentenceCount += matches.length;
      }
    }
    return sentenceCount;


    function calcSentences(text, separator) {
      if(text === undefined || separator === undefined) {throw new Error("calcSentences() take unexpected argument")}
      let count = 0;
      let currentPosition = text.indexOf(separator);
      if(currentPosition === -1) {return 0}

      while(currentPosition !== -1) {
        //check next symbol after finded
        let nextIndex = currentPosition + 1;
        if(text.charAt(nextIndex) === "") {
          count++;
          break;
        }

        while(text.charAt(nextIndex) === " ") {
          nextIndex++;
        }

        if(isUpperLetter( text.charAt(nextIndex))) { 
          count++; //if letter after separator is UPPER case letter, success, i find sentences
        }
        currentPosition = text.indexOf(separator, currentPosition + 1);
      }
      return count;
    }

		//I use escape function because "." "?" and some other symbol create conflict during create new RegExp
		function escapeRegExp(string) {
			return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}

		function isUpperLetter(symbol) {
			const latinUpperLetter = {start: 65, end: 90};
			const cyrillicUpperLetter = {start: 1040, end: 1071};
			const symbolCode = symbol.charCodeAt(0);
	
			if(latinUpperLetter.start <= symbolCode && symbolCode <= latinUpperLetter.end) {return true}
			if(cyrillicUpperLetter.start <= symbolCode && symbolCode <= cyrillicUpperLetter.end) {return true}
			return false;
		}
  }

  function trimPunctuation(arr) {
    const punctuationMarks = [".", "?", "!", "...", "?..", "!..", ",", ":", ";", "\"", "'", "`", "«", "»", "(", ")", "[", "]", "{", "}", "-", "—", "...", "\\", "/", ];
    const strArr = [...arr]; //copy arr, not change basic arr

    let trimStrArr = strArr.map((str) => {
      while(punctuationMarks.includes(str[0])) {
        str = str.slice(1);
      }

      while(punctuationMarks.includes(str[str.length - 1])) {
        str = str.slice(0, str.length - 1);
      }
      return str;
    });
    return trimStrArr;
  }

  function clearNumber(arr) {
    let wordArr = arr.filter((str) => !isFinite(str)); //isFinite(" ") returns true
    return wordArr;
  }

  function getWordsCount(wordArr) {
    return wordArr.length;
  }

  function getMostUsedWords(wordArr) {
		let statistic = {};

		for(const word of wordArr) {
			if(statistic[word]) {
				statistic[word]++;
				continue;
			}
			statistic[word] = 1;
		}

		let unsortedArrStatistic = Object.entries(statistic);
		let sortArrStatistic = unsortedArrStatistic.sort(sort2DArr);
		let mostUsed = sortArrStatistic.slice(0, 5);
		let mostUsedStr = '\n';

		for(let [key, value] of mostUsed) {
			mostUsedStr = mostUsedStr + "\t\t\t\t* \""+ key + "\":  " + value + " times\n";
		}

		return mostUsedStr;
  }
}
