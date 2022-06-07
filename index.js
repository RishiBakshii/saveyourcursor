// let con=document.querySelector('.con').children[1].addEventListener('mouseenter',function(){
//     console.log('you lost')
// })
// console.log(con)


let audio=document.querySelector('audio')

let con=document.getElementsByName('boxes')
Array.from(con).forEach(function(element){
    element.addEventListener('mouseenter',function(){
        
        let head=document.querySelector('h1')
        if(head.innerText==''){
        head.innerText='You Lost'}

        let head2=document.querySelector('h2')
        if(head2.innerText==''){
        head2.innerText='Try Again?'
        audio.play()
        }
        
    })
})


let reset=document.querySelector('h2').addEventListener('click',function(){
    let head=document.querySelector('h1')
    head.innerText=''
    let head2=document.querySelector('h2')
    head2.innerText=''
})
