const { addtocardrecord } = require("./script");

function addToCart(id) {
    let item_name = document.getElementById(`item_name_${id}`).innerHTML;
    let item_id = document.getElementById(`item_id_${id}`).innerHTML;
    let item_price = document.getElementById(`item_price_${id}`).innerHTML;
    let item_quantity = document.getElementById(`item_quantity_${id}`);
    addtocardrecord.push({
        id: item_id,
        name: item_name,
        qty: Number(item_quantity.value),
        price: Number(item_price)
    });

    console.log(addtocardrecord);
    for (let i = 0; i < addtocardrecord.length; i++) {
        document.getElementById("showaddtocardlength").innerHTML = addtocardrecord.length;
        let accessarray = addtocardrecord[i];
        let total_price = (accessarray.price * accessarray.qty);
        console.log(`Price ${total_price} and total price ${accessarray.price}`);

    }

}