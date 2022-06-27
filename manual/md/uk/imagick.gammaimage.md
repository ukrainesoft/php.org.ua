- [« Imagick::fxImage](imagick.fximage.md)
- [Imagick::gaussianBlurImage »](imagick.gaussianblurimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Гамма-корекція зображення

# Imagick::gammaImage

(PECL imagick 2, PECL imagick 3)

Imagick::gammaImage — Гамма-корекція зображення

### Опис

public **Imagick::gammaImage**(float `$gamma`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Гамма-корекція зображення. Одне й те саме зображення, яке переглядається
на різних пристроях, буде різнитися у сприйнятті, у способі
представлення інтенсивності зображення на екрані. Вкажіть
індивідуальні рівні гами для червоного, зеленого та синього каналів або
регулюйте всі три за допомогою параметра гами. Зазвичай значення
варіюються від 0.8 до 2.3.

### Список параметрів

`gamma`
Величина гамма-корекції.

`channel`
Вкажіть будь-яку константу каналу, яка відповідає вашому режиму
каналу. Щоб застосувати до одного каналу, об'єднайте константи
типу каналу за допомогою бітових операторів. Зверніться до цього списку
[констант каналу](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::gammaImage()****

` <?phpfunction gammaImage($imagePath, $gamma, $channel) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->gammaImage($gamma, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
