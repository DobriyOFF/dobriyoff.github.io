(() => {
    let counter = document.querySelector('.counter');
    const btnGroup = document.querySelector('.btn-group');
    const cards = document.querySelectorAll('.card');
    const input = document.querySelector('.aside-input');
    const cardd = document.querySelector('.card');

    //начать игру(2)
    const btnStartGame = document.createElement('button');
    btnStartGame.classList.add('btn');
    btnStartGame.textContent = 'Начать игру';
    btnGroup.append(btnStartGame);
    //конец (2)

    //сыграть еще раз(1)
    /*** const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'Вы отгадали';
    btn.append(btnStartGame); ***/

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let col = 0; //счетчик на победу

    //магия
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        this.classList.add('flip');
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        secondCard = this;
        lockBoard = true;
        checkForMatch();
    }

    //проверяю схожие карты
    function checkForMatch() {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        if (isMatch) {
            disableCards();
            col++;
        } else {
            unflipCards();
        }
        /*** включить если убрать таймер ***/
        // if (col === 2) {
        //      counter.append(btn) 
        // }
    }

    //Удаляю оброботчики событий с карт
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }

    //Поворачиваю обратно карту
    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    //Обнуляю доску
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    //Рандомим карточки
    function shuffle() {
        cards.forEach(card => {
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
        });
    };

    //Кнопка сыграть еще раз
    function cleanBoard() {
        cards.forEach(card => {
            card.classList.remove('flip');
            card.addEventListener('click', flipCard);
            resetBoard();
        });
        shuffle();
    }

    //(2)
    //Таймер на 60 сек
    function timer() {
        counter.textContent = parseInt(counter.textContent) - 1;
        if (counter.textContent >= 0) { //если меньше 0 - то работаем дальше
            //Функция timer запускает саму себя с задержкой в 1 секунду:
            if (counter.textContent == 0 && col != (input.value / 2)) {
                btnStartGame.disabled = false;
                btnStartGame.classList.remove('disabled')
                cards.forEach(card => {
                    card.classList.remove('flip');
                    card.classList.remove('disable-card');
                });
                cards.forEach(card => card.removeEventListener('click', flipCard));
                alert('Вы проиграли');
                cleanBoard();
            }
            if (col === (input.value / 2)) {
                btnStartGame.disabled = false;
                btnStartGame.classList.remove('disabled')
                cards.forEach(card => {
                    card.classList.remove('flip');
                    card.classList.remove('disable-card');
                });
                cards.forEach(card => card.removeEventListener('click', flipCard));
                alert('Вы выиграли');
                counter.textContent = 0;
                //counter.classList.add('inv'); // очень не хочу делать по нормальному, ну уж очень много времени провозился с этим таймером
                //counter2.classList.add('inv');
            }
            if (counter.textContent > 0) {
                setTimeout(timer, 1000);
            }

        }
    }
    //конец (2)

    /*** btn.addEventListener('click', cleanBoard); ***/
    //(2)
    btnStartGame.addEventListener('click', function(e) {
        counter.textContent = 60;
        col = 0;
        cards.forEach(card => card.addEventListener('click', flipCard));
        if (input.value % 2 === 0 && input.value != '') {
            this.disabled = true;
            this.classList.add('disabled')
            for (let i = input.value; i < cards.length; i++) {
                cards[i].classList.add('disable-card');
            }
            timer();
            shuffle();
        } else {
            counter.textContent = 'Введите четное число от 2 до 10'
        }

    });
    //конец (2)
})();