//Yuri Goncalves
alert("!!Saida no console!!")
function Pilha() {
    this.pilha = [];
    this.insere = param => {
        if((isInt(param))) {
            let value = parseInt(param);
            this.pilha[this.pilha.length] = param;
        }
        else{
            console.log("Nao e permitido letras, insira um numero")
            return;
        }
    }
    this.remove = () => {
        if (this.pilha.length > 0) {
            //na ultima posicao remove o ultimo
            this.pilha.splice(this.pilha.length - 1, 1);
        }
        else {
            console.log("Pilha Vazia");
            return;
        }
    }
    this.menorElemento = () => {
        /* Primeiro codigo feito
        if (this.pilha.length > 0) {
            //ordena a pilha; ps: uma vez que o sort() ordena um array em ordem alfabética passo a condicao callback
            this.pilha.sort((a,b)=>a-b);
            //retorna menor valor
            return this.pilha[0];
        }*/

        //atualizacao
        return Math.min.apply(Math, this.pilha);
    }
}

//Verifica se é um numero
function isInt(value) {
    return !isNaN(parseInt(value));
}

let p = new Pilha();

p.insere("abc");

p.insere(8);
p.insere(2);
p.insere(9);
p.insere(30);
p.insere(-45);
p.insere(0);

console.log(p);

//remove o 0 "LIFO"
p.remove();

let menor = p.menorElemento();

console.log("Menor Elemento: ", menor);