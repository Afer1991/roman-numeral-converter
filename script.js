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
    output.classList.add("wrong-output");
  } else {
    return convertToRomanNumeral(input);
  }
};

const convertToRomanNumeral = (num) => {
  
};

const getThousands = (num) => {
  switch(num) {
    case 1:
      return "M";
    case 2:
      return "MM";
    case 3:
      return "MMM";
  }
};

const getHundreds = (num) => {
  switch(num) {
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
  }
};

const getTens = (num) => {
  switch(num) {
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
  }
};

const getUnits = (num) => {
  switch(num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
  }
};

convertBtn.addEventListener("click", checkNumber);
numberToConvert.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkNumber();
  }
});


