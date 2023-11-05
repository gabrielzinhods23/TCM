       const observer = new IntersectionObserver(entries => {

        Array.from(entries).forEach(entry => {
            if (entry.intersectionRatio >= .5) {
                entry.target.classList.add("animado")
            }//Quando 50% do elemento entra na tela ele recebe a classe animado.
        })
    }, {
        threshold: [0, .25, .5, .75] //opções de quanto do elemento precisa estar na tela para que ele seja detectado(25%,50%,75%).
    })
    Array.from(document.querySelectorAll('[data-animar], [data-animar-fast], [data-animar-slow]')).forEach(element => {
        observer.observe(element) //atributos que o elemento precisa ter para se detectado.
    })
    /*Para que uma animação específica ocorra quando um elemento entra na tela, é necessário um trecho de código dedicado 
    aos elementos que terão esse comportamento.*/

    const observer2 = new IntersectionObserver(entries => {//Crie uma nova consante observer para não causar conflito com a anterior.

        Array.from(entries).forEach(entry => {
            if (entry.intersectionRatio >= .75) {
                entry.target.classList.add("animado-spin")
            }
        })
    }, {
        threshold: [0, .25, .5, .75]
    })

    Array.from(document.querySelectorAll('[data-animar="animacao-spin"]')).forEach(element => {
        observer2.observe(element)//dessa vez o código detecta um "data-animar" com valor especifico. 
    })