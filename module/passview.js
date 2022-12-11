const passview = () => {
    const labelview = document.querySelectorAll('.password-outher')
    labelview.forEach(item =>{
        item.addEventListener('click', (e) =>{
            const input = item.closest('.popup-input').querySelector("input");
            if(input.getAttribute('type') == 'password'){
                input.setAttribute('type', 'text')
            }
            else{
                input.setAttribute('type', 'password')
            }
        })
    })


}
export default passview;