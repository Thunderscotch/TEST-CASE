const books=[
    {title:"bookA",Id:1,price:200,stocks:10},
    {title:"bookB",Id:2,price:250,stocks:10},
    {title:"bookC",Id:3,price:100,stocks:10},
    {title:"bookD",Id:4,price:300,stocks:10},
    {title:"bookD",Id:4,price:300,stocks:10}
]

const customerDetails=[
    {name:"jade",Id:100,existing:true},
    {name:"robi",Id:101,existing:true},
    {name:"balu",Id:102,existing:true},
]

const customerId=102;
const chosenBookList=[1,2,2,3];
// function test(books){
//     customerId.forEach(cus=>{
//      const book1= books.find(db=>db.Id ===cus);
//         if(book){
//             book.push(book1);
//         }
//     })
//     console.log(book);
// }
// test(books);
// console.log(book);

function removeDuplicate(){
   const duplicate= new Set();
   const uniqueBook = [];
   for (const book of books){
        if(!duplicate.has(book.Id)){
            duplicate.add(book.Id);
            uniqueBook.push(book);
        }
   }
   console.log(duplicate);
   console.log(uniqueBook);
   return(uniqueBook);
}



function chosenBooks(){
    const chosenBook= remDep.filter(choBk => chosenBookList.includes(choBk.Id));
    console.log(chosenBook);
    return (chosenBook);
}


function calculateDiscount(){
    const currentCustomer = customerDetails.find(customer=> customer.Id == customerId);
    let isExisting =currentCustomer? true :  false;
    // if(currentCustomer){
    //     isExisting=true;
    // }
    for(let book of choBk){ //book.count +=1
        if(isExisting){
            if(book.price>200){
                book.discount= book.price* 15 / 100;
            }else{
                book.discount=0;
            }
        }else{
            switch(true){
                case book.price>=100 && book.price<200:
                    book.discount=book.price*2/100;
                case book.price>=200 && book.price<500:
                    book.discount=book.price*5/100;
                case book.price>=500 && book.price<700:
                    book.discount=book.price*7/100;        
                case book.price>=700:
                    book.discount=book.price*7/100;
                default:book.discount=0;
                }
        }
        book.totalBookDiscount=book.price -  book.discount;
        console.log(book.discount);
        console.log(book.totalBookDiscount);
    } 
        console.log(isExisting);
    }

function stockUpdate(){
    for(const stock of remDep){
        for(const stockup of chosenBookList){
        if(stockup == stock.Id){
            stock.updatedStocks -= 1;
        }
    }
    }
    return{"title:":books.title,"quantity:": (books.stock - books.updatedStocks),"price:":books.price,"discount: ": books.discount,"finalPrice: ":books.totalBookDiscount};
}

function printBill(){
    return{
        customerName: customerDetails.name,
        booksPurchased:[
            choBk
        ],

    }
}

const remDep=removeDuplicate();
const choBk=chosenBooks(remDep);
calculateDiscount();
const totalStocks = stockUpdate();
