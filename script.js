const hamBurger = document.querySelector("#btn_toogle_new");
const hamBurger2 = document.querySelector("#btn_toogle_new2");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
  document.querySelector(".wrapper .main").style.display = "none";
});
hamBurger2.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.remove("expand");
  document.querySelector(".wrapper .main").style.display = "block";
});


// Fungsi untuk memeriksa lebar layar dan menampilkan alert
function checkScreenWidth() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    // alert("Lebar layar kurang dari 500px!");
    document.querySelector("#sidebar").classList.remove("expand");
} else {
  document.querySelector("#btn_toogle_new").style.display = "none";
  document.querySelector("#btn_toogle_new2").style.display = "none";
}
}

// Panggil fungsi saat halaman dimuat
checkScreenWidth();

// Juga panggil fungsi setiap kali ukuran layar berubah
window.addEventListener('resize', checkScreenWidth);
