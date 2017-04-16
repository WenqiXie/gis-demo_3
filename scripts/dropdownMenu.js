var dropdownButton = e('#id-button-marker')
bindEvent(dropdownButton, 'click', function(event) {
    var target = event.target
    toggleClass(target.parentElement, 'open')
})
