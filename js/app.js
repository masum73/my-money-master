
function getFieldValue(elementId){
    const field = document.getElementById(elementId);
    const fieldString = field.value;
    const fieldValue = parseFloat(fieldString);
    return fieldValue;
}

function getFieldInnerText(elementId){
    const field = document.getElementById(elementId);
    const fieldString = field.innerText;
    const fieldText = parseFloat(fieldString);
    return fieldText;
}

function totalExpenses(){
    const foodValue = getFieldValue('food-field')
    const rentValue = getFieldValue('rent-field')
    const clothesValue = getFieldValue('clothes-field')
    return foodValue + rentValue + clothesValue;
}
function setFieldInnerText(elementId){
    const expenses = document.getElementById(elementId);
    const totalExpense = totalExpenses();
    expenses.innerText = totalExpense;
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    console.log('calculate button clicked');

    getFieldValue('food-field')
    getFieldValue('rent-field')
    getFieldValue('clothes-field')
   
    //option - 1
   /*  const expenses = document.getElementById('expenses-field');
    expenses.innerText = totalExpense; */

    //option - 2 
    const expenses = setFieldInnerText('expenses-field');
 

})