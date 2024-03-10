document.addEventListener('DOMContentLoaded',function(){
    //Getting the necessary elements from Html element
    const ratingContainer = document.querySelector('.rating-container');
    const thankYouContainer = document.querySelector('.thankyou-container');
    const subrating = document.getElementById('subrating');
    const btn = document.querySelectorAll('.btn');
    const ratingg = document.getElementById('ratingg');
    const rateAgainButton = document.querySelector('.thankyou-container .button');

    //Now we have attached all the necessary elements from DOM to java script
    //Attaching event listeners to each rating button
    btn.forEach(function(button){
        button.addEventListener('click',function(){
            //Retrive the rating value from button's text content
            let rating = button.textContent; 
           //Displaying the rating value in the ratingg element
           ratingg.textContent = rating;
        })
    })

    //Event listner for the submit(subrating) button
    subrating.addEventListener('click',function(){
        //Hide the rating container
        ratingContainer.style.display = 'none';
        //show the thankyoucontainer
        thankYouContainer.style.display = 'flex';
    })

    //Event listner for the rate again button
    rateAgainButton.addEventListener('click',function(){
        //show the rating container
        ratingContainer.style.display = 'block';
        //hide the thankyoucontainer
        thankYouContainer.style.display = 'none';
    })

})

