function getBelowTheAverage(degerlendirmeler) {
  let toplamPuan = 0;
  for (let i = 0; i < degerlendirmeler.length; i++) {
    toplamPuan += degerlendirmeler[i].puan;
   
  }
  const ortalamaPuan = toplamPuan / degerlendirmeler.length;
  const belowAverageList = [];
  
  for (let i = 0; i < degerlendirmeler.length; i++) {
    if (degerlendirmeler[i].puan < ortalamaPuan) {
      belowAverageList.push(degerlendirmeler[i].isim);
    }
  }
  return belowAverageList;
}
