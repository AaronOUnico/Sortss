function ordenaSelect(ranj) {
    let n = ranj.length
    let comp = 0
    let tro = 0

    
    let caixa = 0
    let minN
    for(let i = 0; i < n - 1; i++) {
        let minIndx = i;
        for(let j = i + 1; j < n; j++) {
            comp += 1
            if(ranj[minIndx] > ranj[j]) {
                minN = ranj[j]
                minIndx = j
                tro += 1

            }
        
        }
        caixa = ranj[i]
        ranj[i] = minN
        ranj[minIndx] = caixa 
    }
    console.log("");
    console.log("Ordenado:");
    console.log(ranj);
    console.log("");
    console.log("Comparações:", comp);
    console.log("Trocas:", tro);
}
console.log("Selection Sort");
console.log("");
console.log("Desordenado:")
console.log(arranjo);
ordenaSelect(arranjo);

let arranjo = [8, 3, 5, 1, 9, 6, 2, 7, 4]
function ordenaBolha(arra){
    let n = arra.length
    let caixa = 0
    let comparacoes = 0
    let trocas = 0
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            comparacoes += 1
            if (arra[j] > arra[j+1]){
                caixa = arra[j]
                arra[j] = arra[j + 1]
                arra[j + 1] = caixa
                trocas += 1
            }
        }
    }
    console.log("");
    console.log("Ordenado:");
    console.log(arra);
    console.log("");
    console.log("Comparações:", comparacoes);
    console.log("Trocas:", trocas);

}
console.log("Bubble Sort");
console.log("");
console.log("Desordenado:")
console.log(arranjo);
ordenaBolha([...arranjo]);

let arranjo = [8, 3, 5, 1, 9, 6, 2, 7, 4]

function ordenaInsert(params) {
    let n = params.length;

    let chave = 0
    
    for(let i = 1; i < n - 1; i++) {
        chave = params[i];
        let j = i -1
        while(j >= 0 && params[j] > chave) {
            params[j + 1] = params[j];
            j--;
        }
        params[j + 1] = chave;
    }
    console.log("");
    console.log("Ordenado:");
    console.log(params);
    console.log("");
}
console.log("Insertion Sort");
console.log("");
console.log("Desordenado:")
console.log(arranjo);
ordenaInsert(arranjo);