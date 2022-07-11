- [«imagejpeg](function.imagejpeg.md)
- [imageline »](function.imageline.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Встановити прапор альфа пару для використання ефектів
накладання зображень

#imagelayereffect

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

imagelayereffect — Встановлення прапора альфа пару для використання
ефектів накладання зображень

### Опис

**imagelayereffect**([GdImage](class.gdimage.md) `$image`, int
`$effect`): bool

Встановлення прапора альфа пару для використання ефектів накладання
зображень.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`effect`
Одна з наступних констант:

**`IMG_EFFECT_REPLACE`**
Використовувати заміну пікселів (аналогічно передачі **`true`** в
[imagealphablending()](function.imagealphablending.md))

**`IMG_EFFECT_ALPHABLEND`**
Використовувати звичайне сполучення кольорів (аналогічно передачі **`false`**)
в [imagealphablending()](function.imagealphablending.md))

**`IMG_EFFECT_NORMAL`**
Те саме, що і **`IMG_EFFECT_ALPHABLEND`**.

**`IMG_EFFECT_OVERLAY`**
В результаті накладання картинки з цим ефектом чорні та білі пікселі.
фону зображення залишаться так само чорними та білими, а сірі поміняють
колір на колір піксела зображення, що накладається.

**`IMG_EFFECT_MULTIPLY`**
Оверлеї з множником ефекту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |
| 7.2.0 | Додана **`IMG_EFFECT_MULTIPLY`** (вимагає системну бібліотеку libgd \>u003d 2.1.1 або libgd, що йде в комплекті з PHP). |

### Приклади

**Приклад #1 Приклад використання **imagelayereffect()****

`<?php// Завдання зображення$im u003d imagecreatetruecolor(100,100); прапора альфа спряження - overlayimagelayereffect($im, IMG_EFFECT_OVERLAY); 50, 50, 80, imagecolorallocate($im, 100, 100, 255));imagefilledellipse($im, 50, 50, 80, 50, imagecolorallocate($im, 255, и) Content-type:image/png');imagepng($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagelayereffect()](images/21009b70229598c6a80eef8b45bf282b-imagelayereffect.png)
