- [«Imagick::labelImage](imagick.labelimage.md)
- [Imagick::linearStretchImage »](imagick.linearstretchimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Регулює рівні зображення

# Imagick::levelImage

(PECL imagick 2, PECL imagick 3)

Imagick::levelImage — Регулює рівні зображення

### Опис

public **Imagick::levelImage**(
float `$blackPoint`,
float `$gamma`,
float `$whitePoint`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Регулює рівні зображення, масштабуючи кольори, що потрапляють між
зазначеними білими та чорними точками, до повного доступного квантового
діапазону. Надані параметри є чорними, середніми.
та білі точки. Чорна точка визначає найтемніший колір зображення.
Кольори темніші за крапки чорного встановлюються на нуль. Середня точка
визначає гамма-корекцію, що застосовується до зображення. Біла точка
визначає найсвітліший колір зображення. Для квітів яскравіша за крапку білого
встановлюється максимальне квантове значення.

### Список параметрів

`blackPoint`
Чорна точка зображення.

`gamma`
Значення гами.

`whitePoint`
Білий точки зображення.

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

**Приклад #1 Приклад використання **Imagick::levelImage()****

` <?phpfunction levelImage($blackPoint, $gamma, $whitePoint) {    $imagick u003d new \Imagick(); $imagick->newPseudoimage(500, 500, 'gradient:black-white'); $imagick->setFormat('png'); $quantumu003du003d$imagick->getQuantum(); $imagick->levelImage($blackPoint / 100 , $gamma, $quantum * $whitePoint / 100); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
