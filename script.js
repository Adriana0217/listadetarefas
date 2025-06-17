const input = document.getElementById('novaTarefa');
const btn = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaTarefas');

btn.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;

  li.addEventListener('click', () => {
    li.classList.toggle('concluida');
  });

  const btnRemover = document.createElement('button');
  btnRemover.textContent = '❌';
  btnRemover.addEventListener('click', () => {
    lista.removeChild(li);
  });

  li.appendChild(btnRemover);
  lista.appendChild(li);
  input.value = '';
}
