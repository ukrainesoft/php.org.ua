- [« Imagick::setImageColorspace](imagick.setimagecolorspace.md)
- [Imagick::setImageCompression »](imagick.setimagecompression.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює оператор складеного зображення

# Imagick::setImageCompose

(PECL imagick 2, PECL imagick 3)

Imagick::setImageCompose — Встановлює оператор складеного зображення

### Опис

public **Imagick::setImageCompose**(int `$compose`): bool

Встановлює оператор складеного зображення, корисний для вказівки,
як складати ескіз зображення під час використання методу
Imagick::montageImage().

### Список параметрів

`compose`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
