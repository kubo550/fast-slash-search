"use strict";
var SLASH_KEY = "\\";
document.addEventListener('keydown', function (_a) {
    var key = _a.key;
    if (key === SLASH_KEY) {
        focusOnSearch();
    }
});
function focusOnSearch() {
    var searchInput = document.querySelector('input[type="search"]');
    if (!searchInput) {
        searchInput = document.querySelector('input');
    }
    if (!searchInput) {
        return;
    }
    searchInput.focus();
    setTimeout(function () {
        searchInput.value = '';
    }, 1);
}
