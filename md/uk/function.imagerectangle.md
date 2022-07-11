- [«imagepolygon](function.imagepolygon.md)
- [imageresolution »](function.imageresolution.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання прямокутника

#imagerectangle

(PHP 4, PHP 5, PHP 7, PHP 8)

imagerectangle — Малювання прямокутника

### Опис

**imagerectangle**(
[GdImage](class.gdimage.md) `$image`,
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`,
int `$color`
): bool

**imagerectangle()** малює прямокутник із заданими координатами
кутів.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x1`
Верхня ліва x координата.

`y1`
Верхня ліва y координата 0, 0 – лівий верхній кут зображення.

`x2`
Нижня права x координата.

`y2`
Нижня права y координата.

`col`
Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagerectangle()****

`<?php// Створення зображення 200 x 200$canvas u003d imagecreatetruecolor(200, 200);// Створення квітів$pink u003d imagecolorallocate($canvas, 255, 15 255, 255);$green u003dimagecolorallocate($canvas, 132, 135, 28); 120, 100, $white);imagerectangle($canvas, 100, 120, 75, 160, $green); ($canvas);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagerectangle()](images/21009b70229598c6a80eef8b45bf282b-imagerectangle.jpg)
