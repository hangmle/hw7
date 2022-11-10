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

// document.getElementById("country").addEventListener("input", e => {
//   const inp = e.target.value; // Value of the input country field

//   function closeList (el) {
//     let x = Array.from(document.getElementsByClassName("suggestion"));
//     for (let i=0; i<x.length; i++) {
//       if (el != x[i] && el != inp) {
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }
  
//   // check matching item in the array - still loop as input keeps matching
//   countryList.forEach(element => {
//     if (element.toLowerCase().startsWith(inp.toLowerCase()) === true) {
//       const countries = document.createElement("div");
//       countries.className = "suggestion";
//       countries.textContent = element;
//       document.getElementById("suggestions").appendChild(countries);
//     }
//   });

//   // replace value in input box
//   const list = Array.from(document.getElementsByClassName("suggestion"));
//   list.forEach(ctr => {
//     ctr.addEventListener("click", e => {
//       document.getElementById("country").value = e.target.textContent;
//       console.log(`Country chosen: ${e.target.textContent}`);
//       closeList();
//     });
//   })
// })


// SOLUTION
// check for input and write 
document.getElementById("country").addEventListener("input", e => {
  // console.log(e.target.value);
  // Get suggestions element and empty it
  const suggestionElement = document.getElementById("suggestions");
  suggestionElement.textContent = "";
  // Enhance - Remove the css for the suggestions class (it's ok if it doesn't exist)
  suggestionElement.classList.remove("suggestions");
  
  // Loop through array and add countries that match input
  countryList.forEach(country => {
    if (country.toLowerCase().startsWith(e.target.value.toLowerCase()) && e.target.value.length > 0) {
      // Enhance 2 - Apply the css suggestions class
      suggestionElement.classList.add("suggestions");
      const countryElement = document.createElement("div");
      countryElement.textContent = country;
      // Add the style sheet
      countryElement.classList.add("suggestion");
      //  When clicked, add it to the text box
      countryElement.addEventListener("click", eCountry => {
        // e.target.value = country;
        // OR:
        e.target.value = eCountry.target.textContent;
      })

      // Add country to suggestion
      suggestionElement.appendChild(countryElement);
    }
  })
})
