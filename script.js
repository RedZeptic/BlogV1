const nav = document.querySelector('.navbar')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

const blog = document.querySelector('.blog')
fetch('/blog-sections.html')
.then(res=>res.text())
.then(data=>{
    blog.innerHTML=data
})

/* 
I don't really know how this stuff works yet, I can make educated guesses but had yet to learn any JS. Thank you YouTube tutorial for this code and knowledge!
https://www.youtube.com/watch?v=lwRiLHwHOjQ
*/