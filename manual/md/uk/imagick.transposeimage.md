- [«
Imagick::transparentPaintImage](imagick.transparentpaintimage.md)
- [Imagick::transverseImage »](imagick.transverseimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює вертикальне дзеркальне відображення

# Imagick::transposeImage

(PECL imagick 2, PECL imagick 3)

Imagick::transposeImage — Створює вертикальне дзеркальне відображення

### Опис

public **Imagick::transposeImage**(): bool

Створює вертикальне дзеркальне зображення, відображаючи пікселі навколо
центральної осі X, повертаючи їх у 90 градусів. Цей метод доступний,
якщо Imagick був скомпільований із версією ImageMagick 6.2.9 або старшим.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::transposeImage()****

` <?phpfunction transposeImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->transposeImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::transverseImage()](imagick.transverseimage.md) - Створює
горизонтальне дзеркальне відображення
