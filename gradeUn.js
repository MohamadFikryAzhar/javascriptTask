function hitungRataRata(nama, bahasaIndonesia, bahasaInggris, matematika, IPA) {
    // Validasi semua nilai harus diisi
    if (!bahasaIndonesia || !bahasaInggris || !matematika || !IPA) {
      return "Semua nilai harus diisi.";
    }
  
    // Menghitung rata-rata
    let totalNilai = bahasaIndonesia + bahasaInggris + matematika + IPA;
    let rataRata = totalNilai / 4;
  
    // Menentukan grade
    let grade;
    if (rataRata >= 90 && rataRata <= 100) {
      grade = "A";
    } else if (rataRata >= 80 && rataRata < 90) {
      grade = "B";
    } else if (rataRata >= 70 && rataRata < 80) {
      grade = "C";
    } else if (rataRata >= 60 && rataRata < 70) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Mengembalikan hasil
    return `Rata-rata UN ${nama}: ${rataRata}, Grade: ${grade}`;
  }
  
  // Contoh penggunaan
  console.log(hitungRataRata("Fikry", 85, 90, 92, 88));
  