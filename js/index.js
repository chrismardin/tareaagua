const vasos = document.querySelectorAll(".vasos");
const vasolitro = document.getElementById("litro2");
const aguaAtomar = document.getElementById("cantidadFaltante")
const aguaTomada = document.getElementById("porciento")
const vasoprincipal = document.getElementById("vasoPrinc")




vasos.forEach((vaso, index) => {

    vaso.addEventListener("click", () => {

        let nuevoLimite;

        if (vaso.classList.contains("activo")) {
            nuevoLimite = index - 1;
        } else {
            nuevoLimite = index;
        }

        // 1️⃣ Actualizamos los vasos
        vasos.forEach((v, i) => {
            if (i <= nuevoLimite) {
                v.classList.add("activo");
            } else {
                v.classList.remove("activo");
            }
        });

        if (vasos[0].classList.contains("activo")) {
            vasolitro.style.height = "12.5%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "1.75L";
            aguaTomada.style.visibility = "visible";




        }
        else {
            aguaTomada.style.visibility = "hidden";

            vasolitro.style.height = "0%";
            aguaAtomar.innerHTML = "2L"
        }

        if (vasos[1].classList.contains("activo")) {
            vasolitro.style.height = "25%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "1.50L";
            aguaTomada.innerHTML = "25%"
        }

        if (vasos[2].classList.contains("activo")) {
            vasolitro.style.height = "37.5%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "1.25L";
            aguaTomada.innerHTML = "37.5%"
        }

        if (vasos[3].classList.contains("activo")) {
            vasolitro.style.height = "50%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "1L";
            aguaTomada.innerHTML = "50%"

        }

        if (vasos[4].classList.contains("activo")) {
            vasolitro.style.height = "62.5%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "0.75L";
            aguaTomada.innerHTML = "62.5%"
        }

        if (vasos[5].classList.contains("activo")) {
            vasolitro.style.height = "75%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "0.50L";
            aguaTomada.innerHTML = "75%"
        }

        if (vasos[6].classList.contains("activo")) {
            vasolitro.style.height = "87.5%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.innerHTML = "0.25L";
            aguaTomada.innerHTML = "87.5%"
        }

        if (vasos[7].classList.contains("activo")) {
            vasolitro.style.height = "100%";
            vasolitro.style.background = "#2b5bc494";
            aguaAtomar.style.visibility = "hidden"
            Remaining.style.visibility = "hidden"

            aguaTomada.innerHTML = "100%"

        }
        else {
            aguaAtomar.style.visibility = "visible";
            Remaining.style.visibility = "visible";
        }






    });

});

vasoprincipal.addEventListener("click", () => {
    if (vasos[7].classList.contains("activo")) {
        location.reload();

    }

});


