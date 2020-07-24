function addTodo() {
    // Get input field value
    var input = document.getElementById('input');
    
    // Set and display using UL list
    var item = document.createElement('li');
    var con = document.createElement('div');
    var itemText = document.createTextNode(input.value);
    con.appendChild(itemText);
    con.setAttribute('class', 'algin');
    item.appendChild(con);    
    var ul = document.getElementById('list');
    
    // Delete Button
    var delBtn = document.createElement('button');
    var delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute('class','delBtn')
    delBtn.setAttribute("onclick","delTodo(this)");
    input.value = "";
    item.appendChild(delBtn);
    ul.appendChild(item);

    // Edit Button
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    item.appendChild(editBtn)
    editBtn.setAttribute('class', 'delBtn');
    editBtn.setAttribute('onclick', 'editItem(this)');
}
function delTodo(delitem) {
    delitem.parentNode.remove();
}
function deleteAll() {
    var ulList = document.getElementById('list');
    // ulList.remove();                                     // ul is not completely delete
    ulList.innerHTML = "";
}
function editItem(edit) {
    var newVal = prompt("Update Value: ", edit.parentNode.firstChild.firstChild.nodeValue);
    console.log(edit.parentNode.firstChild.firstChild.nodeValue);
    edit.parentNode.firstChild.firstChild.nodeValue = newVal;
}