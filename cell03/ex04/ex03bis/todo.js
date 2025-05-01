const newTODO = $("#new")
const lsit = $("#ft-list")

if(document.cookie.length <= 0) {
    document.cookie = `list=; expire=${new Date(new Date().getTime()+(60*60*24*30*1000)).toUTCString()};path=/`;
}

const load = () => {
    const cookie = decode(document.cookie.slice(5));
    if (cookie.length > 0) {
        cookie.split(/(?=<d)/).forEach((e) => {
            const temp = document.createElement("div");
            temp.innerHTML = e;
            const todo = createDiv(temp.firstChild.innerText)
            list.append(todo)
        })
    }
}

newTODO.click(()=>{
    const input = prompt("");
    if (input.length <= 0)
        return;
    
    const todo = createDiv(input);
    
    list.prepend(todo)

    createCookie(list.innerHTML)
})

const createCookie = (content) => {
    document.cookie = `list=${encode(content)}; expire=${new Date(new Date().getTime()+(60*60*24*30*1000)).toUTCString()};path=/`;
}

const createDiv = (input) => {
    const todo = document.createElement(`div`);
    todo.className="each";   
    todo.innerText = input;
    todo.addEventListener("click", () => {
        todo.remove()
        createCookie(list.innerHTML)
    })
    return todo;
}

const encode = (payload) => {
    console.log(payload)
    return btoa(payload)
} 

const decode = (payload) => {
    return atob(payload)
}

load()
