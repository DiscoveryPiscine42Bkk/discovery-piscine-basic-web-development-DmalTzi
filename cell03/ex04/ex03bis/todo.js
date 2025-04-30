const newTODO = $("#new");
const deleteTODO = $("#delete");
const list = $("#ft-list");

deleteTODO.css("visibility", "hidden");
const cookie = document.cookie.slice(5,-1)

if (cookie.length > 0) {
    list.html(cookie);
    deleteTODO.css("visibility", "visible");
}
newTODO.click(() => {
    const input = prompt("");
    if (input.length <= 0)
        return;
    
    const content = `<div class="each">${input}</div>`;
    list.html(content + list.html());
    document.cookie = `list=${list.html()}; expire=${new Date().getTime()+(60*60*24*30*1000)};path=./;SameSite=Lax`;
    if (list.html().length > 0) deleteTODO.css("visibility", "visible");
})

deleteTODO.click(() => {
    if (window.confirm("Do you want to delete all TO DO?")) {
        list.html("")
        deleteTODO.css("visibility", "hiddle");
        document.cookie = `list=; expire=${new Date(0).toUTCString()}`;
    }
})
