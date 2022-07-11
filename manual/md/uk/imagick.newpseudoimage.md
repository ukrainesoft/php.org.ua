- [« Imagick::newImage](imagick.newimage.md)
- [Imagick::nextImage »](imagick.nextimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює нове зображення

# Imagick::newPseudoImage

(PECL imagick 2, PECL imagick 3)

Imagick::newPseudoImage — Створює нове зображення

### Опис

public **Imagick::newPseudoImage**(int `$columns`, int `$rows`, string
`$pseudoString`): bool

Створює нове зображення за допомогою псевдоформатів ImageMagick.

### Список параметрів

`columns`
Стовпці у новому зображенні.

`rows`
Рядки у новому зображенні.

`pseudoString`
Рядок, що містить визначення псевдозображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::newPseudoImage()****

` <?phpfunction newPseudoImage($canvasType) {    $imagick u003d new \Imagick(); $imagick->newPseudoImage(300, 300, $canvasType); $imagick->setImageFormat("png"); header("Content-Type: image/png"); echo $imagick->getImageBlob();}//newPseudoImage('gradient:red-rgba(64, 255, 255, 0.5)');//newPseudoImage("radial-gradient:red-blue");newPseudoImage(" plasma:fractal");?> `
