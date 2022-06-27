- [« Imagick::deskewImage](imagick.deskewimage.md)
- [Imagick::destroy »](imagick.destroy.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Зменшує спекл-шум на зображенні

# Imagick::despeckleImage

(PECL imagick 2, PECL imagick 3)

Imagick::despeckleImage — Зменшує шум на зображенні.

### Опис

public **Imagick::despeckleImage**(): bool

Зменшує шум на зображенні, зберігаючи краї вихідного зображення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::despeckleImage()****

`<?phpfunction despeckleImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->despeckleImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
