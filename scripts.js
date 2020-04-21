
function toggleFlatten() {
    document.getElementById('card').classList.contains('flattened') ? unflatten() : flatten();
}

function flatten() {
    let thisCard = document.getElementById('card')
    thisCard.classList.add('flattened');
    
    // setTimeout(() => {
    //     unflatten();
    // }, 3000)
}

function unflatten() {
    let thisCard = document.getElementById('card')
    thisCard.classList.remove('flattened')
}