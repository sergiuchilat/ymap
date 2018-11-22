/**
 * Генерация всех возможных комбинаций между точками маршрута
 * */

function generateLinks(){
    for(let i  = 0 ; i < routePoints.length - 1 ; i++){
        for(let j = i + 1 ; j < routePoints.length ; j++){
            let segment = {
                start: routePoints[i],
                end: routePoints[j]
            };
            pointLinks.push(segment);
            totalPointLinks++;
        }
    }
}

/**
 * Слушатель на завершение расчета всех расстояний
 * */
function handleCalculationEND(){
    setTimeout(function () {
        if(totalCalculatedDistances >= totalPointLinks - 1){
            makeRoute();
        }else{
            handleCalculationEND();
        }
    }, 100)
}

/**
 * Обход всех пар точек
 * */
function walkPoints(i) {
    if (i < totalPointLinks - 1) {
        calculateDistance(i)
        walkPoints(i + 1)
    }
}

/**
 * Расчет расстояния для одной пары точек
 * */
function calculateDistance(i) {
    let len = 0;
    let route = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            pointLinks[i].start.point,
            pointLinks[i].end.point
        ]
    }, {
            boundsAutoApply: false
    });

    route.model.events.add('requestsuccess', function () {
        let activeRoute = route.getActiveRoute();
        len = activeRoute.properties.get("distance").value;
        distances[i] = len;
        totalCalculatedDistances++
    });
}

function makeRoute(){
    /*Todo Тут уже нужно написать алгоритм который построит нужный маршрут из уже расчитанных расстояний*/
    console.log('CALCULATION FINISHED');
    console.log(distances);
}