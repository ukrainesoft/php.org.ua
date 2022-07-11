- [« Imagick::getImageDispose](imagick.getimagedispose.md)
- [Imagick::getImageExtrema »](imagick.getimageextrema.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Порівнює зображення з відновленим зображенням

# Imagick::getImageDistortion

(PECL imagick 2, PECL imagick 3)

Imagick::getImageDistortion — Порівнює зображення з відновленим
зображенням

### Опис

public **Imagick::getImageDistortion**(MagickWand `$reference`, int
`$metric`): float

Порівнює зображення з відновленим зображенням та повертає
вказаний показник спотворення.

### Список параметрів

`reference`
Об'єкт Imagick для порівняння.

`metric`
Одна з [констант типу
METRIC](imagick.constants.md#imagick.constants.metric).

### Значення, що повертаються

Повертає показник спотворення, використаний для зображення (або його
найкраще припущення).

### Помилки

Викликає ImagickException у разі виникнення помилки.
