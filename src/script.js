// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const topNavbar = document.getElementById('top-navbar');

hamburger.addEventListener('click', () => {
  topNavbar.style.left = topNavbar.style.left === '0px' ? '-100%' : '0px';
});
topNavbar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  topNavbar.style.left = '-100%';
}));

// Name typing animation
const nameEl = document.getElementById('name');
const nameText = "Sanika Gaikwad Patil";
let i = 0;
function typeWriter() {
  if(i < nameText.length){
    nameEl.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();

// Smooth scroll + active link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if(link.getAttribute('href').includes(current)) link.classList.add('active-link');
  });
});

// CV Download + Netlify Email Request
document.getElementById('download-cv').addEventListener('click', async function(e){
  e.preventDefault();
  const cvLink = this.href;

  // Show toast message
  const toast = document.createElement('div');
  toast.textContent = "Requesting permission... CV will download shortly.";
  toast.className = "fixed top-5 right-5 bg-cyan-400 text-black px-4 py-2 rounded shadow-lg z-50 animate-fade-in";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);

  try {
    // Send POST request to Netlify function
    await fetch('/.netlify/functions/sendCVRequest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: 'sanikagaikwad189@gmail.com' }) // optional: collect real email
    });

    // Start CV download
    const a = document.createElement('a');
    a.href = cvLink;
    a.download = 'assets/sanika cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  } catch (error) {
    console.error('Error sending permission request:', error);
    alert('Something went wrong. Try again later.');
  }
});
