// Envents Exercice1

//1
// méthode1
let myH1 = document.querySelector('h1')

// let colorH1 = () => {
//     myH1.style.color = 'blue'
// } 
// myH1.addEventListener('click', colorH1)

// methode2
// myH1.addEventListener('click', () => {
//     myH1.style.color = 'blue'
// })
4

// Event Exercie2

// 1
myH1.addEventListener('dblclick', () => {
    myH1.style.backgroundColor = 'red'
    myH1.style.color = "white"
})

// 2
let myH3 = document.querySelector('h3')

myH3.addEventListener('mouseover', () => {
    // myH3.innerText = myH3.innerText.substring(1)
    myH3.innerText = myH3.innerText.substring(0, myH3.innerText.length - 1)

})

// 3
let monP = document.querySelector('p')
// methode1
// monP.addEventListener('click', () => {
//     if (monP.style.backgroundColor.length ==0  && monP.style.color.length ==0) {
//         monP.style.cssText = "background-color:blue; color:grid"
//     } else {
//         monP.style = ""
//     }
// })

// methode2
// let i = 2
// console.log(i % 2);
// monP.addEventListener('click', () => {
//     if (i % 2 == 0) {
//         monP.style.cssText = "background-color:blue; color:grid"
//         i++
//     } else {
//         monP.style = ""
//         i++
//     }
// })


// méthode3
let clique = false
console.log(clique);
console.log(!clique);

monP.addEventListener('click', () => {
    if (!clique) {
        monP.style.cssText = "background-color:blue; color:grid"
        clique = true
    } else{
        monP.style = ""
        clique =false
    }
})

// méthode toogle
// monP.addEventListener('click', () => {
//     monP.classList.toggle('color')
// })