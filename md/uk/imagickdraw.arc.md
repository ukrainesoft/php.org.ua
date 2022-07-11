- [« ImagickDraw::annotation](imagickdraw.annotation.md)
- [ImagickDraw::bezier »](imagickdraw.bezier.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Малює дугу

# ImagickDraw::arc

(PECL imagick 2, PECL imagick 3)

ImagickDraw::arc — Малює дугу

### Опис

public **ImagickDraw::arc**(
float `$sx`,
float `$sy`,
float `$ex`,
float `$ey`,
float `$sd`,
float `$ed`
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Малює дугу, що потрапляє у вказаний обмежуючий прямокутник на
зображення.

### Список параметрів

`sx`
Початкова координата X обмежує прямокутника

`sy`
Початкова координата Y обмежує прямокутника

`ex`
Кінцева координата X обмежує прямокутника

`ey`
Кінцева координата Y обмежує прямокутника

`sd`
Початковий градус обертання

`ed`
Кінцевий градус обертання

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::arc()****

` <?phpfunction arc($strokeColor, $fillColor, $backgroundColor, $startX, $startY, $endX, $endY, $startAngle, $endAngle) {    //Створення для об'єкт| $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $draw->arc($startX, $startY, $endX, $endY, $startAngle, $endAngle); // Створення об'єкта зображення, в який можна перетворити команди малювання. $image u003d new \Imagick(); $image->newImage(IMAGE_WIDTH, IMAGE_HEIGHT, $backgroundColor); $image->setImageFormat("png"); //Перетворення команд малювання в об'єкті ImagickDraw    //в зображення. $image->drawImage($draw); //Відображення зображення в браузері   header("Content-Type:image/png"); echo $image->getImageBlob();}?> `
