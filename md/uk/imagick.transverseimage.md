- [« Imagick::transposeImage](imagick.transposeimage.md)
- [Imagick::trimImage »](imagick.trimimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює горизонтальне дзеркальне відображення

# Imagick::transverseImage

(PECL imagick 2, PECL imagick 3)

Imagick::transverseImage — Створює дзеркальне горизонтальне відображення

### Опис

public **Imagick::transverseImage**(): bool

Створює горизонтальне дзеркальне зображення, відображаючи пікселі навколо
центральної осі Y, повертаючи їх на 270 градусів. Цей метод доступний,
якщо Imagick був скомпільований із версією ImageMagick 6.2.9 або старшим.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::transverseImage()****

` <?phpfunction transverseImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->transverseImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::transposeImage()](imagick.transposeimage.md) - Створює
вертикальне дзеркальне відображення
