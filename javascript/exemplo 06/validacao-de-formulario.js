    //Declarando a função
    function VerificaForm(frm){
        //nome 
        if(frm.nome.value == ''){
            alert('Campo obrigatório');
            frm.nome.focus();
            return false;
        }
        //email
        if(frm.email.value == ''){
            alert('Campo obrigatório');
            frm.email.focus();
            return false;
        }
        //selecionar opção
        if(frm.sexo[0].checked == false &&
            frm.sexo[1].checked == false){
                alert ('Selecione o sexo');
            return false;
            }

        //selecionar opção
        if(frm.soft1.checked == false &&
            frm.soft2.checked == false &&
            frm.soft3.checked == false){
            alert('Selecione pelo menos um software');
            return false;
            }
            
        //selecionar opção.
        if(frm.navegador.value == 'Selecione'){
            alert('Selecione um navegador');
            frm.navegador.focus();
            return false;
        }
        //comentario
        if(frm.comentario.value == ''){
        alert('Campo obrigatorio');
        frm.comentario.focus();
        return false;
         }
         return true;
         }
