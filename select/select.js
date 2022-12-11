const select = () => {
    const select = document.getElementById('select')
    if (select) {
        select.classList.add('selects');
        let text = 'Выберите из списка';
        let labels = {
            labeln: 'Автозаводская',
            labelt: 'Нагорная',
        }
        const selectBlock = `
            <div class="select-input d-flex a-center">
                <div class="select-ico">
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 7.73893L5.9 0.187683L1.505 11.7489H0V14.2502H6.25V11.7489H5.64875L6.75 8.62643L10 14.2752L13.25 8.62643L14.3512 11.7489H13.75V14.2502H20V11.7489H18.4937L14.0987 0.187683L10 7.73893Z"
                        fill="black"/>
                    </svg>
                </div>
                <div class="select-text">
                    ${text}
                </div>
                <div class="close d-flex a-center j-center">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
                        fill="#141414" />
                    </svg>
                </div>
            </div>
            <div class="select-dropdown">
                <div class="select-top d-flex a-center">
                    <div class="top-text">Выберите метро</div>
                    <div class="mobile-dropmenu__close"> 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#7E7E80"/>
                        </svg>
                     </div>
                </div>
                <div class="select__list">
                    <label for="metro-1" class="select__label">
                        <span class="select-triger"></span>
                        ${labels.labeln}
                        <input type="radio" name="homes" value="${labels.labeln}" id="metro-1">
                    </label>
                    <label for="metro-2" class="select__label">
                        <span class="select-triger"></span>
                        ${labels.labelt}
                        <input type="radio" name="homes" value="${labels.labelt}" id="metro-2">
                    </label>
                </div>
                <div class="select-bottom">
                    <button>Выбрать</button>
                </div>
            </div>
        `;
        select.innerHTML = selectBlock;
        select.addEventListener('click', (e) => {
            const overlay = document.querySelector('.overlay');
            let selectInput = select.querySelector('.select-input');
            const selectClose = selectInput.querySelector('.close');
            const selectInputText = selectInput.querySelector('.select-text')
            if (select.classList.contains('open')){
                overlay.classList.remove('open')
                select.classList.remove('open')
            }
            else {
                select.classList.add('open')
                overlay.classList.add('open')
            }
            if (e.target.classList.contains('select__label')) {
                const option = e.target.querySelector('input').value;
                selectClose.innerHTML = `×`;
                selectInput.classList.add('active');
                selectInputText.textContent = option;
                if(select.classList.contains('open')){
                    overlay.classList.add('open')
                    select.classList.remove('open')
                }
                else{
                    select.classList.add('open')
                    overlay.classList.add('open')
                }
            }
            if (e.target.classList.contains('close')) {
                selectClose.innerHTML = `
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
                        fill="#141414" />
                    </svg>`
                    ;
                selectInput.classList.remove('active');
                selectInputText.textContent = text;
            }

            if (e.target.classList.contains('overlay')) {
                overlay.classList.remove('open')
            }
        })

    }
}
export default select;