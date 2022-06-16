- [« Imagick::optimizeImageLayers](imagick.optimizeimagelayers.md)
- [Imagick::paintFloodfillImage »](imagick.paintfloodfillimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Виконує впорядкований дизеринг

# Imagick::orderedPosterizeImage

(PECL imagick 2 \>u003d 2.2.2, PECL imagick 3)

Imagick::orderedPosterizeImage — Виконує впорядкований дизеринг

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::orderedPosterizeImage**(string `$threshold_map`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Виконує впорядкований дизеринг на основі ряду визначених карток
порогових значень дизерингу, але з кількома рівнями інтенсивності,
які можуть бути різними для різних каналів відповідно до вхідних
аргументами. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.3.1 чи старшою.

### Список параметрів

`threshold_map`
Рядок, що містить ім'я порогового дизерингу, що використовується.

`channel`
Вкажіть будь-яку константу каналу, яка дійсна для вашого режиму
каналу. Щоб застосувати до одного каналу, об'єднайте константи
типу каналу за допомогою бітових операторів. Зверніться до списку
[констант каналу](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::orderedPosterizeImage()****

` <?phpfunction orderedPosterizeImage($imagePath, $orderedPosterizeType) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->orderedPosterizeImage($orderedPosterizeType); $imagick->setImageFormat('png'); header("Content-Type: image/png"); echo $imagick->getImageBlob();}//orderedPosterizeImage($imagePath, 'o4x4,3,3');//orderedPosterizeImage($imagePath, 'o8x8,6,6');orderedPosterizeImage($imagePath, ' );?> `
