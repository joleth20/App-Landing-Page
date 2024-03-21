window.addEventListener('DOMContentLoaded', () => {

    // Function for hamBurger and menuContainer when clicked

  const hamBurger = document.querySelector('.hamburger')
  const menuContainer = document.querySelector('.menu-container')


  
  hamBurger.addEventListener('click', () => {
    if(hamBurger.className.includes('bars')){
        // hamBurger
        hamBurger.classList.remove('bars')
        hamBurger.classList.add('close')
        // menuContainer
        menuContainer.classList.remove('hide')
        menuContainer.classList.add('show')
        // disableScroll
        document.body.style.overflow = 'hidden'
    }else{
        // hamBurger
        hamBurger.classList.add('bars')
        hamBurger.classList.remove('close')
        // menuContainer
        menuContainer.classList.add('hide')
        menuContainer.classList.remove('show')
        // enableScroll
        document.body.style.overflow = 'auto' 
    }
  })

  menuContainer.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide')
        hamBurger.classList.remove('close')
        hamBurger.classList.add('bars')
        document.body.style.overflow = 'auto'
    }
  })

//  Removing Classes when screen reached max 400px
  window.addEventListener('resize', () => {
   if(window.innerWidth > 400){
     if(menuContainer.className.includes('show')){
        // menuContainer
        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide')
        // hamBurger
        hamBurger.classList.remove('close')
        hamBurger.classList.add('bars')
        // enableScroll
        document.body.style.overflow = 'auto' 
     }
   }
  })
  


})