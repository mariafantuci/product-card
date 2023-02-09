/**
 * product card
 * 
 * @module product-card
 * @version 1.0.0 
 * @extends HTMLElement
 */

customElements.component = 'product-card';

if (!customElements.get(customElements.component)) {

   class ProductCard extends HTMLElement {

    /**
    * Product Card web component
    * 
    * @constructor
    */
   constructor() {
        super();
        this.initEvents();
   }

   initEvents(){
    this.querySelector('#rotation-btn').addEventListener('click', (e) => {
        const BASE_URL = './assets/imgs'
        console.log('this', this.dataset);
        if(this.dataset.rotate == 'false'){
            this.applyTheRotationImage(e.target, BASE_URL);
        }else{
            this.removeTheRotationImage(e.target, BASE_URL)
        }
        console.log('this', this.dataset);
    })
   }

   applyTheRotationImage(icon, BASE_URL){
        const productImg = this.querySelector('#product-img')
        if(icon && productImg){
            productImg.src = `${BASE_URL}/product-gift.gif`
            icon.src = `${BASE_URL}/close.svg`
            icon.alt = "close icon"
            this.dataset.rotate = "true"
        }
   }

    removeTheRotationImage(icon, BASE_URL){
        const productImg = this.querySelector('#product-img')
        if(icon && productImg){
            productImg.src = `${BASE_URL}/product.png`
            icon.src = `${BASE_URL}/rotate.svg`
            icon.alt = "rotate 360º icon"
            this.dataset.rotate = "false"
        }
    }
}

customElements.define(customElements.component, ProductCard);
}
