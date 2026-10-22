const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

document.querySelector('#copy-contact').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('@englucianodev');
    status.textContent = 'Usuário copiado! Até lá no Instagram.';
  } catch {
    status.textContent = 'Meu usuário: @englucianodev';
  }
});
