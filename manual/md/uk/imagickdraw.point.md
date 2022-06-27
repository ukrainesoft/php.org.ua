- [« ImagickDraw::pathStart](imagickdraw.pathstart.md)
- [ImagickDraw::polygon »](imagickdraw.polygon.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює точку

# ImagickDraw::point

(PECL imagick 2, PECL imagick 3)

ImagickDraw::point — Малює точку

### Опис

public **ImagickDraw::point**(float `$x`, float `$y`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює точку, використовуючи поточний колір та товщину обведення за вказаними
координат.

### Список параметрів

`x`
Координата х.

`y`
Координати y.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::point()****

`<?phpfunction point($fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setFillColor($fillColor); for ($x u003d 0; $x < 10000; $x++) {        $draw->point(rand(0, 500), rand(0, 500)); }   $imagick u003d new \Imagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
