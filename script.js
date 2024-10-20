


// let data = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

// data.then((response) => {
//     response.json();
// }).then((details) => {
//     let html = '';

//     if (data.meals) {
//         data.meals.forEach(meal => {
//             html += ` <div class="meal" data-id = "${meal.idMeal}">

//             <img src="${meal.strMeal}" alt="photo of meal">

//             <div class="meal-desc">
//                 <h4>Beef Lo Mein</h4>
//                 <a href="">Get Recipe</a>
//             </div>
//         </div>`
//         });
//     }
// })


const searchbtn = document.querySelector('#search-btn');
const mealList = document.getElementById("meal");
const mealitem = document.getElementById("meals")

function getdata() {
     
     const error = document.getElementById("not-found")
     let input = document.getElementById('search').value;
     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
          .then((response => {
               if (!response.ok) {
                    const message = `error : ${response.status}`;

                    throw new Error(message)
               }
               return response.json()
          })).then((data) => {
               console.log(data)


               let html = "";

               if (data.meals) {
                    console.log(true);
                    data.meals.forEach(element => {

                         html +=
                              ` <div class="meal" data-id="${element.idMeal}">
                         
                         <img src="${element.strMealThumb}" alt="photo of meal">
                         
                         <div class="meal-desc">
                         <h4>${element.strMeal}</h4>
                         <a href="#">Get Started</a>
                         </div>
                         </div>`;

                    });
                    mealitem.classList.remove('not-found')
               }else{
                    html = `we didnt found any reciepe`;
                    mealitem.classList.add('not-found')
               }
               mealitem.innerHTML = html;
          })
          
}

searchbtn.addEventListener('click', getdata)