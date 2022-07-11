- [« ImagickDraw::setStrokeColor](imagickdraw.setstrokecolor.md)
- [ImagickDraw::setStrokeDashOffset
»](imagickdraw.setstrokedashoffset.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає патерн із штрихів та пробілів, які використовуються для обведення
контурів

# ImagickDraw::setStrokeDashArray

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeDashArray — Задає патерн зі штрихів та пробілів,
використовуваних для обведення контурів

### Опис

public **ImagickDraw::setStrokeDashArray**(array `$dashArray`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає патерн із штрихів та пробілів, який використовується для обведення контурів.
strokeDashArray є масивом чисел, що визначають довжину
чергуються штрихів і прогалин у пікселях. Якщо вказано непарне
кількість значень, то список значень повторюється, щоб отримати
парна кількість значень. Щоб видалити існуючий масив штрихів,
необхідно передати number_elements зі значенням нуль та dash_array зі
значенням null. Типовий масив strokeDashArray\_ може містити
елементи 5 3 2.

### Список параметрів

`dashArray`
Масив чисел з плаваючою точкою.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setStrokeDashArray()****

` <?phpfunction setStrokeDashArray($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(4); $draw->setStrokeDashArray([10, 10]); $draw->rectangle(100, 50, 225, 175); $draw->setStrokeDashArray([20, 5, 20, 5, 5, 5,]); $draw->rectangle(275, 50, 400, 175); $draw->setStrokeDashArray([20, 5, 20, 5, 5]); $draw->rectangle(100, 200, 225, 350); $draw->setStrokeDashArray([1, 1, 1, 1, 2, 2, 3, 3, 5, 5, 8, 8, 13, 13, 21, 21, 34, 34, 55, 58, 5 , 144, 144, 233, 233, 377, 377, 610, 610, 987, 987, 1597, 1597, 2584, 2584, 4181, $draw->rectangle(275, 200, 400, 350); $image u003d new \Imagick(); $image->newImage(500, 400, $backgroundColor); $image->setImageFormat("png"); $image->drawImage($draw); header("Content-Type: image/png"); echo $image->getImageBlob();}?> `
