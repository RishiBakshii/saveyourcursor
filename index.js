// let con=document.querySelector('.con').children[1].addEventListener('mouseenter',function(){
//     console.log('you lost')
// })
// console.log(con)



let loose=document.querySelector('.loose')
let audio=new Audio('sound.mp3')
audio.play()
let con=document.getElementsByName('boxes')
Array.from(con).forEach(function(element){
    element.addEventListener('mouseenter',function(){
        loose.play()
        let head=document.querySelector('h1')
        if(head.innerText==''){
        head.innerText='You Lost'
    }
        audio.pause()

        let head2=document.querySelector('h2')
        if(head2.innerText==''){
        head2.innerText='Try Again?'
        }
        
    })
})


let reset=document.querySelector('h2').addEventListener('click',function(){
    let head=document.querySelector('h1')
    head.innerText=''
    let head2=document.querySelector('h2')
    head2.innerText=''
    audio.play()
})
