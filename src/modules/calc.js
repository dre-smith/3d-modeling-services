const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcInputs = calcBlock.querySelectorAll('.calc-block>input'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    calcInputs.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g, '');
        });
    });

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        };

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        };

        const animateNumbers = () => {
            let steps = 0;
            const changeNum = setInterval(() => {
                steps += parseInt(total / 100);
                if (steps >= total) {
                    clearInterval(changeNum);
                    steps = total;
                };
                totalValue.innerHTML = steps;
            });
        };
        if (typeValue && squareValue) {
            total = parseInt(price * typeValue * squareValue * countValue * dayValue);
        };
        totalValue.textContent = animateNumbers(total);
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum()
        };
    });
};

export default calc;