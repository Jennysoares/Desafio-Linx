function loadJSON(url) {
    fetch(url)
    .then(res => res.json())
    .then((jsonProducts) => {
        let productsArea = document.getElementById('productsAll');
        let grid = ''
        
        for(let i = 0; i< 2; i++){
            let image = jsonProducts.products[i].image.replaceAll("//","https://");
            grid += '<td align="center">'
            grid += '<div class="imagem-product">';
            grid += '<img className="default-img" src="' + image +'" alt=""/>';
            grid += '</div>';
            grid += '<div class="body-product">';
            grid += ' <h5 id="nome_produto">'+ jsonProducts.products[i].name +'</h5>';
            grid += ' <p id="descricao_produto">'+ jsonProducts.products[i].description +'</p>';
            grid += ' <p id="preco_de"> De: R$'+ jsonProducts.products[i].oldPrice.toFixed(2) +'</p>';
            grid += ' <h6 id="preco_por">Por:R$'+ jsonProducts.products[i].price.toFixed(2) +'</h6>';
            grid += ' <p id="parcelar">ou '+ jsonProducts.products[i].installments.count +'x de R$'+ jsonProducts.products[i].installments.value+'</p>';
            grid += '  <button type="submit">Comprar</button>';
            grid += '</div>';
            grid += '</td>';
        }
       
        return productsArea.innerHTML += grid;
    }).catch(err => console.error(err));
}

