function tampilData() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var hobi = document.getElementsByName("hobi");
    var daftarHobi = ''

    for (var hobi2 of hobi) {
        if(hobi2.checked) {
        daftarHobi += ', '+ hobi2.value
        }
    }

    daftarHobi = daftarHobi.substring(1)

    alert(
        "Nama : " +
        nama +
        "\nAlamat : " +
        alamat +
        "\nJenis Kelamin : " +
        jeniskelamin + 
        "\nHobi : " +
        daftarHobi
    );
}