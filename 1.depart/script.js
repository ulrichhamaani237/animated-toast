const addTocartBtn =  document.querySelector('.c-cta-button--add-to-cart')
const toast = document.querySelector('.cart-toast')
const progressBar  = document.querySelector('.cart-toast__progrees-bar')

addTocartBtn.addEventListener('click', showToast)

let toastTimeout
 
function showToast(){

 if(!toast.classList.contains("cart-toast--show") && getComputedStyle(toast).opacity > 0 && 
    getComputedStyle(toast).opacity < 1)
    {
        resetProgressBar()
    }
     if (toast.classList.contains("cart-toast--show")) {
        clearTimeout(toastTimeout)
        resetProgressBar()
    } else {
        
        toast.classList.add("cart-toast--show");
        progressBar.style.transition = "transform 4s linear"
        progressBar.style.transform = "scaleX(1)"
    }

    toastTimeout = setTimeout(() => {
        toast.classList.remove("cart-toast--show")
    }, 4000)

}

     function resetProgressBar(){
        progressBar.style.transition = "none"
        progressBar.style.transform = "scaleX(0)"
        progressBar.offsetWidth;  // force reflow
        progressBar.style.transition = "transform 4s linear"
        progressBar.style.transform = "scaleX(1)"
     }

     toast.addEventListener('transitionend', onTransitionEnd)

     function onTransitionEnd(event){

        if(event.propertyName ==='opacity' && !toast.classList.contains('cart-toast--show')){
            progressBar.style.transition = "none"
            progressBar.style.transform = "scaleX(0)"
        }
     }
        