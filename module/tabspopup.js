const tabpopup = () => {
    const step = document.getElementById('toggle-1')
        const tabTriger = document.querySelectorAll('.triger');
        const tabContent = document.querySelectorAll('.overlay')
        tabTriger.forEach(triger => {
            triger.addEventListener('click', (e) => {
                const id = triger.getAttribute('data-tab');
                let currentContent = document.querySelector(id);
                tabContent.forEach(content => {
                    content.classList.remove('active')
                });
                currentContent.classList.add('active');
            });
            
            // if(triger.classList.contains('item-close')){
            //    console.log('клик по крестику таба')
            // }
        });


};
export default tabpopup;