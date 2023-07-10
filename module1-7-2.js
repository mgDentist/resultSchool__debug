// начальный код
// const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

// if (temperatureInCelsius === 0) {
//     alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//     alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
// alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.`);

const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
// console.log(temperatureInCelsius , typeof(temperatureInCelsius)); // для проверки что выводит , видим что строку и явно преобразуем ниже в число

if (temperatureInCelsius !== null) {
    newTemperature = Number(temperatureInCelsius.replaceAll(' ', ''));

    if (temperatureInCelsius <= 0) {
        alert('0 градусов по Цельсию или ниже - это температура замерзания воды');
    } else if (temperatureInCelsius > 0) {
        alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
    } else if (isNaN(temperatureInCelsius)) {
        alert('Лучше бы вводить число');
    } 
} else {
    alert('Возвращайтес поскорее!');
};
// console.log(temperatureIncelsius); //ищем переменную и не находим, опкчатка, правим опучатку
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
