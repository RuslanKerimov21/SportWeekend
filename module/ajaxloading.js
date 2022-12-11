const loading = () => {
    const ajax = document.getElementById('ajax-contents')
    if (ajax) {
        let lengt = 0;
        const moreon = document.querySelector('.more-1')
        const moreto = document.querySelector('.more-2')
        const morethre = document.querySelector('.more-3')
        const morefo = document.querySelector('.more-4')
        let count = document.querySelectorAll(".content-length");
        const calendar = document.querySelectorAll('.calendars');
        const trainings = document.querySelectorAll('.trainings');
        const records = document.querySelectorAll('.archives-item');
        let countone = count[0], counttwo = count[1], counthre = count[2];
        count.forEach(function (item) {
            item.textContent = lengt;
            countone.textContent = records.length;
            counttwo.textContent = calendar.length;
            counthre.textContent = trainings.length;
        });
        if (document.querySelector('.archives')) {
            const archives = Array.from(document.querySelector('.archives').children);
            if (archives.length < 7) {
                moreon.style.display = 'none';
            }
        }
        if (document.querySelector('.calendar-events')) {
            const calendars = Array.from(document.querySelector('.calendar-events').children);
            if (calendars.length < 7) {
                moreto.style.display = 'none';
            }
        }
        if (document.querySelector('.offline-trainings')) {
            const offlinees = Array.from(document.querySelector('.offline-trainings').children);
            if (offlinees.length < 7) {
                morethre.style.display = 'none';
            }
        }
        if (document.querySelector('.individual-trainings')) {
            const individual = Array.from(document.querySelector('.individual-trainings').children);
            if (individual.length < 7) {
                morefo.style.display = 'none';
            }
        }
    }
}
export default loading;