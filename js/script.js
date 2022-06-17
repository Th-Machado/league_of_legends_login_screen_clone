/*
1- Criando a constante inputs para selecionar atravaés do queriSelectorAll todos os seletores de mesma classe

2- criando a constande handleFocus para selecionar o span, irmão anterior da classe input(que é o target)

3- adicionando o evento de focus para ativar o span-active nos spans do input selecionado 

4- adicionando o evento focus out na constande handleFocusOut para retirar o evento caso não haja nada escrito no input

5- adicionando a constante button e a constante handleChange para desabilitar e habilitar o botão de login de acordo com os Inputs
*/ 

const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 8) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    } 
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

