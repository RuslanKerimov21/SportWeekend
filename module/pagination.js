const Pagination = () => {
  const allpag = document.querySelector('.more')
  if (allpag) {
    let items = 6;
    const more = document.querySelectorAll('.more');
    more.forEach(item => {
      item.addEventListener('click', (e) => {
        items += 6;
        if (e.target.classList.contains('more-1')) {
          const array = Array.from(document.querySelector('.archives').children);
          const labels = array.slice(0, items);
          labels.forEach(el => el.classList.add('show'));
          if (labels.length === array.length) {
            item.style.display = 'none';
          }
        }
        if (e.target.classList.contains('more-2')) {
          const arraytwo = Array.from(document.querySelector('.calendar-events').children);
          const labelst = arraytwo.slice(0, items);
          labelst.forEach(el => el.classList.add('show'));
          if (labelst.length === arraytwo.length) {
            item.style.display = 'none';
          }
        }
        if (e.target.classList.contains('more-3')) {
          const arraythre = Array.from(document.querySelector('.offline-trainings').children);
          const labelsf = arraythre.slice(0, items);
          labelsf.forEach(el => el.classList.add('show'));
          if (labelsf.length === arraythre.length) {
            item.style.display = 'none';
          }
        }
        if (e.target.classList.contains('more-4')) {
          const arrayfo = Array.from(document.querySelector('.individual-trainings').children);
          const labelsc = arrayfo.slice(0, items);
          labelsc.forEach(el => el.classList.add('show'));
          if (labelsc.length === arrayfo.length) {
            console.log('клик')
            item.style.display = 'none';
          }
        }
      })
    });
  }
}
export default Pagination;