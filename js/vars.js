//Массив точек для изначального списка координат
let routePoints = [
    {
        point: [47.118339, 26.166353],
        used: 1
    }
];

//Массив точек для оптимального маршрута
let trueRoute = [
    [47.118339, 26.166353]
];

//Начальный зум для карты
let mapZoom = 10;

//Цвет линии маршрута
let routeColor = '#000000';

//Толщина линии маршрута
let routeWidth = 10;

//Прозрачность линии маршрута
let routeOpacity = 0.7;

let pointLinks = [];
let distances = [];
let totalPointLinks = 0;
let totalCalculatedDistances = 0;