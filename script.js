let isLoggedIn = false;
let currentBalance = 45.50;

function switchPage(pageId, element) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  document.getElementById(pageId).classList.add('active');
  if (element) element.classList.add('active');
}

function handleLogin(event) {
  event.preventDefault();
  const cpf = document.getElementById('cpf').value;
  
  if (cpf) {
    isLoggedIn = true;
    document.getElementById('userNameDisplay').innerText = 'Usuário Conectado';
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('dashboardView').style.display = 'grid';
  }
}

function selectPreset(value, button) {
  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  document.getElementById('rechargeValue').value = value;
}

function handleRecharge(event) {
  event.preventDefault();
  const rechargeInput = document.getElementById('rechargeValue');
  const amount = parseFloat(rechargeInput.value);

  if (amount && amount > 0) {
    currentBalance += amount;
    document.getElementById('cardBalance').innerText = `R$ ${currentBalance.toFixed(2).replace('.', ',')}`;
    
    const alert = document.getElementById('successAlert');
    alert.style.display = 'block';
    rechargeInput.value = '';
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected'));

    setTimeout(() => {
      alert.style.display = 'none';
    }, 4000);
  }
}