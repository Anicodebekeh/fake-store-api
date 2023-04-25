const Content = document.querySelector('.content');
const addCategory = document.querySelector('#category');


const selection =()=>{
    const category = document.querySelector('.category');
    console.log(category.value)

    const fetchData = async ()=>{
        let Api = await fetch('https://fakestoreapi.com/products')
        let data = await Api.json()
        // console.log(data)
        for (let datas of data){
            if (datas.category === category.value){ 
                // console.log(category.value) 
               const h3 = document.createElement("H3")
               h3.innerHTML=datas.title
               const p = document.createElement("P")
               p.innerText= "$"+datas.price
               const img = document.createElement('IMG')
               const container = document.createElement("DIV")
               img.src=datas.image
               container.append(img)
               container.appendChild(h3)
               container.appendChild(p)
               Content.append(container)
               
            }    
            // console.log(datas)
            
        }

    
    }
    
    fetchData()
    

}






