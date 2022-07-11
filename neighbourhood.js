


let restaurants = ["Brit's Pub","Buca di Beppo Italian Restaurant","Lotus Restaurant","Hell's Kitchen Inc.","The Local - Minneapolis"];

let myFavRestaurant=document.querySelector('#suggestionbtn');
function guess(evt){
    const randomElement =restaurants[Math.floor(Math.random() * restaurants.length)];

    alert (`Our recommandtion is:${randomElement}`)

}
myFavRestaurant.addEventListener('click',guess)