
const tlacitkoElm = document.querySelector('#menu-tlacitko');
tlacitkoElm.addEventListener('click', () => {
    const polozky = document.querySelector('#menu-polozky');
    polozky.classList.toggle('show');
    const ikona = document.querySelector('i');
    ikona.classList.toggle('fa-bars');
    ikona.classList.toggle('fa-xmark');
    }
);






