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
    "priceDate": null,
    "tradPrice": null,
    "modPrice": null,
    "pedPrice": null,
    "prodPrice": null
};

async function getData(){
    await axios.get("http://localhost:8080/getPasarTradisional").then(res=>{
        const p =  res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)] === '-' ? {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2)]} : {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)]}

        const bp = priceStringify(p.price);
        price.tradPrice = bp;
        price.priceDate = p.date
        
    });
    await axios.get("http://localhost:8080/getPasarModern").then(res=>{
        const p =  res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)] === '-' ? {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2)]} : {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)]}

        const bp = priceStringify(p.price);
        price.modPrice = bp;
        price.priceDate = p.date
    });
    await axios.get("http://localhost:8080/getPedagangBesar").then(res=>{
        const p =  res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)] === '-' ? {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2)]} : {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)]}
        const bp = priceStringify(p.price);
        price.pedPrice = bp;
        price.priceDate = p.date
    });
    await axios.get("http://localhost:8080/getProdusen").then(res=>{
        const p =  res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)] === '-' ? {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-2)]} : {"date": Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1),"price": res.data[0][Object.keys(res.data[0]).at(Object.keys(res.data[0]).length-1)]}
        const bp = priceStringify(p.price);
        price.prodPrice = bp;
        price.priceDate = p.date
    });
    return {"trad": {"date": price.priceDate, "price":price.tradPrice}, "mod": {"date": price.priceDate, "price":price.modPrice}, "ped": {"date": price.priceDate, "price":price.pedPrice}, "prod": {"date": price.priceDate, "price":price.prodPrice}};
}


export {
    price, priceStringify, sumPrice, getData
}