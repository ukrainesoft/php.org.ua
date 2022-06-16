- [« ImagickDraw::polygon](imagickdraw.polygon.md)
- [ImagickDraw::pop »](imagickdraw.pop.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює ламану лінію

# ImagickDraw::polyline

(PECL imagick 2, PECL imagick 3)

ImagickDraw::polyline — Малює ламану лінію

### Опис

public **ImagickDraw::polyline**(array `$coordinates`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює ламану лінію з використанням поточної обведення, її ширини, кольору.
заливки або текстури за допомогою вказаного масиву координат.

### Список параметрів

`coordinates`
Масив координат x та y: array( array( 'x' u003d\> 4, 'y' u003d\> 6 ), array( 'x'
u003d\> 8, 'y' u003d\> 10))

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::polyline()****

` <?phpfunction polyline($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(5); $points u003d [        ['x' u003d> 40 * 5, 'y' u003d> 10 * 5],                         70 * 5, 'y' u003d> 50 * 5],        ['x' u003d> 60 * 5, 'y' u003d> 15 * 5]    ]; $draw->polyline($points); $image u003d new \Imagick(); $image->newImage(500, 300, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
