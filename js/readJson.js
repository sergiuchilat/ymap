/**
 * Функция для чтения координат точек из файла json
 * @param filePath - путь к файлу json
 * */
function readJson (filePath) {
    $.getJSON(filePath, function (data) {
        $.each(data.rows, function (key, value) {
            routePoints.push({point: [value.lat, value.lng], used: 0});
        });
    });
}
