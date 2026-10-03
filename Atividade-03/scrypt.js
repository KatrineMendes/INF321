const cardsProdutos = document.querySelectorAll('.produto-card');
const campoBusca = document.querySelector('#campo-busca');
const mensagemBusca = document.querySelector('#mensagem-busca');
const mensagemCarrinho = document.querySelector('#mensagem-carrinho');
const contadorCarrinho = document.querySelector('#contador-carrinho');
const listaCarrinho = document.querySelector('#lista-carrinho');
const carrinhoVazio = document.querySelector('#carrinho-vazio');
const carrinho = [];
let proximoId = 1;

function atualizarCarrinho() {
  contadorCarrinho.textContent = carrinho.length;
  carrinhoVazio.hidden = carrinho.length > 0;
  listaCarrinho.innerHTML = '';

  carrinho.forEach((item) => {
    const linha = document.createElement('li');
    linha.className = 'item-carrinho';
    const nome = document.createElement('span');
    nome.textContent = item.nome;
    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'remover-item';
    botaoRemover.type = 'button';
    botaoRemover.dataset.id = item.id;
    botaoRemover.textContent = 'Remover';
    linha.append(nome, botaoRemover);
    listaCarrinho.appendChild(linha);
  });
}

function filtrarProdutos() {
  const termo = campoBusca.value.trim().toLowerCase();
  let encontrados = 0;

  cardsProdutos.forEach((card) => {
    const nomeProduto = card.querySelector('h3').textContent.toLowerCase();
    const corresponde = nomeProduto.includes(termo);
    card.classList.toggle('oculto', !corresponde);
    if (corresponde) encontrados += 1;
  });

  mensagemBusca.textContent = termo
    ? `${encontrados} produto(s) encontrado(s).`
    : '';
}

document.querySelector('#botao-buscar').addEventListener('click', filtrarProdutos);
campoBusca.addEventListener('input', filtrarProdutos);

document.querySelectorAll('.comprar').forEach((botao) => {
  botao.addEventListener('click', () => {
    const nomeProduto = botao.closest('.produto-card').querySelector('h3').textContent;
    carrinho.push({ id: proximoId, nome: nomeProduto });
    proximoId += 1;
    atualizarCarrinho();
    mensagemCarrinho.textContent = `${nomeProduto} adicionado ao carrinho!`;
    mensagemCarrinho.hidden = false;
  });
});

listaCarrinho.addEventListener('click', (evento) => {
  const botaoRemover = evento.target.closest('.remover-item');
  if (!botaoRemover) return;

  const indice = carrinho.findIndex((item) => item.id === Number(botaoRemover.dataset.id));
  const [itemRemovido] = carrinho.splice(indice, 1);
  atualizarCarrinho();
  mensagemCarrinho.textContent = `${itemRemovido.nome} removido do carrinho.`;
  mensagemCarrinho.hidden = false;
});

const formulario = document.querySelector('#formulario-contato');
const retornoFormulario = document.querySelector('#retorno-formulario');

function mostrarErro(campo, texto) {
  const grupo = campo.closest('.campo');
  grupo.classList.add('invalido');
  let erro = grupo.querySelector('.erro-campo');
  if (!erro) {
    erro = document.createElement('p');
    erro.className = 'erro-campo';
    grupo.appendChild(erro);
  }
  erro.textContent = texto;
}

function limparErro(campo) {
  const grupo = campo.closest('.campo');
  grupo.classList.remove('invalido');
  grupo.querySelector('.erro-campo')?.remove();
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let valido = true;
  const camposObrigatorios = formulario.querySelectorAll('[required]');

  camposObrigatorios.forEach((campo) => {
    limparErro(campo);
    if (!campo.value.trim()) {
      mostrarErro(campo, 'Este campo é obrigatório.');
      valido = false;
    } else if (campo.type === 'email' && !campo.validity.valid) {
      mostrarErro(campo, 'Informe um e-mail válido.');
      valido = false;
    }
  });

  if (!valido) {
    retornoFormulario.textContent = 'Preencha os campos obrigatórios para enviar.';
    retornoFormulario.style.color = '#b91c1c';
    return;
  }

  retornoFormulario.textContent = 'Mensagem enviada com sucesso!';
  retornoFormulario.style.color = '#087b39';
  formulario.reset();
});
