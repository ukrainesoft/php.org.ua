- [« Imagick::encipherImage](imagick.encipherimage.md)
- [Imagick::equalizeImage »](imagick.equalizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Покращує якість шумного зображення

# Imagick::enhanceImage

(PECL imagick 2, PECL imagick 3)

Imagick::enhanceImage — Покращує якість шумного зображення

### Опис

public **Imagick::enhanceImage**(): bool

Застосовує цифровий фільтр, який покращує якість зображення з
шумом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::enhanceImage()****

`<?phpfunction enhanceImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->enhanceImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
