const revertButton = document.getElementById("revertButton");
let konversiKeFarenheit = true;

function revertSuhu() {
  const labelKonversi = document.getElementById("labelKonversi");
  const labelHasil = document.getElementById("labelHasil");
  const caraKalkulasi = document.getElementById("caraKalkulasi");
  const nilaiKonversi = document.getElementById("nilaiKonversi").value;
  const hasil = document.getElementById("hasil");

  konversiKeFarenheit = !konversiKeFarenheit;
  if (konversiKeFarenheit) {
    labelKonversi.innerText = 'Fahrenheit (°F):'
    labelHasil.innerText = 'Celcius (°C):'
    caraKalkulasi.innerHTML = `°F = (9/5 x °C) + 32`
  } else {
    labelKonversi.innerText = 'Celcius (°C):'
    labelHasil.innerText = 'Fahrenheit (°F):'
    caraKalkulasi.innerHTML = `°C = 5/9 (°F-32)`
  }
  hasil.value = hitungKonversi(nilaiKonversi)
}

revertSuhu()

function submitForm(e) {
  e.preventDefault();
  var number = /^[0-9]+$/;
  const nilaiKonversi = document.getElementById("nilaiKonversi").value;
  const hasil = document.getElementById("hasil");

  if (nilaiKonversi == "") {
    alert("Nilai suhu awal wajib di isi!");
    document.getElementById("nilaiKonversi").focus();
    return false;
  }

  if (!nilaiKonversi.match(number)) {
    alert("Nilai suhu awal harus berupa nomor!");
    document.getElementById("nilaiKonversi").focus();
    return false;
  }

  hasil.value = hitungKonversi(nilaiKonversi)
}

function hitungKonversi(nilai) {
  if (konversiKeFarenheit) {
    return (nilai - 32) * 5 / 9;
  } else {
    return (nilai * 9 / 5) + 32;
  }
}
