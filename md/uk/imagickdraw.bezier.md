- [« ImagickDraw::arc](imagickdraw.arc.md)
- [ImagickDraw::circle »](imagickdraw.circle.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює криву Безьє

# ImagickDraw::bezier

(PECL imagick 2, PECL imagick 3)

ImagickDraw::bezier — Малює криву Без'є

### Опис

public **ImagickDraw::bezier**(array `$coordinates`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює криву Безьє через набір точок на зображенні.

### Список параметрів

`coordinates`
Багатомірний масив на кшталт array( array( 'x' u003d\> 1, 'y' u003d\> 2 ), array(
'x' u003d\> 3, 'y' u003d\> 4))

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::bezier()****

` <?phpfunction bezier($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $strokeColoru003d new \ImagickPixel($strokeColor); $fillColoru003d new \ImagickPixel($fillColor); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $smoothPointsSet u003d [        [            ['x' u003d> 10.0 * 5, 'y' u003d> 10.0 * 5],            ['x' u003d> 30.0 * 5, 'y' u003d> 90.0 * 5],            ['x' u003d > 25.0 * 5, 'y' u003d> 10.0 * 5],            ['x' u003d> 50.0 * 5, 'y' u003d> 50.0 * 5],        ],        [            ['x' u003d> 50.0 * 5, 'y ' u003d> 50.0 * 5],            ['x' u003d> 75.0 * 5, 'y' u003d> 90.0 * 5],            ['x' u003d> 70.0 * 5, 'y' u003d> 10.0 * 5],            [' x' u003d> 90.0 * 5, 'y' u003d> 40.0 * 5],        ],    ]; foreach ($smoothPointsSet as $points) {        $draw->bezier($points); }    $disjointPoints u003d [        [            ['x' u003d> 10 * 5, 'y' u003d> 10 * 5],            ['x' u003d> 30 * 5, 'y' u003d> 90 * 5],            ['x' u003d> 25 * 5, 'y' u003d> 10 * 5],            ['x' u003d> 50 * 5, 'y' u003d> 50 * 5],        ],        [            ['x' u003d> 50 * 5, ' y' u003d> 50 * 5],            ['x' u003d> 80 * 5, 'y' u003d> 50 * 5],            ['x' u003d> 70 * 5, 'y' u003d> 10 * 5],            [ 'x' u003d> 90 * 5, 'y' u003d> 40 * 5],         ]    ]; $draw->translate(0, 200); foreach ($disjointPoints as $points) {        $draw->bezier($points); }    //Створення об'єкта зображення, в можна перетворити команди малювання. $imagicku003du003dnewImagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); //Перетворення команд малювання в об'єкті ImagickDraw    //в зображення. $imagick->drawImage($draw); //Відображення зображення в браузері   header("Content-Type:image/png"); echo $imagick->getImageBlob();}?> `
