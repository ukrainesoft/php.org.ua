- [« Imagick::flattenImages](imagick.flattenimages.md)
- [Imagick::floodFillPaintImage »](imagick.floodfillpaintimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює вертикальне дзеркало зображення

# Imagick::flipImage

(PECL imagick 2, PECL imagick 3)

Imagick::flipImage — Створює вертикальне дзеркало зображення

### Опис

public **Imagick::flipImage**(): bool

Створює вертикальне дзеркало зображення, відображаючи пікселі навколо
центральної осі X.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::flipImage()****

`<?phpfunction flipImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->flipImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::flopimage()](imagick.flopimage.md) - Створює
горизонтальне дзеркальне відображення
