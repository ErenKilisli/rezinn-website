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

  // Email gönderme fonksiyonu
document.getElementById('sendEmailBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Form validation
    if (!name || !email || !subject || !message) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    
    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    
    // E-posta bağlantısı oluşturma
    const mailtoLink = `mailto:rezinnco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Gönderen: ' + name + '\nE-posta: ' + email + '\n\n' + message)}`;
    
    // Yeni pencerede e-posta istemcisini açma
    window.open(mailtoLink, '_blank');
  });