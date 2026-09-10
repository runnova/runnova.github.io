

if (window.innerWidth < 500) {
  const btn = document.getElementById('runbtntsk');
  btn.textContent = 'Using it on mobiles';
  btn.onclick = function() {
    window.open('https://novaos.gitbook.io/main/get-started/access-novaos#installing-novaos-as-an-app-in-chrome');
  };
}
