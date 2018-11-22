/**
 * Фнкция поиска оптимального пути
 * используя кратчайшее расстояние между двумя точками
 * на карте.
 * @return array - массив упорядоченных  точек
 */
function fwDist() {

    let i;
    let len;
    let min;
    let cIndex;
    let minIndex = 0;
    let usedPoints = 1;
    let pointsCount = routePoints.length;

    while (usedPoints < pointsCount) {

        i = 0;
        len = 0;
        cIndex = trueRoute.length - 1;
        min = Infinity;

        while (i < pointsCount) {

            if (cIndex === i || routePoints[i].used) {
                i++;
                continue;
            }

            //Вычисление расстояния между точками A - B
            len = Math.acos(
                Math.sin(trueRoute[cIndex][0]) * Math.sin(routePoints[i].point[0])
                +
                Math.cos(trueRoute[cIndex][0])
                *
                Math.cos(routePoints[i].point[0])
                *
                Math.cos(trueRoute[cIndex][1] - routePoints[i].point[1])
            );

            //Сравнение
            if (len < min) {
                min = len;
                minIndex = i;
            }
            i++;
        }

        //Запись новой точки в массив оптимального пути
        trueRoute.push(routePoints[minIndex].point);
        routePoints[minIndex].used = 1;
        usedPoints++;
    }

    return trueRoute;
}