- [«imagecolorresolvealpha](function.imagecolorresolvealpha.md)
- [imagecolorsforindex »](function.imagecolorsforindex.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Встановлення набору кольорів для заданого індексу панелі

#imagecolorset

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorset — Встановлення набору кольорів для заданого індексу панелі

### Опис

**imagecolorset**(
[GdImage](class.gdimage.md) `$image`,
int `$color`,
int `$red`,
int `$green`,
int `$blue`,
int `$alpha` u003d 0
): ?bool

Функція встановлює відповідність індексу на панелі заданого кольору.
Це корисно для створення ефекту подібного до заливання кольором без
здійснення заливання.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`col`
Індекс на панелі.

`red`
Значення червоного компонента кольору.

`green`
Значення зеленого компонента кольору.

`blue`
Значення синього компонента кольору.

`alpha`
Значення компонента альфа.

### Значення, що повертаються

Функція повертає **`null`** у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagecolorset()****

`<?php// Створення зображення розміром 300x100$im u003d imagecreate(300, 100); , 0, 0);// Установка синього кольори фонуimagecolorset($im, $bg, 0, 0, 255);// Виведення зображення в браузерheader('Content-Type: image/$');png imagedestroy($im);?> `

### Дивіться також

- [imagecolorat()](function.imagecolorat.md) - Отримання індексу
кольору пікселя
