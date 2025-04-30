const lines = [
    "Şehrin en güzel restoranında",
    "Hafta sonu buluşmasında",
    "Gecenin en popüler mekanında",
    "Arkadaşlarla eğlenmek istediğinde"
  ];
  
  let index = 0;
  const changingLine = document.getElementById("changing-line");
  
  function changeLine() {
    changingLine.style.opacity = 0;
  
    setTimeout(() => {
      changingLine.innerText = lines[index];
      changingLine.style.opacity = 1;
      index = (index + 1) % lines.length;
    }, 500);
  }
  
  changeLine();
  setInterval(changeLine, 3000);
  