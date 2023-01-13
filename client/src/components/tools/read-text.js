const ReadText = async elementInput => {
    var input = document.getElementById(elementInput)
    navigator.clipboard.readText().then((text) => {
        input.value = text
    })
}

export default ReadText