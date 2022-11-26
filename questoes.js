function questao1() {
  let num1 = document.getElementById('input1').value
  let num2 = document.getElementById('input2').value
  let num3 = document.getElementById('input3').value
  let media = (Number(num1) + Number(num2) + Number(num3)) / 3
  document.getElementById('resposta1').innerHTML = 'A media dos números é: '+ media;
}

function questao2(){
  let quadlado = document.getElementById('inputquad').value
  let area = quadlado*quadlado
  let perimetro = quadlado*4
  document.getElementById('resposta2').innerHTML = 'Área: '+ area;
  document.getElementById('resposta3').innerHTML = ' Perimetro: '+ perimetro;
}

function questao3(){
  let numero = document.getElementById('inputnumero').value
  let dobro = numero * 2
  let triplo = numero * 3
  let quadrado = numero*numero
  let raiz = Math.sqrt(numero)
  document.getElementById('resposta4').innerHTML = 'Dobro: '+ dobro
  document.getElementById('resposta5').innerHTML = 'Triplo: '+ triplo
  document.getElementById('resposta6').innerHTML = 'Quadrado: '+ quadrado
  document.getElementById('resposta7').innerHTML = 'Raiz quadrada: '+ raiz
  
}

function questao4(){
  let raio = document.getElementById('inputraio').value
  let area = raio * raio * Math.PI
  let comprimento = raio * Math.PI * 2
  document.getElementById('resposta8').innerHTML = 'Área: '+ area
  document.getElementById('resposta9').innerHTML = 'Comprimento: '+ comprimento
  
}

function questao5(){
  let altura = document.getElementById('inputaltura').value
  let base = document.getElementById('inputbase').value
  let area = (base*altura)/2
  document.getElementById('resposta10').innerHTML = 'Área: '+ area
  
}

function questao6(){
  let temperatura = document.getElementById('inputtemperatura').value
  let tempkelvin = Number(temperatura) + 273
  let tempfareh = ((temperatura/5)*9) + 32
  document.getElementById('resposta11').innerHTML = 'Kelvin: '+ tempkelvin
  document.getElementById('resposta12').innerHTML = 'fahrenheit: '+ tempfareh
}

function questao7(){
  let cat1 = document.getElementById('inputcateto1').value
  let cat2 = document.getElementById('inputcateto2').value
  let hip = Math.sqrt((cat1*cat1) + (cat2*cat2))
  document.getElementById('resposta13').innerHTML = 'Hipotenusa: '+ hip
}

function questao8(){
  let pol = document.getElementById('inputpol').value
  let valorcm = (pol * 2.54)
  document.getElementById('resposta14').innerHTML = 'Valor em centimetros: '+ valorcm
}

function questao9(){
  let palavra = document.getElementById('inputp').value
  let tam = palavra.length
  document.getElementById('resposta15').innerHTML = 'O comprimento dessa palalavra é: '+ tam
}

function questao10(){
  let metro = document.getElementById('inputmetro').value
  let quil = metro/1000
  let hec = metro/100
  let deca = metro/10
  let cent = metro*100
  let decim = metro*10
  let mili = metro*1000
  document.getElementById('resposta16').innerHTML = 'Quilometros: '+ quil
  document.getElementById('resposta17').innerHTML = 'hectômetros: '+ hec
  document.getElementById('resposta18').innerHTML = 'Decâmetros: '+ deca
  document.getElementById('resposta19').innerHTML = 'Centímetros: '+ cent
  document.getElementById('resposta20').innerHTML = 'Decímetros: '+ decim
  document.getElementById('resposta21').innerHTML = 'Milímetros: '+ mili
}

function questao11(){
  let num = document.getElementById('inputnum').value
  if ((num % 2) == 0){
    document.getElementById('resposta22').innerHTML = 'O numero '+num+' é par'
  } else{
    document.getElementById('resposta22').innerHTML = 'O numero '+num+' é ímpar'
  }
}

function questao12(){
  let num1 = document.getElementById('inputnumero1').value
  let num2 = document.getElementById('inputnumero2').value
  if ((num1%num2) == 0){
    document.getElementById('resposta23').innerHTML = 'O numero '+num1+' é multiplo de '+num2
  }else{
    document.getElementById('resposta23').innerHTML = 'O numero '+num1+' não é multiplo de '+num2
  }
}

function questao13(){
  let num = document.getElementById('inputnumint').value
  if (num < 0){
    document.getElementById('resposta24').innerHTML = 'O numero é negativo'
  } else if (num == 0){
    document.getElementById('resposta24').innerHTML = 'O numero é neutro'
  } else{
    document.getElementById('resposta24').innerHTML = 'O numero é positivo'
  }
}

