- [« Imagick::setImageAttribute](imagick.setimageattribute.md)
- [Imagick::setImageBias »](imagick.setimagebias.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює колір фону зображення

# Imagick::setImageBackgroundColor

(PECL imagick 2, PECL imagick 3)

Imagick::setImageBackgroundColor — Встановлює колір тла зображення

### Опис

public
**Imagick::setImageBackgroundColor**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`): bool

Встановлює колір тла зображення.

### Список параметрів

`background`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| PECL imagick 2.1.0 Тепер дозволяє використовувати рядок, що представляє колір, як параметр. Попередні версії дозволяли використовувати лише об'єкт ImagickPixel. |
