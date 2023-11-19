function showTovars(){
    let tovari = document.getElementById('tovari');
    tovari.innerHTML = '';
    db.collection('alltovars').get().then(res=>{
        res.forEach(doc =>{
            let tovar = doc.data();
            tovar.id = doc.id;
            `
        <div class="tovari" id="tovari">
            <div class="tovar">
                <div class="tovar_img">
                    <img src="images/prodaja-kvartira-hmelnitskiy-tsentr-svobody-ulitsa__197138603fl.jpg" alt="" class="img">
                </div>
                <div class="tovar_opys">
                <p>${tovar.name}<br>
                <p>${tovar.type_standart}<br>
                    <div class="opys">

                    </div>
                </div>
            </div>
       </div>
        `
        })
    })
    
        
    }


