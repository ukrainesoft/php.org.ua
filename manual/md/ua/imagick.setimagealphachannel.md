- [« Imagick::setImage](imagick.setimage.md)
- [Imagick::setImageArtifact »](imagick.setimageartifact.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює альфа-канал зображення

# Imagick::setImageAlphaChannel

(PECL imagick 2 \>u003d 2.1.0, PECL imagick 3)

Imagick::setImageAlphaChannel — Встановлює альфа-канал зображення

### Опис

public **Imagick::setImageAlphaChannel**(int `$mode`): bool

Активує або деактивує альфа-канал зображення. Параметр `mode` -
одна з констант **`Imagick::ALPHACHANNEL_*`**. Цей метод доступний,
якщо Imagick був скомпільований із версією ImageMagick 6.3.8 або старшим.

### Список параметрів

`mode`
Одна із констант **`Imagick::ALPHACHANNEL_*`**.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Дивіться також

- [Imagick::setImageMatte()](imagick.setimagematte.md) -
Встановлює матовий канал зображення
- [Константи альфа-каналу
Imagick](imagick.constants.md#imagick.constants.alphachannel)
