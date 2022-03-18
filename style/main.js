/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtns = document.getElementsByClassName(openButton),
    modalContainer = document.getElementById(modalContent)
    
    for (const openBtn of openBtns) {
        if(openBtn && modalContainer){
            openBtn.addEventListener('click', ()=>{
                modalContainer.classList.add('show-modal')
            })
        }
    }
}
showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))

/*============== Lider ============*/
// var swiper = new Swiper('.swiper-container', {
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev'
// 	},
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	// init: false,
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},

  
// 	breakpoints: {
// 	  620: {
// 		slidesPerView: 1,
// 		spaceBetween: 20,
// 	  },
// 	  680: {
// 		slidesPerView: 2,
// 		spaceBetween: 40,
// 	  },
// 	  920: {
// 		slidesPerView: 3,
// 		spaceBetween: 40,
// 	  },
// 	  1240: {
// 		slidesPerView: 4,
// 		spaceBetween: 50,
// 	  },
// 	} 
// });

/*========swiper========*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
        680: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
        1240: {
            slidesPerView: 4,
            spaceBetween: 10,
            }
    }
});
