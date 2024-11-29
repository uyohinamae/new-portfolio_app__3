const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen')
const loadingText = document.querySelector('#loading p')


window.addEventListener('load' , () => {
    loadingAreaGrey.animate( 
    {
    opacity: [1, 0],
    visibility: 'hidden',
    },
    {
        duration: 2000,
        delay: 1200,
        easing: 'ease',
        fill: 'forwards',
    }
    );


    // ローディング中//
    loadingAreaGrey.animate(
    {
        translate: ['0 100vh' , '0 0', '0 -100vh']
    },
    {
        duration: 2000,
        delay: 800,
        easing: 'ease',
        fill: 'forwards',
    }
    );

     // ローディング中テキスト//
   loadingText.animate(
    [
        {
            opacity: 1,  //80%
            offset: .8 
        },
        {
            opacity: 0,  //100%
            offset:  1 
        },
    ],
    {
        duration: 1200,
        easing: 'ease',
        fill: 'forwards',
    }
   );
});


const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thunbnalis img')

// for(let i = 0; i < thumbImages.length; i++)  {
//     thumbImages[i].addEventListener('mouseover' , (event) => {
//        mainImage.src = event.target.src;
//        mainImage.animate ({opacity: [0, 1]}, 500);
//     });
// }-
thumbImages.forEach((thumbImages)=>{
   thumbImages.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate ({opacity: [0, 1]}, 500);
   });
});
    
    



