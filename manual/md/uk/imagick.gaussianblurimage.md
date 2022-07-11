- [« Imagick::gammaImage](imagick.gammaimage.md)
- [Imagick::getColorspace »](imagick.getcolorspace.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Розмиває зображення

# Imagick::gaussianBlurImage

(PECL imagick 2, PECL imagick 3)

Imagick::gaussianBlurImage — Розмиває зображення

### Опис

public **Imagick::gaussianBlurImage**(float `$radius`, float `$sigma`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Розмиває зображення. Згортає зображення за допомогою гаусівського
оператора заданого радіусу та стандартного відхилення (sigma). Для
отримання прийнятних результатів radius має бути більшим за sigma. При
використання значення radius, рівного 0, метод вибере відповідний
радіус.

### Список параметрів

`radius`
Радіус у пікселях, крім центрального пікселя.

`sigma`
Стандартне відхилення у пікселях.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::gaussianBlurImage()****

` ?phpfunction gaussianBlurImage($imagePath, $radius, $sigma, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->gaussianBlurImage($radius, $sigma, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
