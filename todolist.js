const userNameTextField = document.getElementById('username')
const addUserBtn = document.getElementById('addUser')
const recordsDisplay = document.getElementById('records')

//get data
let userArray = []
let edit_id = null
//get data local storage
let objstr =localStorage.getItem('user')
// console.log(objectatr)
if(objstr != null)
    {
        userArray=JSON.parse(objstr)     //string to ibjec
    }
    // console.log(userArray)
    displayData()

addUserBtn.onclick = () => {

    const name = userNameTextField.value
    if( edit_id !=null ){
        userArray.splice(edit_id,1,{
            'name':name

        })
        edit_id=null
    }
    else{
        userArray.push({'name':name})
    }
    //alert(name)
    // userArray.push({ 'name': name })
    // console.log(userArray)
    saveData(userArray)
    userNameTextField.value=''
    addUserBtn.innerText = 'add user'

}
function saveData(userArray) {
    // console.log(userArray)
    let str = JSON.stringify(userArray)   //json converts object bvalue to string
    localStorage.setItem('user', str)
    displayData()
    userNameTextField.value=''   //empty data




}
function displayData() {
    let data = ''
    userArray.forEach((item, i) => {
        data += `<tr>
        <th>${i + 1}</th>
        <td>${item.name}</td>
        <td>
        <i class="btn text-white fa fa-edit btn-info mx-2"
        onclick='EditInfo(${i})'></i>
        <i class="btn btn-danger text-white fa fa-trash"
        onclick='DeleteInfo(${i})'></i>
        
        </td>
        <tr/>`;
        // console.log(item)

    })
    recordsDisplay.innerHTML = data;
}
function DeleteInfo(id)
{
    // alert(id)
    userArray.splice(id,1);
    saveData(userArray);
}
function EditInfo(id)
{
    // alert(id)
    edit_id = id
    userNameTextField.value = userArray[id].name;
    addUserBtn.innerText = 'update User'
    
}

