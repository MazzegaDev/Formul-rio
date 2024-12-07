function EnviarForm(){
    //nome
    let NomeDev = document.getElementById('NomeDev').value;
    let inputND = document.getElementById('NomeDev');
    let erroNomeDev = document.getElementById('erro-nome');
    let valido = true;

    //validação do nome
    if(NomeDev.trim()== '' || NomeDev.length <5){
        inputND.focus();

        erroNomeDev.style.display = 'flex';
        
        erroNomeDev.innerText = 'Seu nome deve ter no minimo 5 caracteres';

        valido = false;
    }
    else{
        erroNomeDev.style.display = 'none'; 
    }
    
    //sobrenome
    let SBRnome = document.getElementById('SobrenomeDev').value;
    let inputSBR = document.getElementById('SobrenomeDev');
    let erroSBR = document.getElementById('erro-sbr');

    //validação do sobrenome
    if(SBRnome.trim()== '' || SBRnome.length < 5){
        inputSBR.focus();

        erroSBR.style.display = 'flex';

        erroSBR.innerText = 'Seu sobrenome deve ter no minimo 5 caracteres';

        valido = false;
    }
    else{
        erroSBR.style.display = 'none'; 
    }

    //email
    let EmailDev = document.getElementById('EmailDev').value;
    let inputEmailDev = document.getElementById('EmailDev');
    let erroEmail1 = document.getElementById('erro-email1');
    

    //validação do email
    if(!EmailDev.includes('@') || !EmailDev.includes('.') || EmailDev.trim() == ''){
        inputEmailDev.focus();

        erroEmail1.style.display = 'flex';

        erroEmail1.innerText = 'Seu email deve deve incluir um @ e um .';

        valido = false;
    }
    else{
        erroEmail1.style.display = 'none'; 
    }

    //check box
    let check = document.getElementsByName('tec');
    let erroCheck = document.getElementById('erro-check');
    let estaChek = false;

    //validação checkBox
    for(let i=0; i<check.length; i++){
        if(check[i].checked){
            estaChek = true;
        }
    }

    //verifica se esta marcado

    if(estaChek == false){
        erroCheck.style.display = 'flex';

        erroCheck.innerText = 'Pelo menos uma opção deve estar marcada';

        valido = false;
    }else{
        erroCheck.style.display = 'none';
    }

    //radio
    let area = document.getElementsByName('area');
    let erroRadio = document.getElementById('erro-radio');
    let checkRadio = false;

    //validação do radio
    for(let i =0; i<area.length; i++){
        if(area[i].checked){
            checkRadio = true;
        }
    }
    
    if(checkRadio == false){
        erroRadio.style.display = 'flex';

        erroRadio.innerText = 'você deve marcar uma opção';

        valido = false;
    }else{
        erroRadio.style.display = 'none';
    }

    if(valido){
        alert('Seu formulario foi enviado!, obrigado')
    }

}
