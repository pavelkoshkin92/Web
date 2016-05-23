/*var list = [];
list.push("lemon");
list.push("orange");
list.push("gun");

console.log(list);

var extlist = [
    [
        "rice",
        "grechka"
    ],
    [
        "balalayka",
        "vodka",
            [
                "USD",
                "EUR",
                "UAH",
                "CHF"
            ]
    ]
];
console.log(extlist);
    */
/*var profile = {
        name: "Paul",
        age: 23,
        email: "***@**.ua"

};
console.log(profile.name);
*/

/*var structure = {
    name: "Paul",
    address: {
        street: "",
        city = "",
        country = ""
    },
    skills: [
                "testing",
                "reading",
                "debugging",
                "speaking"

            ],
     things:[
                {
                    color: "red",
                    price: 20,
                    name: "pants",
                    pockets: {
                        first: [
                                "gum",
                                "money"
                                ],
                        secret: [
                                "condoms"
                                 ]
                             }
                },
                {
                    color: "blue",
                    price: 300,
                    name: "hair"
                },
                {
                    color: "black",
                    price: 1,
                    name: "t-short"
                }

            ]
};
*/
/*var profile = {
    name: "max",
    address: {
        street: "",
        city: "",
        country: ""
    },
    skills: [
        "testing",
        "debuging",
        "reading",
        "speaking"
    ],
    things: [
        {
            color: "red",
            price: 20,
            name: "pants",
            pockets: {
                first: [
                    "gum",
                    "money"
                ],
                secret: [
                    "condoms"
                ]
            }
        },
        {
            color: "blue",
            price: 300,
            name: "hair"
        },
        {
            color: "black",
            price: 1,
            name: "t-short"
        }
    ]
};
console.log(profile.things[0].pockets.first[1]);
 */
/*var a = {
    number: 3
};
var b = a;
a.number = 5

console.log(b.number);
*/
var name = prompt("Item call:");
var pricePerItem = +prompt("Get price of item");
var count = +prompt ("Get count of items");

alert ("Thank you for buying " + name + "(s)." + "Total: " + pricePerItem*count);
