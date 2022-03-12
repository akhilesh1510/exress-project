const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name')
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')





const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value ;
    if (cityval==="") {
        city_name.innerText=`plz write the city name before search`;
    }else{
        try {
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&APPID=164f8161595bfe66c7f1c487882772aa`
            const response=await fetch(url);
            const data =await response.json();
            const arrData=[data];
            console.log(arrData);
            temp.innerText= arrData[0].main.temp;
            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            
            temp_status.innerText= arrData[0].weather[0].main;

           
            
        } catch (error) {
            city_name.innerText=`plz write the correct city name`;
            
        }

    }
}

submitBtn.addEventListener('click', getInfo);