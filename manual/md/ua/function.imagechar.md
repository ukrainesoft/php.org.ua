- [«imagebmp](function.imagebmp.md)
- [imagecharup »](function.imagecharup.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання символу по горизонталі

#imagechar

(PHP 4, PHP 5, PHP 7, PHP 8)

imagechar — Малювання символу по горизонталі

### Опис

**imagechar**(
[GdImage](class.gdimage.md) `$image`,
[GdFont](class.gdfont.md)\|int `$font`,
int `$x`,
int `$y`,
string `$char`,
int `$color`
): bool

**imagechar()** малює перший символ аргументу `char` на зображенні з
ідентифікатором `image` на координатах `x`, `y` (координати відраховуються
з лівого верхнього кута) кольором `color`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`font`
Може приймати значення 1, 2, 3, 4, 5 для вбудованих шрифтів
кодування latin2 (вище число відповідає більшому шрифту) або
екземпляр [GdFont](class.gdfont.md), що повертається функцією
[imageloadfont()](function.imageloadfont.md).

`x`
x-координата початку малювання.

`y`
y-координата початку малювання.

`char`
Символ для малювання.

`col`
Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|
| 8.1.0 | Параметр `font` тепер приймає як екземпляр [GdFont](class.gdfont.md), і ціле число (int); раніше приймалося лише ціле число (int). |
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagechar()****

`<?php$im u003d imagecreate(100, 100);$string u003d 'PHP';$bg u003d imagecolorallocate($im, 255, 255, 255);$black u003d imagecolorallocate($im, 0, 0, ;// друкує чорний символ "P" в лівому верхньому кутуimagechar($im, 1, 0, 0, $string, $black);header('Content-type: image/png');imagepng($im);? > `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagechar()](images/21009b70229598c6a80eef8b45bf282b-imagechar.png)

### Дивіться також

- [imagecharup()](function.imagecharup.md) - Малювання символу
вертикально
- [imageloadfont()](function.imageloadfont.md) - Завантаження шрифту
