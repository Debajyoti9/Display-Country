
let country_list = document.getElementById('country_list');
// console.log(country_list);
function fetchData(){
fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(function(data){
   data.sort();
   let countries='';
   data.map((values)=>{
      countries += `<div class="country_list_data">
      <div class="country_list_image">
           <img src=${values.flags.png} alt="Flag Image">
      </div>
     <div class="county_list_name">
       <h3>${values.name}</h3>
       <h4>Region:</h4>
       <p>${values.region}</p>
     </div>
    </div>
  </div>`
   })
   country_list.innerHTML = countries;
})
.catch(error => console.log(error))
}

fetchData();