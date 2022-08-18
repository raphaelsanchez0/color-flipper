const colors = ["green","red","blue"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

function getRandomNumber(){
    return Math.random();
    
}
btn.addEventListener('click',function(){
    //get random number between 0 and 2
    const randomNumber = Math.floor(getRandomNumber()*colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});