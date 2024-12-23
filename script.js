import * as util from './utils.js';

const inputElements=document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");

const onClickHandler = () => {
    const dayElement = document.querySelector('.card__input[name="day"]');
    const monthElement = document.querySelector('.card__input[name="month"]');
    const yearElement = document.querySelector('.card__input[name="year"]');
    const resultElement = document.querySelector('.card__resultValue');

    if(!util.isDateValid(dayElement,monthElement,yearElement)){
        resultElement.textContent="--";
        return;
    }
    resultElement.textContent = util.calculateAge(yearElement.value, monthElement.value,dayElement.value);

};

inputElements.forEach(item =>{
    item.addEventListener("keydown", (event) => {event.key === "Enter" && onClickHandler();
});
} );

submitButton.addEventListener("click", onClickHandler);