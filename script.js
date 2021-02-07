function add(parameter){
    string = string + parameter;
    document.getElementById("displayPTag").textContent = string;

};

function evaluatee(){
    try{
        var displayObject = document.getElementById("displayPTag");
        var stringTemp = string;
        stringTemp = stringTemp.replace('x','*');
        console.log("string :" + stringTemp);
        var total = eval(stringTemp);
        document.getElementById("displayPTag").textContent = total;
        console.log('123');
        string = '';
    }
    catch(err){
        document.getElementById("displayPTag").textContent = 'Error!';
    };
};
function clearIt(){
    string = '';
    document.getElementById("displayPTag").textContent = string;
    console.log('xxx');
};