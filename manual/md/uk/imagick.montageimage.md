- [« Imagick::modulateImage](imagick.modulateimage.md)
- [Imagick::morphImages »](imagick.morphimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює складове зображення

# Imagick::montageImage

(PECL imagick 2, PECL imagick 3)

Imagick::montageImage — Створює складне зображення

### Опис

public **Imagick::montageImage**(
[ImagickDraw](class.imagickdraw.md) `$draw`,
string `$tile_geometry`,
string `$thumbnail_geometry`,
int `$mode`,
string `$frame`
): [Imagick](class.imagick.md)

Створює складне зображення шляхом об'єднання кількох окремих
зображень. Зображення розміщуються на складовому зображенні мозаїкою,
Ім'я зображення може відображатися відразу під окремою плиткою.

### Список параметрів

`draw`
Назва, розмір та колір шрифту беруться з цього об'єкта.

`tile_geometry`
Кількість плиток у рядку та на сторінці (наприклад, 6x4+0+0).

`thumbnail_geometry`
Переважний розмір зображення та розмір кордону кожної мініатюри
(наприклад, 120×120+4+3).

`mode`
Режим кадрування мініатюр, дивіться [константи режиму
кадрування](imagick.constants.md#imagick.constants.montagemode).

`frame`
Обведіть зображення декоративною рамкою (наприклад, 15x15+3+3). Колір
рамки відповідає матовому кольору ескізу.

### Значення, що повертаються

Створює складне зображення та повертає його як новий об'єкт
[Imagick](class.imagick.md).
