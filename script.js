
function openTab(id) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  event.currentTarget.classList.add('active');
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
