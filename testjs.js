const bookIds = [1, 2, 2, 3]; // Books chosen by the customer
const customerId = 101; // Customer making the purchase

let books=[
    {title:"bookA",Id:1,price:200,stock:10},
    {title:"bookB",Id:2,price:250,stock:10},
    {title:"bookc",Id:3,price:100,stock:10},
    {title:"bookD",Id:4,price:300,stock:10},
]

let customer=[
    {name:"jade",Id:100,existing:true},
    {name:"robi",Id:101,existing:true},
    {name:"siva",Id:102,existing:false},
]
/*at first i have created a book variable
then created a function books
then ceated a set and ainside the function
i used a foreach function iterating the book id into cus variable then
a condition is checked the dlt the duplicated id
then created a book id and inside that find funtion is used to find the specified id
then bhat id is given below and in if claus the book details and the numbers are added to the set 
*/

var book=[];
function test(books){
    const duplicate = new Set();

    bookIds.forEach(cus=>{
        if(!duplicate.has(cus)){
        const book1= books.find(db=>db.Id ===cus);
            if(book){
                book.push(book1);
                duplicate.add(cus);
            }
        }
    }
    )
    }
//for the checking purpose it has been put out of the function

var price1=[];
function rem_stock(bookIds){
    bookIds.forEach(function(val){
        //b=books.Id;
        books.forEach(function(val1){

            if(val1.Id !== val){
                return;
            }else{
                val1.stock = val1.stock - 1;
                
                price1.push(val1);   
            }
})
    })
}


//filterBooks(bookIds);
//console.log(filteredBooks)
/* for calculating discount
step1: check the customer is eligible for the discount, create a function and to the work
step2: if elegible use tha given percent not then use the remaining percent
step3:use if else to write number of conditions 
step4: print the total first then the discounted amount in the last
step5: then everything has to to printed according to the given exapmle output
*/

//sum(book)
var discounted1=[];
var discounted2=[];
function discount(customer,customerId,price1){
    let dis1;
    let dis2;
    const customers = customer.find(cus => cus.Id === customerId);
    console.log("customer's name: ",customers.name); 
    for(let db of price1){
    if(customers.existing && db.price>=200){
        dis1=(db.price*15)/100;
        dis2=db.price-dis1;
        discounted1.push(dis1);
        discounted2.push(dis2);
        //console.log(dis1);
    }else if(customers.existing && db.price<200){
        dis1=db.price
        dis2=db.price
        discounted1.push(dis1);
        discounted2.push(dis2)
    }else{
            if(db.price > 100 && db.price<200){
                dis1=(db.price*2)/100;
                dis2=db.price-dis1;
            }else if(db.price> 200 && db.price<500){
                dis1=(db.price*5)/100;
                dis2=db.price-dis1;
            }else if(db.price > 500 && db.price<700){
                dis1=(db.price*7)/100;
                dis2=db.price-dis1;
            }else{
                dis1=(db.price*15)/100;
                dis2=db.price-dis1;
            }
            discounted1.push(dis1);
            discounted2.push(dis2);
        }
    }
}

function sum(value){
            //for(let bd of value){
                if(value.length===0){
                return 0;
        }return (value[0]+sum(value.slice(1)))    
    }



test(books);
console.log("selected books:", book);
rem_stock(bookIds);

discount(customer,customerId,price1);

console.log(discounted1);
console.log(discounted2);



var total1=sum(discounted1);
var total2=sum(discounted2);
console.log("total discounted price: ",total1);
console.log("total price: ",total2);

//console.log("stock updated: " ,price1);
console.log("stock updated:",books);
//console.log(books);





//REFERENCE FUNCTION FOR THE FILTERING AND THE OTHER PROCESS

/*for (var cus of customer){ 
    //console.log(cus.Id);
    for (var db of books){
        //console.log(db.price);
        if(cus.Id == customerId && cus.existing == true){
            db.price= (db.price*15)/100;
            console.log(db.price);
}}
}*/

/*
        elseif(customerId == cus.Id && cus.existing === false){
                let discount= (books.price*2)/100;
                console.log(discount);
            }

        elseif(customerId == cus.Id && existing === false){
            let discount= (books.price*15)/100;
            console.log(discount);
        }
    }
}
*/
/*function filterBooks(bookIds) {
    bookIds.forEach(function(value) {
        var filteredBooks = books.filter(function(book) {
            return book.Id === value; // Filters books matching the value
        });

        // printing the books
        filteredBooks.forEach(function(book) {
            console.log(book);
        });
    });
}
*/
/*let printedbooks=[];
function filterBooks(bookIds) {
    bookIds.forEach(function(value) {
        var filteredBooks = books.filter(function(book) {
            return book.Id === value; // Filters books matching the value
        });

        // printing the books
        
        filteredBooks.forEach(function(book) {
            if(!printedbooks.includes(book.Id))
                console.log(book);
                printedbooks.push(book.Id);
        });
    });
}


var c= 0;
for (let i in bookIds){
    i=i+0;
    c= c+1;
}
console.log("Total books selected: ",c);
*///console.log("BK");
//console.warn("THIS is warning!")
//console.error("This is error!")

// filterBooks(bookIds)

/*export function add(a,b)
{
    a+b;
}
*/


/*var filtered= [];
var filteredBooks=[];
function filterBooks(bookIds){
    bookIds.forEach(function(value) {
        filteredBooks= books.filter(function(book){
            
            if(value===book.Id && !filtered.includes(value)){
                book.push(filteredBooks);
                filtered.push(value); //in here I have used basic if class to filter the data by creating a new variable called value 1
                return true;
            }}
    )
        filteredBooks.forEach(function(book){
            //console.log("book:",book.title+" ID:",book.Id+" price:",book.price+ " stocks remaining: ", book.stock);
            //console.log(books)
        })
    })
}*/
