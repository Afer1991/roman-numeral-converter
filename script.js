const numberToConvert = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkNumber = () => {
  const input = numberToConvert.value;
  if (input === "") {
    output.innerText = "Please enter a valid number";
    output.classList.add("wrong-output");
  } else if (input > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.classList.add("wrong-output");
  } else if (input < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
    output.classList.remove("output");
    output.classList.add("wrong-output");
  } else {
    return convertToRomanNumeral(input);
  }
};

const convertToRomanNumeral = (num) => {
  const romanNumeralArr = num.toString().split("");
  let convertedNumber;
  if (num > 999) {
    romanNumeralArr[0] = getThousands(romanNumeralArr[0]);
    romanNumeralArr[1] = getHundreds(romanNumeralArr[1]);
    romanNumeralArr[2] = getTens(romanNumeralArr[2]);
    romanNumeralArr[3] = getUnits(romanNumeralArr[3]);
    convertedNumber = romanNumeralArr.join("");
    output.innerText = convertedNumber;
    output.classList.remove("wrong-output");
    output.classList.add("output");
  } else if (num > 99) {
    romanNumeralArr[0] = getHundreds(romanNumeralArr[0]);
    romanNumeralArr[1] = getTens(romanNumeralArr[1]);
    romanNumeralArr[2] = getUnits(romanNumeralArr[2]);
    convertedNumber = romanNumeralArr.join("");
    output.innerText = convertedNumber;
    output.classList.remove("wrong-output");
    output.classList.add("output");
  } else if (num > 9) {
    romanNumeralArr[0] = getTens(romanNumeralArr[0]);
    romanNumeralArr[1] = getUnits(romanNumeralArr[1]);
    convertedNumber = romanNumeralArr.join("");
    output.innerText = convertedNumber;
    output.classList.remove("wrong-output");
    output.classList.add("output");
  } else {
    romanNumeralArr[0] = getUnits(romanNumeralArr[0]);
    convertedNumber = romanNumeralArr.join("");
    output.innerText = convertedNumber;
    output.classList.remove("wrong-output");
    output.classList.add("output");
  }
};

const getThousands = (num) => {
  switch(num) {
    case "1":
      return "M";
    case "2":
      return "MM";
    case "3":
      return "MMM";
  }
};

const getHundreds = (num) => {
  switch(num) {
    case "1":
      return "C";
    case "2":
      return "CC";
    case "3":
      return "CCC";
    case "4":
      return "CD";
    case "5":
      return "D";
    case "6":
      return "DC";
    case "7":
      return "DCC";
    case "8":
      return "DCCC";
    case "9":
      return "CM";
  }
};

const getTens = (num) => {
  switch(num) {
    case "1":
      return "X";
    case "2":
      return "XX";
    case "3":
      return "XXX";
    case "4":
      return "XL";
    case "5":
      return "L";
    case "6":
      return "LX";
    case "7":
      return "LXX";
    case "8":
      return "LXXX";
    case "9":
      return "XC";
  }
};

const getUnits = (num) => {
  switch(num) {
    case "1":
      return "I";
    case "2":
      return "II";
    case "3":
      return "III";
    case "4":
      return "IV";
    case "5":
      return "V";
    case "6":
      return "VI";
    case "7":
      return "VII";
    case "8":
      return "VIII";
    case "9":
      return "IX";
  }
};

convertBtn.addEventListener("click", checkNumber);
numberToConvert.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkNumber();
  }
});


