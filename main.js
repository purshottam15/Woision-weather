const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4bcdddf418msh8ee7c9d7379e838p19967fjsn87ac7bbd1d6b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
		console.log(response)
		
	
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		min_temp.innerHTML=response.min_temp
		max_temp.innerHTML=response.max_temp
		wind_speed.innerHTML=response.wind_speed
		wind_degrees.innerHTML=response.wind_degrees
		// sunrise.innerHTML=response.sunrise
		// sunset.innerHTML=response.sunset
	  
	
	  
	
	})
	.catch(err => console.error(err));

}
getweather("delhi")
btn.addEventListener('click',(e)=>{
	e.preventDefault()

	getweather(city.value)
	cityname.innerHTML=city.value
})



// changing the weather of common city
let cityname1=["delhi","tokyo","denver","Ghaziabad","shangai"]
cityname1.forEach((element)=>{
	const getweather=(city)=>{
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response =>{
			// console.log(response)
			const cloud_pct = document.getElementById(`${city}_cloud_pct`);
      const temp = document.getElementById(`${city}_temp`);
      const feels_like = document.getElementById(`${city}_feels_like`);
      const humidity = document.getElementById(`${city}_humidity`);
      const min_temp = document.getElementById(`${city}_min_temp`);
      const max_temp = document.getElementById(`${city}_max_temp`);
      const wind_speed = document.getElementById(`${city}_wind_speed`);
      const wind_degrees = document.getElementById(`${city}_wind_degrees`);
      const sunrise = document.getElementById(`${city}_sunrise`);
      const sunset = document.getElementById(`${city}_sunset`);
			
		
	  cloud_pct.innerHTML=response.cloud_pct
	  temp.innerHTML=response.temp
	  feels_like.innerHTML=response.feels_like
	  humidity.innerHTML=response.humidity
	  min_temp.innerHTML=response.min_temp
	  max_temp.innerHTML=response.max_temp
	  wind_speed.innerHTML=response.wind_speed
	  wind_degrees.innerHTML=response.wind_degrees	
	  sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
	  
			
			
		
		  
		
		
		  
		
		})
		.catch(err => console.error(err));
	
	}
	getweather(element)

})
