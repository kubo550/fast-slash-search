const SLASH_KEY = "\\"

document.addEventListener('keydown', ({ key }) => {
    if (key === SLASH_KEY) {
        focusOnSearch()
    }
})

function focusOnSearch() {
    let searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
    if (!searchInput) {
        searchInput = document.querySelector('input') as HTMLInputElement;
    }
    if (!searchInput) {
        return
    }

    searchInput.focus()
    setTimeout(() => {
        searchInput.value = '';
    }, 1)
}
