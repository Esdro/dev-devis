
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

    /**
     * réagir au choix du type d'appareil; 
     */

    let DeviceAppareil = document.querySelectorAll(".mega-content .categories > li ");
    let CategoriesContents = document.querySelector(".mega-content .category-contents") 
   

    console.log(CategoriesContents);
   // console.log(document.querySelectorAll(".mega-content .categories > li "));

    if (  DeviceAppareil !== null ) {

        DeviceAppareil.forEach(li => {
            li.addEventListener('click' , function () {

                let appareilChoisi = this.dataset.appareilChoisi;

              //  console.log(appareilChoisi);
              
                if (appareilChoisi !== null &&  CategoriesContents !== null ) { 

                    if (li.classList.contains('listed') ) {
                        li.classList.remove('listed');
                        CategoriesContents.classList.remove("displayed");
                        CategoriesContents.dataset.category = appareilChoisi;
                        return
                    }

                    DeviceAppareil.forEach((element) => {
                        element.classList.remove('listed');
                    })
                    
                    li.classList.add('listed');
                    CategoriesContents.classList.add("displayed");
                    CategoriesContents.dataset.category = appareilChoisi;
                 
                }
            })
        })
    }
    
}

