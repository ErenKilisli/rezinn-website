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
