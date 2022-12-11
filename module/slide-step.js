const step = () => {
    const steps = document.querySelector('.selects')
    if (steps) {
        const forms = document.querySelector('.forms')
        let ages = forms.elements.ages;
        let gender = forms.elements.floor;
        let format = forms.elements.format;
        let purposes = forms.elements.objective;
        let group = forms.elements.musclegroups;
        let active = forms.elements.workoutactivity;
        let close = document.querySelectorAll('.item-close')
        let closeSelect = document.querySelector('.close')
        let slides = document.getElementsByClassName("step-form__content");
        let slide = 0;
        let nextButtons = Array.from(document.getElementsByClassName("step-next"));
        let prevButtons = Array.from(document.getElementsByClassName("step-prev"));
        let slidesIndicator = document.getElementsByClassName("indicator-item")
        let line = document.getElementsByClassName("indicator-line")
        let sends = document.querySelector(".send")
        let radio = document.querySelectorAll("input[type='radio'");
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        const whiles = document.querySelectorAll('.border-item')
        let flags = [false, false, false, false, false, false, false];
        let age, genders, purposess = [], groups = [], actives, formats, homes;
        ages.forEach(item => {
            item.addEventListener('click', (e) => {
                ages.forEach(item => {
                    item.closest('label').classList.remove('active')
                    item.closest('label').classList.add('while')
                })
                item.closest('label').classList.add('active')
                item.closest('label').classList.remove('while')
            })
        })

        gender.forEach(item => {
            item.addEventListener('click', () => {
                gender.forEach(item => {
                    item.closest('label').classList.remove('active')
                    item.closest('label').classList.add('while')
                })
                item.closest('label').classList.add('active')
                item.closest('label').classList.remove('while')
            })
        })

        purposes.forEach(item => {
            item.addEventListener('change', () => {
                item.closest('label').classList.add('active')
            })
        })
        group.forEach(item => {
            item.addEventListener('change', () => {
                item.closest('label').classList.add('active')
            })
        })
        active.forEach(item => {
            item.addEventListener('change', () => {
                active.forEach(item => {
                    item.closest('label').classList.remove('active')
                    item.closest('label').classList.add('while')
                })
                item.closest('label').classList.add('active')
                item.closest('label').classList.remove('while')
            })
        })
        format.forEach(item => {
            item.addEventListener('change', () => {
                format.forEach(item => {
                    item.closest('label').classList.remove('active')
                    item.closest('label').classList.add('while')
                })
                item.closest('label').classList.add('active')
                item.closest('label').classList.remove('while')
            })
        })
        radio.forEach(
            (point) => {
                point.checked = false;
                point.addEventListener("change", radio_handler);
            }
        );
        checkboxes.forEach((check) => {
            check.addEventListener("change", check_handler);
        })
        nextButtons.forEach((next) => {
            next.disabled = true;
            next.addEventListener("click", (e) => {
                e.preventDefault();
                slides[slide].classList.add('hide');
                slides[(slide + 1)].classList.remove("hide");
                slide++;
                slidesIndicator[slide].classList.add('active');
                line[slide].classList.add('active');
            })
        })
        prevButtons.forEach((prev) => {
            prev.disabled = false;
            prev.addEventListener("click", (e) => {
                e.preventDefault();
                slides[slide].classList.add('hide');
                slides[(slide - 1)].classList.remove("hide");
                slide--;
                slidesIndicator[slide + 1].classList.remove('active');
                line[slide + 1].classList.remove('active');
            })
        })
        close.forEach(item => {
            item.addEventListener('click', (e) => {
                const checked = item.closest('.border-item').querySelector('input');
                checked.checked = false;
                switch (checked.name) {
                    case "ages":
                        age = false
                        break;
                    case "floor":
                        genders = false
                        break;
                    case "objective":
                        purposess = false
                        break;
                    case "musclegroups":
                        groups = false
                        break;
                    case "workoutactivity":
                        actives = false
                        break
                }
                item.closest('.border-item').classList.remove('active')
                button_activate();
                whiles.forEach(items => {
                    const whiles = items.closest('.border-item')
                    whiles.classList.remove('while')
                })
            })
        })
        closeSelect.addEventListener('click', () => {
            const options = document.querySelector("input[name='homes']")
            options.checked = false;
            switch (options.name) {
                case "workoutactivity":
                    homes = false
                    break
            }
        })
        sends.addEventListener("click", (e) => {
            e.preventDefault();
            if (slide == 3) {
                let fin = document.getElementById("steps");
                let res = {
                    "ages": age,
                    "floor": genders,
                };
                const purposessActive = forms.querySelectorAll('input[name="objective"]:checked');
                if (purposessActive.length) {
                    res.objective = Array.from(purposessActive).map(node => node.value);
                }
                const musclegroupsActive = forms.querySelectorAll('input[name="musclegroups"]:checked');
                if (musclegroupsActive.length) {
                    res.musclegroups = Array.from(musclegroupsActive).map(node => node.value);
                }
                const workoutactivityActive = forms.querySelector('input[name="workoutactivity"]:checked');
                if (workoutactivityActive) {
                    res.workoutactivity = workoutactivityActive.value;
                }
                res.format = formats;
                res.homes = homes;
                res = JSON.stringify(res);
                fin.innerHTML = res;
            }
        })
        function radio_handler() {
            switch (this.name) {
                case "ages":
                    age = this.value
                    break;
                case "floor":
                    genders = this.value
                    break;
                case "workoutactivity":
                    actives = this.value;
                    break;
                case "format":
                    formats = this.value;
                    break;
                case "homes":
                    homes = this.value;
                    break;
            }
            button_activate();
        }
        function check_handler() {
            let res = [];
            switch (this.name) {
                case "objective":
                    res = Array.from(purposess);
                    break;
                case "musclegroups":
                    res = Array.from(groups);
                    break;
            }
            let set = document.getElementsByName(`${this.name}`);
            set.forEach((el) => {
                res.push(el.value)
            })
            button_activate();
        }
        function button_activate() {
            flags[0] = age && genders;
            flags[1] = forms.querySelector('input[name="objective"]:checked') ||
            forms.querySelector('input[name="workoutactivity"]:checked');
            formats ? flags[2] = true : flags[2] = false;
            for (let i = 0; i < nextButtons.length; i++) {
                if (flags[i]) {
                    nextButtons[i].disabled = false;
                    nextButtons[i].classList.add('active')
                } else {
                    nextButtons[i].disabled = true;
                    nextButtons[i].classList.remove('active')
                }
            }
        }

    }
}
export default step;