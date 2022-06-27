- [« Imagick::setImageBluePrimary](imagick.setimageblueprimary.md)
- [Imagick::setImageChannelDepth »](imagick.setimagechanneldepth.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює колір рамки зображення

# Imagick::setImageBorderColor

(PECL imagick 2, PECL imagick 3)

Imagick::setImageBorderColor — Встановлює колір зображення.

### Опис

public
**Imagick::setImageBorderColor**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$border`): bool

Встановлює колір кадру зображення.

### Список параметрів

'border'
Колір рамки

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| PECL imagick 2.1.0 Тепер дозволяється передавати рядок, який представляє колір як параметр. Попередні версії допускають лише об'єкт ImagickPixel. |
