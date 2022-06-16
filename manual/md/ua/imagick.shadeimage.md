- [« Imagick::setType](imagick.settype.md)
- [Imagick::shadowImage »](imagick.shadowimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює 3D-ефект

# Imagick::shadeImage

(PECL imagick 2, PECL imagick 3)

Imagick::shadeImage — Створює 3D-ефект

### Опис

public **Imagick::shadeImage**(bool `$gray`, float `$azimuth`, float
`$elevation`): bool

Світить дальнє світло на зображення для створення тривимірного ефекту. Ви
керуєте розташуванням джерела світла за допомогою азимуту та піднесення;
азимут вимірюється у градусах від осі X, а висота вимірюється у пікселях
над віссю Z. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.2.9 чи старшою.

### Список параметрів

`gray`
Значення, відмінне від нуля, відтінює інтенсивність кожного пікселя.

`azimuth`
Визначає напрямок джерела світла.

`elevation`
Визначає напрямок джерела світла.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викидає виключення ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::shadeImage()****

` <?phpfunction shadeImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->shadeImage(true, 45, 20); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
