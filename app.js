async function GenFact() {
  const response = await fetch("https://uselessfacts.jsph.pl/random.json");
  const data = await response.json();
  const fact = data.text;
  document.getElementById("fact-display").innerText = fact;
}
document.getElementById("btn").addEventListener("click", GenFact);
