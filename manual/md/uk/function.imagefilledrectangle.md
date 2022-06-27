- [«imagefilledpolygon](function.imagefilledpolygon.md)
- [imagefilltoborder »](function.imagefilltoborder.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання зафарбованого прямокутника

#imagefilledrectangle

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefilledrectangle — Малювання зафарбованого прямокутника

### Опис

**imagefilledrectangle**(
[GdImage](class.gdimage.md) `$image`,
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`,
int `$color`
): bool

Створює прямокутник, зафарбований кольором `color` у заданому зображенні
`image`. Початкова точка 1, кінцева 2. 0,0 - верхній лівий кут
зображення.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x1`
x-координат точки 1.

`y1`
y-координат точки 1.

`x2`
x-координат точки 2.

`y2`
y координати точки 2.

`col`
Колір заливки. Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagefilledrectangle()****

`<?php//Створення зображення 55x30$im u003d imagecreatetruecolor(55, 30);$white u003d imagecolorallocate($im, 255, 255, 255);// Малювання прямокутника $white);// Збереження зображенняimagepng($im, './imagefilledrectangle.png');imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagefilledrectangle()](images/21009b70229598c6a80eef8b45bf282b-imagefilledrectangle.png)
