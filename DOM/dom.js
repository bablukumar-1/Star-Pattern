
const themeButton = document.getElementById('theme-button')
themeButton.addEventListener('click',()=>{
  const currentColor = document.body.style.backgroundColor;
  if(!currentColor || currentColor==='white'){
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
    themeButton.innerText='Light-Mode'
  }else{
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    themeButton.innerText='Dark-Mode'
  }
})