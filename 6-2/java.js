function tampilData() {
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var produk = document.getElementsByName("produk");
    var daftarProduk = ''

    for (var produk2 of produk){
        if (produk2.checked){
            daftarProduk += ', '+ produk2.value
        }
    }

    daftarProduk = daftarProduk.substring(1)

    var layanan = document.querySelector("input[name=layanan]:checked").value;

    alert(
        
        "Nama : " +
        nama +
        "\nUmur : " +
        umur +
        "\nJenis Kelamin : " +
        jeniskelamin + 
        "\nInfo Layanan : " +
        daftarProduk + 
        "\nMenggunakan Layanan : " +
        layanan
    );
}