const onCalcBtnClick=()=>{
 
   try {

    let data=  localStorage.getItem('data')

    if(data){

    deleteData()
    return
    }

    let weight =document.getElementById('inputWeight').value 
    let height = document.getElementById('inputHeight').value

   if(weight==="" || height===""){
       alert("BMI calculation failed")
        document.getElementsByTagName('h1')[1].innerText="No Input"
      document.getElementById('Btn').innerText ="Calculate";
    }

     else{
    let BMI = weight/((height/100)**2)

    BMI = BMI.toFixed(2)

    let obj = {BMI}
    
    let jsonStr = JSON.stringify(obj)

    localStorage.setItem('data',jsonStr)
    alert("BMI calculated successfully")
    
    getData()
     }
     
    }
   catch (error) {
    console.log(error)
    alert("BMI calculation failed")}
   }


const getData=()=>{
    try {
       let data = localStorage.getItem('data')
    
     
   if(data){
    let jsonObj=JSON.parse(data)
     document.getElementsByTagName('h1')[1].innerText=jsonObj.BMI 
   document.getElementById('Btn').innerText="Delete"
   
   }else{
     document.getElementsByTagName('h1')[1].innerText="No Input"
      document.getElementById('Btn').innerText ="Calculate";
   }
    
   } catch (error) {
        console.log(error)
        alert("Data failed to display")
    }
}

const deleteData = () => {

  

    localStorage.removeItem('data');

     document.getElementById('inputWeight').value=""
    document.getElementById('inputHeight').value=""

    document.getElementsByTagName('h1')[1].innerText = "";
     document.getElementById('Btn').innerText = "Calculate";

    
};




