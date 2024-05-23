// overall items available here

// let categories = [{
//         "forwheel": {
//             bus: {
//                 no: 15,
//                 seats: 20
//             },
//             car: {
//                 no: 15,
//                 seats: 20
//             },
//         },
//     },
//     {
//         "twoWheel": {
//             bike: {
//                 no: 15,
//                 seats: 20
//             },
//             cycle: {
//                 no: 15,
//                 seats: 20
//             },
//         },
//     },
// ]

// for (let j = 0; j < items.length; j++) {
//     const element = items[j];
//     console.log(element.price, element.item_name, 'items');
// }


let available_items = [{
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
        id: 1,
        item_name: "Glasses",
        price: 150
    },
    {
        image: "https://img.freepik.com/free-vector/ballpoint-pen-school-stationary_78370-631.jpg",
        id: 2,
        item_name: "Pen",
        price: 250
    },
    {
        image: "https://jafferjees.com/pub/media/catalog/product/cache/a48c8929b81a0e4b26febc3fa3511cd7/6/2/6209020101_2_1.jpg",
        id: 3,
        item_name: "Notebook",
        price: 60
    },

    {
        image: "https://assets.ajio.com/medias/sys_master/root/h17/h3c/13209430065182/-473Wx593H-460386653-brown-MODEL.jpg",
        id: 4,
        item_name: "Belt",
        price: 120
    },
    {
        image: "https://thumbs.dreamstime.com/b/open-book-isolated-white-16094903.jpg",
        id: 5,
        item_name: "Book",
        price: 45
    },

    {
        image: "https://www.ndure.com/cdn/shop/products/M-BF-STP-0002-TAN.jpg?v=1664362573",
        id: 6,
        item_name: "Shoes",
        price: 300
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Milka_Alpine_Milk_Chocolate_bar_100g_with_chunks_broken_off.jpg/640px-Milka_Alpine_Milk_Chocolate_bar_100g_with_chunks_broken_off.jpg",
        id: 7,
        item_name: "Chocolate",
        price: 20
    },

    {
        image: "https://flairworld.pk/cdn/shop/products/1_2006b67d-7e82-49a4-9dfa-3e7c387f29a3.jpg?v=1680258009",
        id: 8,
        item_name: "Bag",
        price: 250
    },

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rdpdFS8QWh6iWvyGP-W0mliwihKRspANxS5NyOWSMQ&s",
        id: 9,
        item_name: "Hat",
        price: 75
    },

    {
        image: "https://images.priceoye.pk/zero-terra-fit-smart-watch-pakistan-priceoye-hnbz2.jpg",
        id: 10,
        item_name: "Watch",
        price: 210
    }, {
        image: "https://static-01.daraz.pk/p/cef2ac50080a731f269baf4085df2875.jpg_750x750.jpg_.webp",
        id: 11,
        item_name: "Stapler",
        price: 300
    },
    {
        image: "https://img.ws.mms.shopee.ph/0099f2ef7e74c0fdb3189e9109912915",
        id: 12,
        item_name: "Binder",
        price: 200
    }
];


