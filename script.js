const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
e.preventDefault();
const inputs = [];
form.querySelectorAll("input").forEach((input) => {
const { name, value } = input;
/inputs.push({ name, value });
/});
window.open("terimakasih.html", "_blank");
console.log(inputs);
form.reset();
}); 

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

function checkforblank1() {
	if(document.getElementById(Nama).value == "") {
	alert('Mohon diisi');
	document.getElementById(Nama).stye.bordercolor = "red"; 
	if(document.getElementById(sekolah).value == "") {
	alert('Mohon diisi');
	document.getElementById(sekolah).stye.bordercolor = "red";
	if(document.getElementById(alamat).value == "") {
	alert('Mohon diisi');
	document.getElementById(alamat).stye.bordercolor = "red";
  if(document.getElementById(jabatan).value == "") {
    alert('Mohon diisi');
    document.getElementById(jabatan).stye.bordercolor = "red";
	return false;
  }
}
}
}
}