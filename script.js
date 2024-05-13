const btn_add_tecnologia = document.getElementsById('addTech')
const formulario = document.getElementById('form')
const btn_cadastro = document.getElementById('cadastrar')

let contador = 0

formulario.addEventListener('submit', (ev) =>{
    ev.preventDefault()

})

btn_add_tecnologia.addEventListener('click', (ev) => {
    ev.preventDefault()

    contador++

    const area_cadastro = document.getElementById('area_cadastro')

    const remove_cadastro = createElement('div')
    remove_cadastro.id = 'remove_cadastro'

    const area_tecnologia = createElement('div')
    area_tecnologia.id = 'area_tecnologia'

    const lblTecnologia = document.createElement('label')
    lblTecnologia.innerText = 'Nome da Tecnologia: '
    lblTecnologia.setAttribute('for','tecnologia')

    const txtTecnologia = document.createElement('input')
    txtTecnologia.type = 'text'
    txtTecnologia.name = 'tecnologia'
    txtTecnologia.id = 'tecnologia'
    txtTecnologia.placeholder = 'Insira o nome da tecnologia'
    txtTecnologia.className = 'txtTecnologia'

    const lblExp = document.createElement('label')
    lblExp.innerText = 'Tempo de Experiência:'
    lblExp.setAttribute('for','exp' + contador) 

    const radioTime1 = document.createElement('input')
    radioTime1.type = 'radio'
    radioTime1.name = 'input_time' + contador
    radioTime1.id ='radioTime1-' + contador
    radioTime1.value = '0-2 anos'
    radioTime1.className = contador

    const lblTime1 = document.createElement('label')
    lblTime1.innerText = '0-2 anos'
    lblTime1.setAttribute('for', 'radioTime1-' + contador)

    const radioTime2 = document.createElement('input')
    radioTime2.type = 'radio'
    radioTime2.name = 'input_time' + contador
    radioTime2.id ='radioTime2-' + contador
    radioTime2.value = '3-4 anos'
    radioTime2.className = contador

    const lblTime2 = document.createElement('label')
    lblTime2.innerText = '3-4 anos'
    lblTime2.setAttribute('for', 'radioTime2-' + contador)

    const radioTime3 = document.createElement('input')
    radioTime3.type = 'radio'
    radioTime3.name = 'input_time' + contador
    radioTime3.id ='radioTime3-' + contador
    radioTime3.value = '5+ anos'
    radioTime3.className = contador

    const lblTime3 = document.createElement('label')
    lblTime3.innerText = '5+ anos'
    lblTime3.setAttribute('for', 'radioTime3-' + contador)

    const btnRemove = document.createElement('button')
    btnRemove.innerText = 'Remover Tecnologia'
    btnRemove.id = 'btnRemove'

    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')

    remove_cadastro.appendChild(btnRemove)
    area_tecnologia.append(lblTecnologia,br,txtTecnologia,br1,lblExp,br2,radioTime1,lblTime1,br4,radioTime2,lblTime2,br5,radioTime3,lblTime3,br3,remove_cadastro)
    area_cadastro.appendChild(area_tecnologia)
    formulario.appendChild(area_cadastro)

    // Adição de um evento de "Click" ao botão de remover tecnologia

    btnRemove.addEventListener('click', (ev) =>{
        ev.preventDefault()
        area_cadastro.removeChild(area_tecnologia)
        // Alteração da varável para coletar os valores anteriores
        contador--
    })
    
})

btn_cadastro.addEventListener('click', (ev) =>{

    // Retomando as variáveis anteriores com outras variaveis a partir do ID

    const name = document.getElementById('name').value
    const nome_tecnologia = document.querySelectorAll(`input[id = 'tecnologia']`)
    const tempo_tecnologia = document.querySelectorAll(`input[type = 'radio']:checked`)

    // Verificar se foi ou não criado uma tecnologia e coletando as primeiras ocorrências

    if((name.length > 0) && (nome_tecnologia.length == 0) && tempo_tecnologia.length == 0){
        alert("Cadastro concluído!" +
            "\nApenas o nome do Dev foi inserido" +
            "\nNome do dev: " + name
        )
    }
    else if(name.length == 0 || nome_tecnologia.length == 0|| tempo_tecnologia.length == 0){
        alert("Algumas espaços não foram preenchidos, preencha os campos corretamente!")
    }
    else if(name.length > 0 && nome_tecnologia.length > 0 && tempo_tecnologia.length > 0){
        for(var i = 0; i < contador; i++ ){
            alert(
                "Cadastro concluido" +
                "\nNome do dev: " + name +
                "\nNome da tecnologia: " + nome_tecnologia[i].value +
                "\nTempo de uso das tecnologias: " + tempo_tecnologia[i].value
            )
        }}

})

// Adição de um Evento para coletar valores que estão dentro da tag Form
