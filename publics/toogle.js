
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

/*
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
    let leftInfos = document.querySelector(".left-heading") 
   

    // console.log(CategoriesContents);
   // console.log(document.querySelectorAll(".mega-content .categories > li "));

    if (  DeviceAppareil !== null ) {

        DeviceAppareil.forEach(li => {
            li.addEventListener('click' , function () {

                let appareilChoisi = this.dataset.appareilChoisi;

              //  console.log(appareilChoisi);
              
                if (appareilChoisi !== null &&  CategoriesContents !== null && leftInfos !== null ) { 
                    // on stock le type d'appareil dans le local
                    if (localStorage !== undefined) {
                        localStorage.setItem('type_appareil', appareilChoisi)
                    }

                    if (li.classList.contains('listed') ) {
                        li.classList.remove('listed');
                        CategoriesContents.classList.remove("displayed");
                        CategoriesContents.dataset.category = appareilChoisi;
                        leftInfos.classList.add('listed')
                        return
                    }

                    DeviceAppareil.forEach((element) => {
                        element.classList.remove('listed');
                    })
                    
                    CategoriesContents.classList.remove("displayed");
                    li.classList.add('listed');
                    leftInfos.classList.remove('listed')
                    CategoriesContents.classList.add("displayed");
                    CategoriesContents.dataset.category = appareilChoisi;
                 
                }
            })
        })
    }


    /**
     * Réagir au choix de chaque marque pour afficher le bon contenu 
     */

    let marquesAppareil = document.querySelectorAll(' ul.marques > li.marque  ')
    let catalogWrapper = document.querySelector(' .catalog-wrapper  ')

    if (  marquesAppareil !== null ) {

        marquesAppareil.forEach(li => {
            li.addEventListener('click' , function () {

                let marqueChoisie = this.dataset.marque;

              //  console.log(marqueChoisie);
              
                if (marqueChoisie !== null &&  catalogWrapper !== null ) { 
                     // on stock la marque  dans le local
                    if (localStorage !== undefined) {
                        localStorage.setItem('marque', marqueChoisie)
                    }
                    if (li.classList.contains('listed') ) {
                        li.classList.remove('listed');
                        catalogWrapper.classList.remove("displayed");
                        catalogWrapper.dataset.catalogActive = marqueChoisie;
                        return
                    }

                    marquesAppareil.forEach((element) => {
                        element.classList.remove('listed');
                    })
                    
                    catalogWrapper.classList.remove("displayed");
                    li.classList.add('listed');
                    catalogWrapper.classList.add("displayed");
                    catalogWrapper.dataset.catalogActive = marqueChoisie;
                 
                }
            })
        })
    }


    
}
