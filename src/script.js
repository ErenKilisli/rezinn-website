const lines = [
  "Şehrin en güzel restoranında",
  "Hafta sonu buluşmasında",
  "Gecenin en popüler mekanında",
  "Arkadaşlarla eğlenmek istediğinde"
];

let index = 0;
let changingLine;

document.addEventListener('DOMContentLoaded', function() {
  changingLine = document.getElementById("changing-line");

  if (changingLine) {
    changeLine();
    setInterval(changeLine, 3000);
  }

  const sendEmailBtn = document.getElementById('sendEmailBtn');

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', function() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !subject || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return;
      }

      const mailtoLink = `mailto:rezinnco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Gönderen: ' + name + '\nE-posta: ' + email + '\n\n' + message)}`;

      window.open(mailtoLink, '_blank');
    });
  }
});

function changeLine() {
  if (!changingLine) return;
  
  changingLine.style.opacity = 0;

  setTimeout(() => {
    changingLine.innerText = lines[index];
    changingLine.style.opacity = 1;
    index = (index + 1) % lines.length;
  }, 500);
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const logo = navbar.querySelector('img');
  const heroBottom = document.getElementById('hero-section').getBoundingClientRect().bottom;

  if (heroBottom <= 0) {
    navbar.classList.add('scrolled');
    logo.src = 'assets/RezinnIcon.png';
  } else {
    navbar.classList.remove('scrolled');
    logo.src = 'assets/RezinnIconDark.png';
  }
});

// touchend veya click sonrası odakta kalan buton/a elemanını kaybet
['touchend', 'click'].forEach(evt => {
  document.addEventListener(evt, () => {
    const active = document.activeElement;
    if (
      active &&
      (active.tagName === 'BUTTON' ||
       active.tagName === 'A' ||
       active.classList.contains('store-btn') ||
       active.classList.contains('contact-btn'))
    ) {
      active.blur();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 1.png … 9.png olacak şekilde
  const images = Array.from({length: 9}, (_, i) => `assets/${i+1}.png`);
  const captions = [
    'Anasayfa’da tüm mekânları görüp inceleyebilir, dilediğin restoranı arayarak bulabilirsin.',
    'Keşfet’e tıkladığında haritadan yakınındaki mekanların lokasyonlarını görebilirsin.',
    'Dilersen restoranları türüne, fiyatlarına, yorumlarına göre sıralayıp sana en uygun mekanı keşfedebilirsin.',
    'Dilediğin restorana tıklayarak mekân hakkında lokasyon, fiyatlar, yorumlar, doluluk oranı gibi ayrıntılı bilgilere ulaşabilirsin.',
    'İstediğin restorana tıklayıp “Rezervasyon Yap”a tıklayarak tarihi ve saati seçip kolayca rezervasyon oluşturabilirsin.',
    'Rezervasyonunu başarılı bir şekilde oluşturduktan sonra dilerseniz takviminize de ekleyebilirsiniz.',
    'Rezervasyonlar bölümünde oluşturduğunuz tüm rezervasyonları görebilirsiniz.',
    'Mesajlar sekmesinden dilediğiniz restoranla mesajlaşabilirsiniz.',
    'Restorana mekanla ilgili merak ettiğiniz tüm soruları sorabilir, gönül rahatlığıyla fikir alabilirsiniz.'
  ];

  let idx = 0;
  const imgEl = document.getElementById('slider-img');
  const capEl = document.getElementById('slider-caption');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let timer;

  function showSlide(i) {
    idx = (i + images.length) % images.length;
    imgEl.style.opacity = 0;           
    setTimeout(() => {
      imgEl.src = images[idx];            
      capEl.textContent = captions[idx];     
      imgEl.style.opacity = 1; 
    }, 500);    
  }
  

  function startAuto() {
    timer = setInterval(() => showSlide(idx+1), 5000);
  }
  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  prevBtn.addEventListener('click', () => { showSlide(idx-1); resetAuto(); });
  nextBtn.addEventListener('click', () => { showSlide(idx+1); resetAuto(); });

  // İlk gösterim ve otomatik başlat
  showSlide(0);
  startAuto();
});
