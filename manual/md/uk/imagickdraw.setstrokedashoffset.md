- [«
ImagickDraw::setStrokeDashArray](imagickdraw.setstrokedasharray.md)
- [ImagickDraw::setStrokeLineCap »](imagickdraw.setstrokelinecap.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає зсув у штриховому патерні для початку штрихування

# ImagickDraw::setStrokeDashOffset

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeDashOffset — Задає зсув у штриховому патерні
для початку штрихування

### Опис

public **ImagickDraw::setStrokeDashOffset**(float `$dash_offset`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає зміщення у штриховому патерні для початку штрихування.

### Список параметрів

`dash_offset`
Зміщення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**ImagickDraw::setStrokeDashOffset()****

` <?phpfunction setStrokeDashOffset($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(4); $draw->setStrokeDashArray([20, 20]); $draw->setStrokeDashOffset(0); $draw->rectangle(100, 50, 225, 175); //Початок ефекту штрихування в середині суцільної частини    $draw->setStrokeDashOffset(10); $draw->rectangle(275, 50, 400, 175); //Початок ефекту штрихування в просторової часті    $draw->setStrokeDashOffset(20); $draw->rectangle(100, 200, 225, 350); $draw->setStrokeDashOffset(5); $draw->rectangle(275, 200, 400, 350); $image u003d new \Imagick(); $image->newImage(500, 400, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
