- [«imagestring](function.imagestring.md)
- [imagesx »](function.imagesx.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання рядка тексту вертикально

#imagestringup

(PHP 4, PHP 5, PHP 7, PHP 8)

imagestringup — Малювання рядка тексту вертикально

### Опис

**imagestringup**(
[GdImage](class.gdimage.md) `$image`,
[GdFont](class.gdfont.md)\|int `$font`,
int `$x`,
int `$y`,
string `$string`,
int `$color`
): bool

Малює текст `string` вертикально на заданих координатах.

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
x-координата нижнього лівого кута.

`y`
y-координата нижнього лівого кута.

`string`
Текст написи.

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

**Приклад #1 Приклад використання **imagestringup()****

`<?php//Створення зображення 100*100$im u003d imagecreatetruecolor(100, 100);// Напис$textcolor u003d imagecolorallocate($im, 0xFF, 0xFF, 0xFF) 'gd library', $textcolor);// Збереження зображенняimagepng($im, './stringup.png');imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagestringup()](images/21009b70229598c6a80eef8b45bf282b-imagestringup.png)

### Дивіться також

- [imagestring()](function.imagestring.md) - Малювання рядка тексту
горизонтально
- [imageloadfont()](function.imageloadfont.md) - Завантаження шрифту
