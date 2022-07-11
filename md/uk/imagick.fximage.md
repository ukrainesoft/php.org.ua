- [« Imagick::functionImage](imagick.functionimage.md)
- [Imagick::gammaImage »](imagick.gammaimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Оцінює вираз для кожного пікселя у зображенні

# Imagick::fxImage

(PECL imagick 2, PECL imagick 3)

Imagick::fxImage — Оцінює вираз для кожного пікселя у зображенні

### Опис

public **Imagick::fxImage**(string `$expression`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): [Imagick](class.imagick.md)

Оцінює вираз для кожного пікселя у зображенні. Подивіться
докладніше про [» Оператор зображення Fx зі спеціальними
ефектами](http://www.imagemagick.org/script/fx.php) для отримання
додаткову інформацію.

### Список параметрів

`expression`
Вираз

`channel`
Вкажіть будь-яку постійну каналу, яка підходить для вашого режиму
каналу. Щоб застосувати до одного каналу, об'єднайте константи
типу каналу, використовуючи побітові оператори. Перегляньте цей список
[констант каналу](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::fxImage()****

` <?phpfunction fxImage() {    $imagick u003d new \Imagick(); $imagick->newPseudoImage(200, 200, "xc:white"); $fx u003d 'xxu003di-w/2; yyu003dj-h/2; rru003dhypot(xx,yy); (.5-rr/140)*1.2+.5'; $fxImage u003d $imagick->fxImage($fx); header("Content-Type: image/png"); $fxImage->setimageformat('png'); echo $fxImage->getImageBlob();}?> `
