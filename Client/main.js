const tbody = document.getElementById("tablebody");
//fetch people
fetchpeople();
async function fetchpeople() {
  const result = await fetch("http://localhost:8080/people");
  const people = await result.json();
  genpeople(people);
}

function genpeople(array) {
  for (let i = 0; i < array.length; i++) {
    const tr = document.createElement("tr");
    tr.document.innertext.people;
    tbody.appendChild("tr");
  }
}

// ${array[i].firstName}, ${array[i].lastName}, ${array[i].dob};
