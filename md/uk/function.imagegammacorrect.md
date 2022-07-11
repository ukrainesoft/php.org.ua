- [«imagefttext](function.imagefttext.md)
- [imagegd2 »] (function.imagegd2.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Застосування гамма корекції до GD зображення

#imagegammacorrect

(PHP 4, PHP 5, PHP 7, PHP 8)

imagegammacorrect — Застосування гамма корекції до GD зображення

### Опис

**imagegammacorrect**([GdImage](class.gdimage.md) `$image`, float
`$input_gamma`, float `$output_gamma`): bool

Застосовує гама корекцію до зображення `image` згідно з заданими
вхідним та вихідним налаштуванням.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`input_gamma`
Вхідна настройка гами.

`output_gamma`
Вихідне настроювання гами.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagegammacorrect()****

`<?php// Створення зображення$im u003d imagecreatefromgif('php.gif');// Коректування гами, на виході 1.537imagegammacorrect($im, 1.0, і і         ./php_gamma_corrected.gif');imagedestroy($im);?> `
