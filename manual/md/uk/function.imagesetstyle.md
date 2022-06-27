- [«imagesetpixel](function.imagesetpixel.md)
- [imagesetthickness »] (function.imagesetthickness.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Установка стилю малювання ліній

#imagesetstyle

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagesetstyle — Встановлення стилю креслення ліній

### Опис

**imagesetstyle**([GdImage](class.gdimage.md) `$image`, array
`$style`): bool

**imagesetstyle()** задає стиль, який використовуватиметься функціями
малювання ліній (такими як [imageline()](function.imageline.md) та
[imagepolygon()](function.imagepolygon.md)) при заданні спеціального
кольори **`IMG_COLOR_STYLED`** або **`IMG_COLOR_STYLEDBRUSHED`**.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`style`
Масив із квітами пікселів. Можна використовувати константу
**`IMG_COLOR_TRANSPARENT`** для додавання прозорої точки. Зверніть
увагу, що `style` не може бути порожнім масивом.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Наступний приклад малює пунктирну лінію з лівого верхнього кута
зображення у правий нижній:

**Приклад #1 Приклад використання **imagesetstyle()****

`<?phpheader("Content-type: image/jpeg"); , 0, 0);/* Малування пунктирної лінії, 5 червоних точок, 5 білих */$style u003d array($red, $red, $red, $red, $red, $w, $w $w| w, $w);imagesetstyle($im, $style);imageline($im, 0, 0, 100,100, IMG_COLOR_STYLED);/* ($w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $red);imagesetstyle($im, $style); $brushu003d imagecreatefrompng("http://www.libpng.org/pub/png/images/smile.happy.png");$w2 u003d imagecolorallocate($brush, 255, 255, 255);imagecolortransparent($brush, $w2);imagesetbrush($im, $brush);imageline($im, 100, 0, 0, 100, IMG_COLOR_STYLEDBRUSHED);imagejpeg($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagesetstyle()](images/21009b70229598c6a80eef8b45bf282b-imagesetstyle.jpg)

### Дивіться також

- [imagesetbrush()](function.imagesetbrush.md) - Встановлення
зображення (кисті), за допомогою якого будуть малюватись лінії
- [imageline()](function.imageline.md) - Малювання лінії
