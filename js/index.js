const documentReady = () => {
    //const lang = navigator.language
    if (navigator.language.startsWith("es")){
      document.getElementById("collapseOne").classList.remove("collapse")
      document.getElementById("collapseOne").classList.add("show")
      document.getElementById("btn1").classList.remove("collapsed")
      document.getElementById("btn1").setAttribute("aria-expanded", "true");
    }else{
      document.getElementById("collapseTwo").classList.remove("collapse")
      document.getElementById("collapseTwo").classList.add("show")
      document.getElementById("btn2").classList.remove("collapsed")
      document.getElementById("btn2").setAttribute("aria-expanded", "true");
    }

}