    let arrai = document.getElementById('arrai')
    let flist = document.getElementById('flista')
    let valores = []
    let res = document.getElementById('res')



    function recebe(){ 

            if(isNumber(arrai.value) && !inLista(arrai.value, valores) ) {
                valores.push(Number(arrai.value))
                let item = document.createElement('option')
                item.text = `Seu Elemento adicionado é ${arrai.value}`
                flist.appendChild(item)
                res.innerHTML = ''
            }  else {
                alert('Número invalido ou já encontrado em lista')
            }
            arrai.value = ''
            arrai.focus()
            
        }
    


        
        function isNumber(n){
            if(Number(n) >= 1 && Number(n) <= 100) {
                return true
            }else{
                return false
            }
        }

        function inLista(n,l) {
            if(l.indexOf(Number(n)) != -1){
                return true
            }else{
                return false
            }
        }

       function finalizar(){
        if(valores.length == 0){
            alert('adicione um número antes de finalizar')
        }else{
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0 
            let media = 0
            let total = valores.length
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior){
                    maior = valores[pos]
                }if(valores[pos] < menor){
                    menor = valores[pos]
                }
                   media =  soma/total
                
            }
            res.innerHTML = ''
            res.innerHTML += `seu total de elementos é ${total} </br></br>`
            res.innerHTML += `o maior valor encontrado foi ${maior} </br></br>`
            res.innerHTML += `o menor valor encontrado foi ${menor} </br></br>`
            res.innerHTML += `a soma dos valores encontrados foi ${soma} </br></br>`
            res.innerHTML += `a media dos valores foi ${media} </br></br>`
            
        }
        
       }
