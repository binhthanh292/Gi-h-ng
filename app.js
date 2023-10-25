function fnCheckAll (Element) {
    for (let e of document.querySelectorAll('input[type=checkbox]'))
        e.checked = Element.checked; 

}
function DeleteItem (Element) {
    Element.parentElement.parentElement.remove();

}  

for (let e of document.getElementsByClassName('delete'))
    e.addEventListener('click', function(){DeleteItem(this)}); 


function fnUpdateAmountItem (Element) {
    var rowEl = Element.parentElement.parentElement;
    var price = rowEl.querySelectorAll('p')[2].innerText;
    var quantity = Element.value;
    var total = quantity*parseFloat(price);
    rowEl.querySelectorAll('p')[3].innerText = total + "$";


   
}

for (let e of document.getElementsByClassName('num'))
    e.addEventListener('click', function(){fnUpdateAmountItem(this)});  



function fnUpdateAmount_Total (Element) {
    var sum = document.getElementById('sum');
     var total_1 = sum.parentElement.parentElement.parentElement.querySelectorAll('div')[6].querySelectorAll('p')[3].innerText;
     var total_2 = sum.parentElement.parentElement.parentElement.querySelectorAll('div')[6].querySelectorAll('p')[7].innerText;
     var total_3 = sum.parentElement.parentElement.parentElement.querySelectorAll('div')[6].querySelectorAll('p')[11].innerText;
     
     document.getElementById('sum').innerText = parseFloat(total_1)+parseFloat(total_2)+parseFloat(total_3)  + "$" ;

} 

for (let e of document.getElementsByClassName('num'))
    e.addEventListener('click', function(){fnUpdateAmount_Total(this)});  


