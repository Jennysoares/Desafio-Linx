
function loadJSON(url) {
    fetch(url)
    .then(res => res.json())
    .then((jsonProducts) => {
        let productsArea = document.getElementById('productsAll');
        let grid = ''
        
        for(let i = 0; i< jsonProducts.products.length; i++){
            let image = jsonProducts.products[i].image.replaceAll("//","https://");
            grid += '<div class="row products-item" >'
            grid += '<div class="col">'
            grid += '<img className="default-img" src="' + image +'" alt=""/>';
            grid += '</div>'

            grid += '<div class="col">'
            grid += ' <h5 id="nome_produto">'+ jsonProducts.products[i].name +'</h5>';
            grid += ' <p id="preco_de"> De: R$'+ jsonProducts.products[i].oldPrice.toFixed(2) +'</p>';
            grid += ' <h6 id="preco_por">Por:'+ jsonProducts.products[i].price.toFixed(2) +'</h6>';
            grid += ' <p id="parcelar">ou '+ jsonProducts.products[i].installments.count +'x de R$'+ jsonProducts.products[i].installments.value+'</p>';
            grid += '  <button type="submit">Comprar</button>';
            grid += '</div>'
            
            grid += '</div>'
        }
        document.getElementById("urlNextPage").value = jsonProducts.nextPage;
       
        return productsArea.innerHTML += grid;
    }).catch(err => console.error(err));
}

function getOtherProducts(){
    let path = "https://"
    path += document.getElementById('urlNextPage').value
    loadJSON(path)

}