function questao14(){
  let idade = document.getElementById('inputidade').value
  if (idade <= 12){
    document.getElementById('resposta25').innerHTML = 'Criança'
  } else if (idade >12 && idade <= 17){
    document.getElementById('resposta25').innerHTML = 'Adolescente'
  } else if (idade >=18 && idade <=59){
    document.getElementById('resposta25').innerHTML = 'Adulto'
  } else{
    document.getElementById('resposta25').innerHTML = 'Idoso'
  } 
}

function questao15(){
  let lado1 = document.getElementById('inputlado1').value
  let lado2 = document.getElementById('inputlado2').value
  let lado3 = document.getElementById('inputlado3').value
  if (lado1 == lado2 == lado3){
    document.getElementById('resposta26').innerHTML = 'Esse triângulo é equilátero'
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    document.getElementById('resposta26').innerHTML = 'Esse triângulo é isósceles'
  } else{
    document.getElementById('resposta26').innerHTML = 'Esse triângulo é escaleno'
  }  
}

function questao16(){
  let numero1 = document.getElementById('qnumero1').value
  let numero2 = document.getElementById('qnumero2').value
  let numero3 = document.getElementById('qnumero3').value
  let maiorvalor = Math.max(numero1, numero2, numero3)
  document.getElementById('resposta27').innerHTML = 'O maior valor é: '+ maiorvalor
}

function questao17(){
  let numero1 = document.getElementById('q17numero1').value
  let numero2 = document.getElementById('q17numero2').value
  let numero3 = document.getElementById('q17numero3').value
  let maiorvalor = Math.max(numero1, numero2, numero3)
  let menorvalor = Math.min(numero1, numero2, numero3)
  document.getElementById('resposta28').innerHTML = 'O maior valor é: '+ maiorvalor
  document.getElementById('resposta29').innerHTML = 'O menor valor é: '+ menorvalor
}

function questao18(){
  let numero1 = document.getElementById('q18numero1').value
  let numero2 = document.getElementById('q18numero2').value
  let numero3 = document.getElementById('q18numero3').value
  let maiorvalor = Math.max(numero1, numero2, numero3)
  let menorvalor = Math.min(numero1, numero2, numero3)
  if (numero1 != maiorvalor && numero1 != menorvalor){
    document.getElementById('resposta30').innerHTML = 'O valor médio é: '+numero1
  } else if (numero2 != maiorvalor && numero2 != menorvalor){
    document.getElementById('resposta30').innerHTML = 'O valor médio é: '+numero2
  } else if (numero3 != maiorvalor && numero3 != menorvalor){
    document.getElementById('resposta30').innerHTML = 'O valor médio é: '+numero3
  }
}

function questao19(){
  let num1 = document.getElementById('q19numero1').value
  let num2 = document.getElementById('q19numero2').value
  let operador = document.getElementById('q19operador').value
  if (operador == '+'){
    let soma = Number(num1) + Number(num2)
    document.getElementById('resposta31').innerHTML = num1 +' + '+num2+' = '+soma
  } else if (operador == '-'){
    let sub = Number(num1) - Number(num2)
    document.getElementById('resposta31').innerHTML = num1 +' - '+num2+' = '+sub
  } else if (operador == '*'){
    let mult = Number(num1) * Number(num2)
    document.getElementById('resposta31').innerHTML = num1 +' * '+num2+' = '+mult
  } else if (operador == '/'){
    let div = Number(num1) / Number(num2)
    document.getElementById('resposta31').innerHTML = num1 +' / '+num2+' = '+div
  } 
}

function questao20(){
  let mes = document.getElementById('q20nummes').value
  if (mes <=3){
    document.getElementById('resposta32').innerHTML = 'O mês '+mes+' encontra-se no 1° trimestre'
  } else if (mes >3 && mes <=6){
    document.getElementById('resposta32').innerHTML = 'O mês '+mes+' encontra-se no 2° trimestre'
  } else if (mes >6 && mes <=9){
    document.getElementById('resposta32').innerHTML = 'O mês '+mes+' encontra-se no 3° trimestre'
  } else if (mes >9 && mes <=12){
    document.getElementById('resposta32').innerHTML = 'O mês '+mes+' encontra-se no 4° trimestre'
  } else{
    document.getElementById('resposta32').innerHTML = 'Digite um mês valido!'
  }
}
