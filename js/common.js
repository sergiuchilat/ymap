readJson('js/store_list.json');

//Функция для сборки карты и отрисовки маршрута
function init() {
    generateLinks();
    handleCalculationEND();
    walkPoints(0);
    new ymaps.Map('map', {
        center: routePoints[0].point,
        zoom: mapZoom,
        controls: [
            'smallMapDefaultSet',
        ]
    }, {
        buttonMaxWidth: 350
    });
}

//Запуск функции инициализации
ymaps.ready(init);