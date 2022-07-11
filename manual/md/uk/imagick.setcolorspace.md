- [« Imagick::setBackgroundColor](imagick.setbackgroundcolor.md)
- [Imagick::setCompression »](imagick.setcompression.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює колірний простір

# Imagick::setColorspace

(PECL imagick 3)

Imagick::setColorspace — Встановлює колірний простір

### Опис

public **Imagick::setColorspace**(int `$COLORSPACE`): bool

Встановлює значення глобального кольору для об'єкта.
Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.5.7 або старше.

### Список параметрів

`COLORSPACE`
Одна з [констант
COLORSPACE](imagick.constants.md#imagick.constants.colorspace).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
