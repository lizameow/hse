const node_for_click = document.getElementById("for_click")


function find_edit(){
   const s1 = document.getElementsByTagName('strong')[0]
   console.log(s1.innerText)
   s1.innerText = 'Zaporozhets'

   const s2 = document.getElementsByTagName('strong')[1]
   console.log(s2.innerText)
   s2.innerText = 'Elizaveta'

   const s3 = document.getElementsByTagName('u')[7]
   console.log(s3.innerText)
   s3.innerText = 'Vladimirovna'

}





node_for_click.addEventListener("click",find_edit)
