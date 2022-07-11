- [« Imagick::equalizeImage](imagick.equalizeimage.md)
- [Imagick::exportImagePixels »](imagick.exportimagepixels.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує вираз до зображення

# Imagick::evaluateImage

(PECL imagick 2, PECL imagick 3)

Imagick::evaluateImage — Застосовує вираз до зображення

### Опис

public **Imagick::evaluateImage**(int `$op`, float `$constant`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Застосовує до зображення арифметичне, реляційне чи логічне
вираз. Використовуйте ці оператори для освітлення або затемнення
зображення, для збільшення або зменшення контрастності зображення або
для створення "негативу" зображення.

### Список параметрів

`op`
Оператор обчислення.

`constant`
Значення оператора.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів.Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::evaluateImage()****

Використання evaluateImage для зменшення непрозорості зображення.

` <?php// Створення нового об'єкта з зображенням$im u003d new Imagick('example-alpha.png');// Зменшення значення альфа-каналу на 50%$im->evaluateImage(Imagick: ::CHANNEL_ALPHA);// Виведення зображенняheader("Content-Type: image/png");echo $im;?> `
