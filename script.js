const tela = document.querySelector('#tela')
const teclas = document.querySelector('.teclas')
const tecla = teclas.querySelectorAll('.tecla')

for(let i = 0; i < tecla.length; i++){
    tecla[i].addEventListener('click', e => {
        let tec = e.target
        let valor = tec.dataset.action

        let val = tela.value + valor

        if(
            valor === '+' ||
            valor === '-' ||
            valor === '*' ||
            valor === '/'
        ){
            tela.value += ' '
        }
        if(valor === 'C'){
            val = ''
        }
        if(valor === '='){
            val = ''
            val = eval(tela.value)
        }
        tela.value = val
    })
}