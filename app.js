const upBtn = document.querySelector('.up-button'); // находим кнопку вверх
const downBtn = document.querySelector('.down-button'); // кнопка вниз

const sidebar = document.querySelector('.sidebar'); // левая часть 
const mainSlide = document.querySelector('.main-slide');// правая часть 

const slidesCount = mainSlide.querySelectorAll('div').length; // число слайдов
const container = document.querySelector('.container'); // контейнер со всем что выше

let activeSlideIndex = 0; // активный слайд

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;  // 6 слайдов  - 1 слайд и умножить на 100вх(100% высота экрана)

upBtn.addEventListener('click', () =>{ // вешаем событие клика на верхнюю кнопку 
    changeSlide('up')       // вызываем функцию 
    
})


downBtn.addEventListener('click', () =>{ // на нижнюю кнопку так же 
    changeSlide('down')
})

document.addEventListener('keydown', event => { // событие на перелистывание слайдов с помощью кнопок верх вниз 
    if (event.key ==='ArrowUp') {
        changeSlide('up')
    }else if(event.key ==='ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) { // что делает функция обьясняем 
    if(direction === 'up') {            /*есть один аргумент у функции который будет отвечать за то какая именно кнопка нажата 
                                          если нажата кнопка вверх то добавь плюс 1 к индексу слайдов , но есть условие если активный слайд равен последнему слайду ( то есть мы долистали до конца, то мы сбрасываем число  на 0 тем самым возвращаясь назад )                  

                                        */
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }

    }else if (direction === 'down' ) {
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;  // переменная показывает какая высота у контейнера, взависимости от нее программа узнает на сколько надо листать вверх или вниз 
    console.log(height);

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`; // тут добавляются стили они с помощью который и происходит перелистывание обоих сторон  Пример : Поверни по Игрек  1слайд умноженый на высоту контейнера в пиксеях расстояние 
    console.log(mainSlide.style.transform) // почему блять минус?? Окей, смотри все сл слайды находятся в колонке которая идет сверху вниз вот так вот 

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`; // а тут схуяли без минуса да? потмоу что мы мотаем эту часть сверху вниз , понял? мы изначально переместили левую часть в самый конец 
    
}

// function Calculator(){
//     this.read = function(a, b)
//     {
//        this.a = +prompt('Введи число', '0')
//        this.b = +prompt('Введи число', '0')
//     }
//     this.sum = function(a, b)
//     {
//         return this.a + this.b 
//     }
//     this.mul = function(a, b)
//     {
//         return this.a * this.b
//     }    
// }

// let calculator = new Calculator();

// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


