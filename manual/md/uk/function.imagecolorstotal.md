- [«imagecolorsforindex](function.imagecolorsforindex.md)
- [imagecolortransparent »](function.imagecolortransparent.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Визначення кількості кольорів на панелі зображення

#imagecolorstotal

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorstotal — Визначення кількості кольорів на панелі зображення

### Опис

**imagecolorstotal**([GdImage](class.gdimage.md) `$image`): int

Повертає кількість кольорів на панелі зображення.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

Повертає кількість кольорів на панелі зображення або 0 для
truecolor-зображень.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Отримання кількості кольорів у зображенні за допомогою
**imagecolorstotal()****

`<?php// Створення зображення$im u003d imagecreatefromgif('php.gif');echo 'Всього квітів в зображенні: ' . imagecolorstotal($im);// Звільнення пам'ятіimagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

Всього кольорів у зображенні: 128

### Дивіться також

- [imagecolorat()](function.imagecolorat.md) - Отримання індексу
кольору пікселя
- [imagecolorsforindex()](function.imagecolorsforindex.md) -
Отримання кольорів, що відповідають індексу
- [imageistruecolor()](function.imageistruecolor.md) - Визначає,
чи є зображення повнокольоровим
