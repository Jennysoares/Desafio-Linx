function validations() {
    let cpf = document.getElementById('cpf_contact').value;
    if (cpf.length == 11 && cpf != '00000000000' && cpf != '11111111111' && cpf != '22222222222' && cpf != '33333333333' && cpf != '44444444444' && cpf != '55555555555' && cpf != '66666666666' && cpf != '77777777777' && cpf != '88888888888' && cpf != '99999999999'){
        var validador = cpf[0]*10+ cpf[1]*9 + cpf[2]*8+ cpf[3]*7 + cpf[4]*6+ cpf[5]*5 + cpf[6]*4+ cpf[7]*3 + cpf[8]*2
		validador = 11 - (validador % 11)
        if (validador >= 10)
            validador = 0
        if (cpf[9] == validador){
            validador = cpf[0]*11+ cpf[1]*10 + cpf[2]*9+ cpf[3]*8 + cpf[4]*7+ cpf[5]*6 + cpf[6]*5+ cpf[7]*4 + cpf[8]*3 + cpf[9]*2
			validador = 11 - (validador % 11)
            if (validador >= 10)
                validador = 0
            if (cpf[10] == validador){
                return true
            }
        }
    }

    alert("CPF Inválido");
}

