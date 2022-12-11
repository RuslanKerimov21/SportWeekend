const tab = () => {
    const step = document.getElementById('toggle-1')
        const tabTriger = document.querySelectorAll('.pr');
        const tabContent = document.querySelectorAll('.toggle')
        tabTriger.forEach(triger => {
            triger.addEventListener('click', (e) => {
                const id = triger.getAttribute('data-tab');
                let currentContent = document.querySelector(id);
                tabContent.forEach(content => {
                    content.classList.remove('active')
                });
                currentContent.classList.add('active');
                if (e.target.classList.contains('item-close')) {
                    tabContent.forEach(content => {
                        content.classList.remove('active')
                    });
                }
                if(e.target.classList.contains('triger')){
                    tabTriger.forEach(item =>{
                        item.classList.remove('active')
                    })
                    e.target.classList.add('active')
                }
            });
            
            // if(triger.classList.contains('item-close')){
            //    console.log('клик по крестику таба')
            // }
        });


};
export default tab;