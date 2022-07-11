- [«
ImagickDraw::setStrokeDashOffset](imagickdraw.setstrokedashoffset.md)
- [ImagickDraw::setStrokeLineJoin
»](imagickdraw.setstrokelinejoin.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає форму, яка використовуватиметься наприкінці відкритих
внутрішніх контурів при їх обведенні

# ImagickDraw::setStrokeLineCap

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeLineCap — Задає форму, яка буде
використовуватися в кінці відкритих внутрішніх контурів при їх обведенні

### Опис

public **ImagickDraw::setStrokeLineCap**(int `$linecap`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає форму, яка використовуватиметься наприкінці відкритих внутрішніх
контурів при їх обведенні.

### Список параметрів

`linecap`
Одна з констант
[LINECAP](imagick.constants.md#imagick.constants.linecap)
(`imagick::LINECAP_*`).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeLineCap()****

` <?phpfunction setStrokeLineCap($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(25); $lineTypes u003d [\Imagick::LINECAP_BUTT, \Imagick::LINECAP_ROUND, \Imagick::LINECAP_SQUARE,]; $offset u003d 0; foreach ($lineTypes as $lineType) {        $draw->setStrokeLineCap($lineType); $draw->line(50 + $offset, 50, 50 + $offset, 250); $offset+u003du003d50; }   $imagick u003d new \Imagick(); $imagick->newImage(300, 300, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
