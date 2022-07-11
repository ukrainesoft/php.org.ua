- [« ImagickDraw::point](imagickdraw.point.md)
- [ImagickDraw::polyline »](imagickdraw.polyline.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює багатокутник

# ImagickDraw::polygon

(PECL imagick 2, PECL imagick 3)

ImagickDraw::polygon — Малює багатокутник

### Опис

public **ImagickDraw::polygon**(array `$coordinates`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює багатокутник з використанням поточної обведення, її ширини, кольору.
заливки або текстури за допомогою вказаного масиву координат.

### Список параметрів

`coordinates`
Багатовимірний масив на кшталт array( array( 'x' u003d\> 3, 'y' u003d\> 4 ),
array( 'x' u003d 2, 'y' u003d 6 ) );

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::polygon()****

`<?phpfunction polygon($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setStrokeWidth(4); $draw->setFillColor($fillColor); $points u003d [        ['x' u003d> 40 * 5, 'y' u003d> 10 * 5],                         70 * 5, 'y' u003d> 50 * 5],        ['x' u003d> 60 * 5, 'y' u003d> 15 * 5],    ]; $draw->polygon($points); $image u003d new \Imagick(); $image->newImage(500, 300, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
