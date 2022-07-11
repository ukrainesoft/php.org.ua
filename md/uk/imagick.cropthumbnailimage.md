- [« Imagick::cropImage](imagick.cropimage.md)
- [Imagick::current »](imagick.current.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- створює обрізану мініатюру

# Imagick::cropThumbnailImage

(PECL imagick 2, PECL imagick 3)

Imagick::cropThumbnailImage — Створює мініатюру, що обрізає.

### Опис

public **Imagick::cropThumbnailImage**(int `$width`, int `$height`, bool
`$legacy` u003d **`false`**): bool

Створює мініатюру фіксованого розміру, спочатку масштабуючи
зображення вгору або вниз та обрізаючи вказану область від центру.

### Список параметрів

`width`
Ширина мініатюри

`height`
Висота мініатюри

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
