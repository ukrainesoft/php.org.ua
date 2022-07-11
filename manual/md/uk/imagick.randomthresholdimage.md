- [« Imagick::raiseImage](imagick.raiseimage.md)
- [Imagick::readImage »](imagick.readimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює висококонтрастне двокольорове зображення

# Imagick::randomThresholdImage

(PECL imagick 2, PECL imagick 3)

Imagick::randomThresholdImage — Створює висококонтрастне двокольорове
зображення

### Опис

public **Imagick::randomThresholdImage**(float `$low`, float `$high`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Змінює значення окремих пікселів залежно від інтенсивності
кожного пікселя проти пороговим значенням. В результаті
виходить висококонтрастне двокольорове зображення. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.2.9 або
старше.

### Список параметрів

`low`
Нижня точка.

`high`
Верхня точка.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для заданого режиму
каналу. Для застосування більш ніж одного каналу необхідно об'єднати
константи типу CHANNEL за допомогою побітових операторів. Зверніться до
цьому списку [констант
CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::randomThresholdImage()****

` <?phpfunction randomThresholdimage($imagePath, $lowThreshold, $highThreshold, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->randomThresholdimage(        $lowThreshold * \Imagick::getQuantum(),      $highThreshold * \Imagick::getQu         header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
