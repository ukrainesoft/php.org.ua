- [« Imagick::listRegistry](imagick.listregistry.md)
- [Imagick::mapImage »](imagick.mapimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Пропорційно масштабує зображення вдвічі

# Imagick::magnifyImage

(PECL imagick 2, PECL imagick 3)

Imagick::magnifyImage — Пропорційно масштабує зображення на два
рази

### Опис

public **Imagick::magnifyImage**(): bool

Масштабує зображення вдвічі пропорційно до оригінального
розміром.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::magnifyImage()****

`<?phpfunction magnifyImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->magnifyImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
