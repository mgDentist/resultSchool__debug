// начальный код 
// let health = prompt('Введите число параметра "здоровье" для персонажа')
// if () {
//     health < 0 || health!
//     alert('Параметр "здоровье" должен быть больше нуля!')
// } else () {
//     alert(Параметр "здоровье" равен ${ Health });
// }

// исправления
// let health = prompt(`Введите число параметра "здоровье" для персонажа`);
// console.log(typeof (health), health);
// if (health <= 0 || !health) {
//     alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//     alert(`Параметр "здоровье" равен ${health}`);
// }
// console.log(Health) // понимаем что переменная указана неверно

// код правящий вывод сообщения типа "Параметр "здоровье" равен Nan или вывод текста вместо числа и предотвартит ошибку по надаьтю на "отмена"
let health = prompt(`Введите число параметра "здоровье" для персонажа`);
let healthTotal = null;

if (health !== null) {
    healthTotal = Number(health.replaceAll(' ', ''));
};

if (health <= 0) {
    alert('Параметр "здоровье" должен быть больше нуля!');
} else if (isNaN(healthTotal)) {
    alert('Параметр "здоровье" должен быть ЧИСЛОМ больше нуля!');
} else {
    alert(`Параметр "здоровье" равен ${health}`);
};

