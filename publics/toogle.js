
function addVisibleClass (el) {
    if ( document.querySelector(el) !== null) {
        document.querySelector(el).classList.add('visible');
    }else {
        return;
    }
}
function removeVisibleClass (el) {
    if ( document.querySelector(el) !== null) {
        document.querySelector(el).classList.remove('visible');
    }else {
        return;
    }
}

window.onload = () => {

  addVisibleClass('section.as-heroe');
  addVisibleClass('section.reparateur-starting');
  setupListeners();

}

function setupListeners() {

    if ( document.querySelector('button.js-action-devis') !== null) {
        document.querySelector('button.js-action-devis').addEventListener('click', (ev) => {
     removeVisibleClass('section.as-heroe');
        addVisibleClass(` section.${ev.target.dataset.sectionCible}`);
    } ) 
    }
   
    if ( document.querySelector('button.js-action-reparateur') !== null) {
        document.querySelector('button.js-action-reparateur').addEventListener('click', (ev) => {
     removeVisibleClass('section.as-heroe');
        addVisibleClass(` section.${ev.target.dataset.sectionCible}`);
    } )

    }
    if (document.querySelectorAll(".mega-content .categories > li ") !== null ) {
        document.querySelectorAll(".mega-content .categories > li ").forEach(li => {
            li.addEventListener('click' , function () {
                let appareilChoisi = this.dataset.appareilChoisi;
                if (appareilChoisi !== null &&  document.querySelector(".mega-content .category-contents") !== null ) {
                    
                return    document.querySelector(".mega-content .category-contents").dataset.appareilChoisi = appareilChoisi;
                }
            })
        })
    }
    
}

