function mudaTema() {
  document.body.classList.toggle("dark");
  var mudaTema = document.getElementById("mudaTema");
  if(mudaTema.innerHTML == "🌙"){
    mudaTema.innerHTML = "☀️";
  }else{
    mudaTema.innerHTML = "🌙";
  }
}