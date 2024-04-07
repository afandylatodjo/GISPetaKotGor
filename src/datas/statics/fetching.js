import axios from "axios";

function priceStringify(price){
        return String(price).replace(/,/g,'');
    }

function sumPrice(prices){
    let p=0,sum = 0;
    prices.forEach(e=>{
        p+=parseFloat(e);
    })
    if(p>=0) sum = p/prices.length; else sum = 0;
    return sum;
} 

let price = {
    "tradPrice": null,
    "modPrice": null,
    "pedPrice": null,
    "prodPrice": null
};

async function getData(){
    await axios.get("http://localhost:8080/getPasarTradisional").then(res=>{
        const bp = priceStringify(res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)])
        price.tradPrice = bp;
    });
    await axios.get("http://localhost:8080/getPasarModern").then(res=>{
        const bp = priceStringify(res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)])
        price.modPrice = bp;
    });
    await axios.get("http://localhost:8080/getPedagangBesar").then(res=>{
        const bp = priceStringify(res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)])
        price.pedPrice=bp;
    });
    await axios.get("http://localhost:8080/getProdusen").then(res=>{
        const bp = priceStringify(res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)])
        price.prodPrice = bp;
    });
    return {"trad": price.tradPrice, "mod": price.modPrice, "ped": price.pedPrice, "prod": price.prodPrice};
}


export {
    price, priceStringify, sumPrice, getData
}