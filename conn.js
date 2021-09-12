async function requestCategoriesMegamenu() {
    const response = await fetch(
        "https://devscripta.com.br/wp-json/wp/v2/category-mega-menu",
        {
            mode: "cors",
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    const body = await response.json();
    return body;
}

async function requestSubCategoriesMegamenu(idTaxonomy) {
    const response = await fetch(
        `https://devscripta.com.br/wp-json/wp/v2/mega-menu?category-mega-menu=${idTaxonomy}`,
        {
            mode: "cors",
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    const body = await response.json();
    return body;
}

// async function teste() {
//     let resposta = await requestSubCategoriesMegamenu(35);
//     resposta.forEach(async (resposta) => {
//         console.log(`title: ${resposta.title.rendered}`);
//         console.log(`img: ${resposta.imagem_de_destaque.guid}`);
//         console.log(`subItems: ${resposta._subcategory_data.length}`);
//         console.log(Array.isArray(resposta._subcategory_data));
//         if (!Array.isArray(resposta._subcategory_data)) {
//             let arr = [];
//             for (let a in resposta._subcategory_data) {
//                 let val = Object.entries(resposta._subcategory_data[a]);
//                 arr.push(val);
//             }
//             console.log(`new array length: ${arr.length}`);
// 			// arr.forEach(([key, value]) => {
				
// 			// 	console.log(key); 
// 			// 	console.log(value); 
// 			// 	console.log(arr);
// 			//   });
			
//             // console.log(`new array: ${arr}`);
			
//         }
//     });
// }

// teste();
