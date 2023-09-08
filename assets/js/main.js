/*=========== HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// let mixerPortfolio = mixitup('.work__container', {
//     selectors: {
//         target: '.work__card'
//     },
//     animation: {
//         duration: 300
//     }
// });

// const linkWork = document.querySelectorAll('.work__item')

// function activeWork(){
//     linkWork.forEach(L=> L.classList.remove('active-work'))
//     this.classList.add('active-work')
// }

// linkWork.forEach(L=> L.addEventListener('click', activeWork))

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal('.home__handle', {delay: 700})
sr.reveal('#work', {delay: 900, origin: 'left'})
sr.reveal('#contact', {delay: 700, origin: 'right'})
sr.reveal('#footer', {delay: 600, origin: 'bottom'})
