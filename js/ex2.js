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

document.getElementById("country").addEventListener("input", e => {
  const inp = e.target.value; // Value of the input country field

  function closeList (el) {
    let x = Array.from(document.getElementsByClassName("suggestion"));
    for (let i=0; i<x.length; i++) {
      if (el != x[i] && el != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  // check matching item in the array - still loop as input keeps matching
  countryList.forEach(element => {
    if (element.toLowerCase().startsWith(inp.toLowerCase()) === true) {
      const countries = document.createElement("div");
      countries.className = "suggestion";
      countries.textContent = element;
      document.getElementById("suggestions").appendChild(countries);
    }
  });

  // replace value in input box
  const list = Array.from(document.getElementsByClassName("suggestion"));
  list.forEach(ctr => {
    ctr.addEventListener("click", e => {
      document.getElementById("country").value = e.target.textContent;
      console.log(`Country chosen: ${e.target.textContent}`);
      closeList();
    });
  })
})


