- [« Imagick::compareImageChannels](imagick.compareimagechannels.md)
- [Imagick::compareImages »](imagick.compareimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає максимальну обмежуючу область між зображеннями

# Imagick::compareImageLayers

(PECL imagick 2, PECL imagick 3)

Imagick::compareImageLayers — Повертає максимальну обмежуючу
область між зображеннями

### Опис

public **Imagick::compareImageLayers**(int `$method`):
[Imagick](class.imagick.md)

Порівнює кожне зображення з наступним у послідовності та
повертає максимальну обмежуючу область будь-яких виявлених
відмінностей пікселів. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.2.9 чи старшою.

### Список параметрів

`method`
Одна з [констант методу
шару](imagick.constants.md#imagick.constants.layermethod).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::compareImageLayers()****

Порівняння шарів зображення

`<?php/* створення новий об'єкт imagick */$im u003d new Imagick("test.gif");/* оптимізування шари зображення */$result u003d $im->compareImageLayers(imagick:_MA:: з $result */?> `

### Дивіться також

- [Imagick::optimizeImageLayers()](imagick.optimizeimagelayers.md) -
Видаляє повторювані частини зображень для оптимізації
- [Imagick::writeImages()](imagick.writeimages.md) - Записує
зображення або послідовність зображень
- [Imagick::writeImage()](imagick.writeimage.md) - Записує
зображення за вказаним ім'ям файлу
