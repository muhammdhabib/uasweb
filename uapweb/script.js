function hasil() {
    var kode = document.getElementById('kode').value;
    var banyak = document.getElementById('banyakBarang').value;
    var pembayaran = document.getElementById('pembayaran').value;
    if (kode == 1) {
        var kode1 = banyak * 10000;
        total1 = pembayaran - kode1
        window.prompt("banyak barang: " + banyak + "\ntotal harga: " + kode1); 
        window.prompt("pembayaran: " + pembayaran);  
        window.prompt("kembalian: " + total1); 
    } else if (kode == 2) {
        var kode2 = banyak * 20000;
        total2 = pembayaran - kode2
        window.prompt("banyak barang: " + banyak + "\ntotal harga: " + kode2); 
        window.prompt("pembayaran: " + pembayaran);  
        window.prompt("kembalian: " + total2); 
    } else if (kode == 3) {
        var kode3 = banyak * 30000;
        total3 = pembayaran - kode3
        window.prompt("banyak barang: " + banyak + "\ntotal harga: " + kode3);
        window.prompt("pembayaran: " + pembayaran);
        window.prompt("kembalian: " + total2);
    }

}