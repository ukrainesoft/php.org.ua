- [« Imagick::sharpenImage](imagick.sharpenimage.md)
- [Imagick::shearImage »](imagick.shearimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Видаляє пікселі по краях зображення

# Imagick::shaveImage

(PECL imagick 2, PECL imagick 3)

Imagick::shaveImage — Видалення пікселів по краях зображення

### Опис

public **Imagick::shaveImage**(int `$columns`, int `$rows`): bool

Видаляє пікселі на краях зображення. Метод виділяє пам'ять, необхідну
для нової структури зображення, і повертає вказівник на нове
зображення.

### Список параметрів

`columns`

`rows`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::shaveImage()****

`<?phpfunction shaveImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->shaveImage(100, 50); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
