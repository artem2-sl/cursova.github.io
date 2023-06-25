let parmetr_kartoshka = ["Солодка", "Жарена", "Кругла", "Жовта"];
let mishok =document.getElementById(`spisok`);

let kartoshka = "<h1>Яка є картошка:</h1>"; 
for(i=0; i<parmetr_kartoshka.length; i++){
    if(i%2==0){
kartoshka += `<h1>${i+1}.${parmetr_kartoshka[i]} картошка</h1>`
    }else{
        kartoshka += `<h1 class="red">${i+1}.${parmetr_kartoshka[i]} картошка</h1>`;
    }
}    
mishok.innerHTML = kartoshka;