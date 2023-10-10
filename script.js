window.onhashchange = function() {
    const headerLinks = document.getElementsByClassName('header-nav__link')
    const arr = Array.from(headerLinks)
    arr.forEach(item => item.classList.remove('selected'))

    const link = document.querySelector(`a[href="${location.hash}"]`)
    link.classList.add('selected')
}