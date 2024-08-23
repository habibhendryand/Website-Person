function checkkhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (name === ""){
        resultDiv.innerHTML = "<p style='color: red;'>Nama tidak boleh kosong!</p>";
        return;
    }

    const khodamNames = [
        "Khodam Naga Tanduk",
        "Khodam Banteng Merah",
        "Khodam Tuyul Pargoy",
        "Khodam Babi Ajojing",
        "Khodam Biawak Dugem"
    ];

    const khodamPresent = Math.random() > 0.5;

    if (khodamPresent){
        const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
        resultDiv.innerHTML = (name + ', anda memiliki ' + khodamName + ' yang melindungi Anda ');
    }else{
        resultDiv.innerHTML = (name + ' maaf, anda tidak memiliki khodam ');
    }
}