// let show_item_container = document.getElementById('show_item_container').innerHTML;
let access_display_div =
    // console.log(access_display_div);
    available_items.forEach(element => {
        let div = document.createElement("div")
        div.classList.add("show_item_div");
        document.getElementById("show-product-card").appendChild(div);
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img id="item_imge_${element.id}" src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>Name: <span id="item_name_${element.id}"> ${element.item_name}</span></h5>
                    <p>ID: <span id="item_id_${element.id}">${element.id}</span></p>
                    <p>Price <span id="item_price_${element.id}">${element.price}</span></p>
                    <p class="Qty">Qty: &nbsp; <span >  
                        <input type="text" required minlength="1" maxlength="2" size="1" placeholder="QTY" class="input_box" id="item_quantity_${element.id}" 
                        class="inputbox_${element.id}">
                    </span></p>
                    <button type="submit" class="btn btn-primary mt-1  Add_to_card_button_${element.id} id="Add_to_card_button" onClick="addToCart(${element.id})">Add to Card</button>
                    </div>
                </div>
`
            // console.log(element.id);
    });



// create array for add to card
let addtocardrecord = [];

function addToCart(id) {
    let item_name = document.getElementById(`item_name_${id}`).innerHTML;
    let item_id = document.getElementById(`item_id_${id}`).innerHTML;
    let item_price = document.getElementById(`item_price_${id}`).innerHTML;
    let item_quantity = document.getElementById(`item_quantity_${id}`);
    let image = document.getElementById(`item_imge_${id}`).innerHTML;
    if (item_quantity.value == "") {
        alert("Please Enter Your Quantity")
    } else {
        addtocardrecord.push({
            id: item_id,
            name: item_name,
            qty: Number(item_quantity.value),
            price: Number(item_price),
            image: image

        });
    }
    // console.log(addtocardrecord);

    // show display data
    let existing_display_items = document.querySelector("#Display_data").innerHTML;
    // console.log(existing_display_items);
    let total_overall_bill = 0;

    for (let i = 0; i < addtocardrecord.length; i++) {
        document.getElementById("showaddtocardlength").innerHTML = addtocardrecord.length;
        let accessarray = addtocardrecord[i]
        let total_price = (accessarray.price * accessarray.qty)
        let add_display_items = `
        <div class="row bg-white text-center fw-bold border border-secondary p-2">
        <div class="col-sm-1 col-1 border-end">${accessarray.id}</div>
        <div class="col-sm-3 col-3 border-end">${accessarray.name}</div>
        <div class="col-sm-2 col-2 border-end">${accessarray.price}</div>
        <div class="col-sm-2 col-2 border-end">${accessarray.qty}</div>
        <div class="col-sm-4 col-2">${total_price}</div>
        </div>`
        document.querySelector("#Display_data").innerHTML = existing_display_items + add_display_items;
        total_overall_bill += total_price;

        document.querySelector(".total_price").innerHTML = `Rs. ${total_overall_bill} /-`;
    }
}

let count = 0;

function Add_to_card_btn() {
    if (count == "0") {
        count = 1;
        document.getElementById("display_none").classList.toggle("my_display_style");
        document.getElementById("display_hidden").classList.toggle("my_show_bill_display");
        document.getElementById("footer-hidden").classList.toggle("footer_display")
            // console.log(count);  
    } else {
        count = 0;
        document.getElementById("display_none").classList.toggle("my_display_style");
        document.getElementById("display_hidden").classList.toggle("my_show_bill_display");
        document.getElementById("footer-hidden").classList.toggle("footer_display")
            // console.log(count);
    }

}

// add event on all buttons
// let alladdtocardbutton = document.getElementsByClassName(`Add_to_card_button`);
// Array.from(alladdtocardbutton).forEach(button => {
//     console.log(button);
//     button.addEventListener('click', () => {
//         let item_name = document.querySelector(".item_name").innerHTML;
//         let item_id = document.querySelector(".item_id").innerHTML;
//         let item_price = document.querySelector(".item_price").innerHTML;
//         let item_quantity = document.querySelector(".inputbox");
//         addtocard.push({
//             Items: {
//                 id: item_id,
//                 name: item_name,
//                 qty: Number(item_quantity.value),
//                 price: Number(item_price)
//             }
//         })
//         console.log(addtocard);
//     });
// });












// addtocard.push("heafra")

// for (let i = 0; i < available_items.length; i++) {


//     let div = document.createElement("div")
//     div.classList.add("show_item_div");
//     document.getElementById("show-product-card").appendChild(div);
//     // console.log(element.item.price * element.item.quantity);
//     let element = available_items[i];
//     div.innerHTML = `
//             <div class="card" style="width: 18rem;">
//                 <img src="${element.item.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Name: ${element.item.item_name}</h5>
//                     <p class="card-text">ID: ${element.id}</p>
//                     <p class="card-text">Price: ${element.item.price}</p>
//                     <p class="card-text">Qty: ${element.item.quantity}</p>
//                     <a href="#" class="btn btn-primary">Add to card</a>
//                 </div>
//             </div>

//     `

// }