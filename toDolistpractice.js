const userNameTextField=document.getElementById("username")
const addUserBtn=document.getElementById("addUser")
const recordsDisplay= document.getElementById("records")

userArray=[]
const objstr= localStorage.getItem('user')
if(objstr!=null){
  userArray= JSON.parse(objstr)
}
addUserBtn.onclick=()=>{
   
 const name=  userNameTextField.value
//  alert(name)
userArray.push({'name':name})
saveData(userArray)
}



function saveData(userArray){
   // console.log(userArray)
let str=JSON.stringify(userArray)
// console.log(str)
localStorage.setItem('user',str)
displayData(userArray)

}
function displayData(){
let data=''
userArray.forEach((item,i)=>{
   data+=`<tr >
            <th>${i+1}</th>
            <td>${item.name}</td>
            <td>
            <i class="btn text-white fa fa-edit btn-info mx-2"
        onclick='EditInfo(${i})'></i>
        <i class="btn btn-danger text-white fa fa-trash"
        onclick='DeleteInfo(${i})'></i>
            </td>
          </tr>`
})
recordsDisplay.innerHTML=data
   

}

function EditInfo(){

}
function DeleteInfo(id){
 userArray.splice(id,1)
 saveData(userArray)

}