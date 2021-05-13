let closeButton = document.querySelector('.button.close')
let menuButton = document.querySelector ('.button.menu')
let sideBar = document.querySelector ('.sidebar')

function toggleSidebar()
{
    sidebar.classList.toogle('sidebar-active')
}

closeButton.addEventListener ('click',toggleSidebar)
menuButton.addEventListener('click',toggleSidebar)


