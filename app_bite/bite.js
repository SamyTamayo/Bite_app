let foods = [];

// cambiar pantallas
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// iniciar análisis
function startAnalysis() {
  showScreen("analyzing");

  setTimeout(() => {
    let success = Math.random() > 0.3;

    if (success) {
      showScreen("confirm");
    } else {
      showScreen("error");
    }
  }, 2000);
}

// cancelar análisis
function cancelAnalysis() {
  showScreen("camera");
}

// guardar comida
function saveFood() {
  let name = document.getElementById("foodName").innerText;
  let category = document.getElementById("category").value;

  foods.push({ name, category });

  updateList();

  showScreen("success");

  setTimeout(() => showScreen("home"), 1500);
}

// manual
function addManualFood() {
  let input = document.getElementById("manualFood").value;

  if (!input) {
    alert("Ingresa un alimento");
    return;
  }

  foods.push({ name: input, category: "Normal" });

  updateList();
  showScreen("success");
}

// lista
function updateList() {
  let list = document.getElementById("foodList");
  list.innerHTML = "";

  foods.forEach(f => {
    let li = document.createElement("li");
    li.innerText = `${f.name} - ${f.category}`;
    list.appendChild(li);
  });
}