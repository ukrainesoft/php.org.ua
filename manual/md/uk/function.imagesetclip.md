- [«imagesetbrush](function.imagesetbrush.md)
- [imagesetinterpolation »](function.imagesetinterpolation.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Встановіть прямокутник обмеження

#imagesetclip

(PHP 7 \>u003d 7.2.0, PHP 8)

imagesetclip — Встановіть прямокутник обмеження

### Опис

**imagesetclip**(
[GdImage](class.gdimage.md) `$image`,
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`
): bool

**imagesetclip()** визначає поточний прямокутник обмеження, тобто.
область, за межами якої не будуть малюватись пікселі.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x1`
Координата x верхнього лівого кута.

`y1`
Координата по y верхнього лівого кута.

`x2`
Координата x нижнього лівого кута.

`y2`
Координата по нижнього правого кута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Дивіться також

- [imagegetclip()](function.imagegetclip.md) - Отримати відсікаючий
прямокутник
