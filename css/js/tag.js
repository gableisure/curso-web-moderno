document.querySelectorAll('.tag').forEach(element => {
    const tagName = element.tagName.toLowerCase()

    element.style.borderColor = '#cecece'
    
    if(!element.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '#cecece'
        label.innerHTML = tagName
        element.insertBefore(label, element.childNodes[0])
    }
    
})