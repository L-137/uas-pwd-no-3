function hitungGaji() {
    let gajiPokok = parseInt(document.getElementById("gajiPokok").value);
    let jamLembur = parseInt(document.getElementById("jamLembur").value);

    let tarifLembur = 20000;
    let totalLembur = jamLembur * tarifLembur;
    let gajiKotor = gajiPokok + totalLembur;

    let pajak = 0;
    if (gajiKotor < 5000000) {
        pajak = 0.05 * gajiKotor;
    } else if (gajiKotor <= 10000000) {
        pajak = 0.10 * gajiKotor;
    } else {
        pajak = 0.15 * gajiKotor;
    }

    let gajiBersih = gajiKotor - pajak;

    document.getElementById("outPokok").innerHTML = formatRupiah(gajiPokok);
    document.getElementById("outLembur").innerHTML = formatRupiah(totalLembur);
    document.getElementById("outKotor").innerHTML = formatRupiah(gajiKotor);
    document.getElementById("outPajak").innerHTML = formatRupiah(pajak);
    document.getElementById("outBersih").innerHTML = formatRupiah(gajiBersih);
}

function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}
