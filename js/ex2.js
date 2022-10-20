// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];



// function autocomp () {
//   let inputField = document.getElementById("country")
// }



// function autocomp(inp, arr) {
//   inp.addEventListener("input", e => {
//     let a = this.value;
//     a = document.createElement("div");
//     a.setAttribute("id", this.id + "autocomplete-list");
//     a.setAttribute("class", "autocomplete-items");
//   })
// }



function closeList (el) {
  let x = document.getElementById("autocomplete");
  for (let i=0; i<x.length; i++) {
    if (el != x[i] && el != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
// closeList();


for (i=0; i<countryList.length; i++) {
  const countries = document.createElement("div");
  countries.id = "autocomplete";
  // countries.textContent = countryList[i];
  document.getElementById("suggestions").appendChild(countries);
}



// document.getElementById("country").addEventListener("input", e => {
//   const inp = e.target.value; // Value of the input country field
  
//   //check each item in the array
//   for (i=0; i<countryList.length; i++) {
//     if (countryList[i].startsWith(inp).toUppercase() === inp.toUppercase()) {
//       const newList = document.createElement("div");
//     }
//   }
// });


document.getElementById("country").addEventListener("input", e => {
  const inp = e.target.value; // Value of the input country field
  
  //check each item in the array
  const autoItem = document.getElementById("autocomplete");
  autoItem.addEventListener("click", e => {
  countryList.forEach(element => {
    if (element.startsWith(inp.toLowerCase()).toLowerCase() === true) {
      countries.textContent = element;
      document.getElementById("suggestions").appendChild(countries);
    }
  })
})
});