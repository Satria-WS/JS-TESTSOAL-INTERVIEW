Test JavaScript Jumpa
Test 1
Tentukan apakah sebuah kalimat adalah pangram. Sebuah adalah kalimat yang menggunakan setiap huruf alfabet setidaknya sekali. Pangram bahasa Inggris yang paling terkenal adalah: “The quick brown fox jumps over the lazy dog.”
Alfabet yang digunakan terdiri dari huruf ASCII “a” sampai “z”, inklusif, dan case insensitive. Masukan tidak akan berisi simbol non-ASCII.
 Test case: 
1.	Empty string (‘’) / false
2.	abcdefghijklmnopqrstuvwxyz / true
3.	the quick brown fox jumps over the lazy dog / true
4.	a quick movement of the enemy will jeopardize five gunboats / false
5.	the 1 quick brown fox jumps over the 2 lazy dogs / true

Test 2
Jika Anda ingin membangun sesuatu menggunakan Raspberry Pi, Anda mungkin akan menggunakan resistor. Anda perlu mengetahui dua hal tentang mereka:
•	Setiap resistor memiliki nilai resistansi.
•	Resistor berukuran kecil - sangat kecil sehingga jika Anda mencetak nilai resistansi pada resistor tersebut, akan sulit untuk dibaca.
Untuk mengatasi masalah ini, pabrikan mencetak pita berkode warna ke resistor untuk menunjukkan nilai resistansinya. Setiap pita memiliki posisi dan nilai numerik.
2 pita pertama resistor memiliki skema pengkodean sederhana: setiap warna dipetakan ke satu nomor. Misalnya, jika mereka mencetak pita coklat (nilai 1) diikuti dengan pita hijau (nilai 5), itu akan diterjemahkan menjadi angka 15.
Dalam tes ini Anda akan membuat program yang berguna sehingga Anda tidak perlu mengingat nilai-nilai pita. Program akan mengambil nama warna sebagai input dan output dua digit angka, bahkan jika inputnya lebih dari dua warna!
Warna pita dikodekan sebagai berikut:
•	Black: 0
•	Brown: 1
•	Red: 2
•	Orange: 3
•	Yellow: 4
•	Green: 5
•	Blue: 6
•	Violet: 7
•	Grey: 8
•	White: 9

Dari contoh di atas: brown-green harus menghasilkan 15 brown-green-violet harus mengembalikan 15 juga, mengabaikan warna ketiga.
Test case:
1.	['brown', 'black'] / 10
2.	['blue', 'grey'] / 68
3.	['yellow', 'violet'] / 47
4.	['orange', 'orange'] / 33
5.	['green', 'brown', 'orange'] / 51
