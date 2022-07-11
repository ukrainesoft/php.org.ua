- [«imagesettile](function.imagesettile.md)
- [imagestringup »](function.imagestringup.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання рядка тексту горизонтально

#imagestring

(PHP 4, PHP 5, PHP 7, PHP 8)

imagestring — Малювання рядка тексту горизонтально

### Опис

**imagestring**(
[GdImage](class.gdimage.md) `$image`,
[GdFont](class.gdfont.md)\|int `$font`,
int `$x`,
int `$y`,
string `$string`,
int `$color`
): bool

Малює текст `string` на заданих координатах.

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
x-координата верхнього лівого кута.

`y`
y-координата верхнього лівого кута.

`string`
Рядок тексту.

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

**Приклад #1 Приклад використання **imagestring()****

`<?php// Створення зображення 100*30$im u003d imagecreate(100, 30);// Білий фон, синій текст$bg u003d imagecolorallocate($im, 255, 255, $5 , 0, 0, 255);// Напис|у лівому верхньому кутиimagestring($im, 5, 0, 0, 'Hello world!', $textcolor); ;imagepng($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagestring()](images/21009b70229598c6a80eef8b45bf282b-imagestring.png)

### Дивіться також

- [imagestringup()](function.imagestringup.md) - Малювання рядка
тексту вертикально
- [imageloadfont()](function.imageloadfont.md) - Завантаження шрифту
- [imagettftext()](function.imagettftext.md) - Малювання тексту на
зображенні шрифтом TrueType
