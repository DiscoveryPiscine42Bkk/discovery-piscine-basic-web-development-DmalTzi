const newTODO = document.getElementById("new");
const deleteTODO = document.getElementById("delete");
const list = document.getElementById("ft-list");
deleteTODO.style.visibility = "hidden"
const cookie = document.cookie.slice(5,-1)

if (cookie.length > 0) {
    list.innerHTML = cookie
    deleteTODO.style.visibility = "visible";
}
newTODO.addEventListener("click", () => {
    const input = prompt("");
    if (input.length <= 0)
        return;
    
    const content = `<div class="each">${input}</div>`;
    list.innerHTML = content + list.innerHTML;
    document.cookie = `list=${list.innerHTML}; expire=${new Date(new Date().getTime()+(60*60*24*30*1000)).toUTCString()};path=/`;
    if (list.innerHTML.length > 0) deleteTODO.style.visibility = "visible"
})

deleteTODO.addEventListener("click", () => {
    if (window.confirm("Do you want to delete all TO DO?")) {
        list.innerHTML = "";
        deleteTODO.style.visibility = "hidden"
        document.cookie 
        document.cookie = `list=; expire=${new Date(0).toUTCString()}`;
    }
})
