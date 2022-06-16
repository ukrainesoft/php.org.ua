- [« Imagick::mosaicImages](imagick.mosaicimages.md)
- [Imagick::negateImage »](imagick.negateimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Імітує розмиття у русі

# Imagick::motionBlurImage

(PECL imagick 2, PECL imagick 3)

Imagick::motionBlurImage — Імітує розмиття в русі

### Опис

public **Imagick::motionBlurImage**(
float `$radius`,
float `$sigma`,
float `$angle`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Імітує розмиття у русі. Згортає зображення за допомогою
гаусівського оператора заданого радіусу та стандартного відхилення
(Сігма). Для отримання розумних результатів радіус має бути більшим
сигми. Використовуйте радіус 0, і MotionBlurImage() вибере відповідний
радіус самостійно. Кут задає кут розмиття руху.

### Список параметрів

`radius`
Радіус гауссіани в пікселях, крім центрального пікселя.

`sigma`
Стандартне відхилення Гауса в пікселях.

`angle`
Застосування ефекту під цим кутом.

`channel`
Вкажіть будь-яку константу каналу, яка дійсна для вашого режиму
каналу. Щоб застосувати до одного каналу, об'єднайте константи
типу каналу за допомогою бітових операторів. Зверніться до списку
[констант каналу](imagick.constants.md#imagick.constants.channel).
Аргумент каналу впливає тільки в тому випадку, якщо Imagick скомпільовано з
ImageMagick версії 6.4.4 або вищої.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::motionBlurImage()****

`<?phpfunction motionBlurImage($imagePath, $radius, $sigma, $angle, $channel) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->motionBlurImage($radius, $sigma, $angle, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
