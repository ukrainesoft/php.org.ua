- [«imagescale](function.imagescale.md)
- [imagesetclip »](function.imagesetclip.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Встановлення зображення (пензля), за допомогою якого будуть малюватись
лінії

#imagesetbrush

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagesetbrush — Встановлення зображення (пензля), за допомогою якого
малюватимуться лінії

### Опис

**imagesetbrush**([GdImage](class.gdimage.md) `$image`,
[GdImage](class.gdimage.md) `$brush`): bool

**imagesetbrush()** задає зображення, яке використовуватиметься
функціями для малювання ліній (такими як
[imageline()](function.imageline.md) та
[imagepolygon()](function.imagepolygon.md)) при використанні кольорів
**`IMG_COLOR_BRUSHED`** або **`IMG_COLOR_STYLEDBRUSHED`**.

**Застереження**

Додаткові дії після завершення роботи з пензлем не потрібні,
однак, якщо зображення кисті знищено, не можна користуватися квітами
**`IMG_COLOR_BRUSHED`** або **`IMG_COLOR_STYLEDBRUSHED`**, поки не буде
встановлено нове зображення пензля!

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`brush`
Об'єкт зображення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------|
| 8.0.0 | 'image' і 'brush' тепер чекають на екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagesetbrush()****

`<?php// Завантаження мінілоготипу php$php u003d imagecreatefrompng('./php.png');// Створення основного зображення 100x100$im u003d imagecreatetruecolor(100, 100 $im, 255, 255, 255);imagefilledrectangle($im, 0, 0, 299, 99, $white);// Установка кистіimagesetbrush($im, $php);// Малювання ліній 50, 50, 50, 60, IMG_COLOR_BRUSHED);//Висновок і очищення пам'ятіheader('Content-type: image/png');imagepng($im);imagedestroy($im);imagedestroy($php);

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagesetbrush()](images/21009b70229598c6a80eef8b45bf282b-imagesetbrush.png)
