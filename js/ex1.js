// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// console.log(getCharacters("LA"));

// Append dropdown values
for (i=0; i<houses.length; i++) {
  const names = document.createElement("option")
  names.value = houses[i].code;
  names.textContent = houses[i].name;
  document.getElementById("house").appendChild(names);
}

// Test values just append
document.getElementById("house").addEventListener("change", e => {
  console.log("House code: " + e.target.value);
});


// Get dropdown values    -->   ['ST', 'LA', 'BA', 'TA']
let houseElements = [];
function getCode (arr, field) {
  for (i=0; i<houses.length; i++) {
    houseElements.push(arr[i][field]);
  }
  return houseElements;
}
console.log(getCode(houses, "code"));


// for (x=0; x<houseElements.length; x++) {
//   if (document.getElementById("house") === houseElements[x]) {
//     getCharacters(`${houseElements[x]}`);
//   }
// }




// document.getElementById("house").addEventListener("click", e => {
// });




const formElement = document.querySelector("form");

formElement.addEventListener("submit", e => {
  e.preventDefault();
})