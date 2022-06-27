- [« Imagick::getImage](imagick.getimage.md)
- [Imagick::getImageArtifact »](imagick.getimageartifact.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перевіряє, чи є зображення альфа-канал

# Imagick::getImageAlphaChannel

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::getImageAlphaChannel — Перевіряє, чи є зображення
альфа-канал

### Опис

public **Imagick::getImageAlphaChannel**(): bool

Повертає, чи є зображення альфа-канал.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо зображення має альфа-канал і
**`false`**, якщо ні, тобто. зображення RGB, а не RGBA або CMYK, а не
CMYKA.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|---------------|--------------------------------- -------------------------------------------------- --|
| imagick 3.6.0 | Тепер повертає логічне значення (bool); раніше поверталося ціле число (int). |
