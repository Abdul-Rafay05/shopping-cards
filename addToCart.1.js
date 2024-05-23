const { addtocardrecord } = require("./script");

function addToCart(id) {
    let item_name = document.getElementById(`item_name_${id}`).innerHTML;
    let item_id = document.getElementById(`item_id_${id}`).innerHTML;
    let item_price = document.getElementById(`item_price_${id}`).innerHTML;
    let item_quantity = document.getElementById(`item_quantity_${id}`);
    let image = document.getElementById(`item_imge_${id}`).innerHTML;
    addtocardrecord.push({
        id: item_id,
        name: item_name,
        qty: Number(item_quantity.value),
        price: Number(item_price),
        image: image
    });

    // console.log(addtocardrecord);
    // show display data
    let existing_display_items = document.getElementById("Display_data").innerHTML;

    for (let i = 0; i < addtocardrecord.length; i++) {
        document.getElementById("showaddtocardlength").innerHTML = addtocardrecord.length;
        let accessarray = addtocardrecord[i];
        let total_price = (accessarray.price * accessarray.qty);
        // console.log(`Price ${total_price} and total price ${accessarray.price}`);
        // console.log(`ID ${accessarray.id}, Name ${accessarray.name}, Price ${accessarray.price}, QTY ${accessarray.qty} and total price ${total_price}`);
        console.log(existing_display_items);
        let add_display_items = `
        <div class="row text-center fw-bold border border-secondary p-1">
        <div class="col-sm-1 ">${accessarray.id}</div>
        <div class="col-sm-3">${accessarray.name}</div>
        <div class="col-sm-1"><img src="${accessarray.image}" alt="" width="20px"></div>
        <div class="col-sm-2">${accessarray.price}</div>
        <div class="col-sm-2">${accessarray.qty}</div>
        <div class="col-sm-2">${total_price}</div>
        </div>
        `;
        document.getElementById("Display_data").innerHTML = existing_display_items + add_display_items;
    }

}