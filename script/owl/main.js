$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var carouselChannels= document.getElementsByClassName('carousel-channels');
var itemProgramacao = document.getElementById('programacao-list') 
var itemHardware = document.getElementById('hardware-list') 
var itemInfo = document.getElementById('info-list')

function home(){
    
    
    itemInfo.style.display = 'none'
    itemHardware.style.display = 'none';
    itemProgramacao.style.display = 'none';
    
    for(let i = 0; i < carouselChannels.length; i++){
        carouselChannels[i].style.display = 'block' 
    }

}

function programacao(){
    
    
    itemInfo.style.display = 'none'
    itemHardware.style.display = 'none'
    itemProgramacao.style.display = 'flex';
    
    
        for(let i = 0; i < carouselChannels.length; i++){
            carouselChannels[i].style.display = 'none' 
        }
    

    
}

function hardware(){
   
    
    itemInfo.style.display = 'none'
    itemProgramacao.style.display = 'none';
    itemHardware.style.display = 'flex';
  
    
    for(let i = 0; i < carouselChannels.length; i++){
        carouselChannels[i].style.display = 'none' 
    }
}

function info(){
    itemInfo.style.display = 'flex'
    itemProgramacao.style.display = 'none';
    itemHardware.style.display = 'none';
  
    
    for(let i = 0; i < carouselChannels.length; i++){
        carouselChannels[i].style.display = 'none' 
    }
}