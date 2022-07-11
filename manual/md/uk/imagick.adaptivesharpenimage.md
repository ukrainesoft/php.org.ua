- [« Imagick::adaptiveResizeImage](imagick.adaptiveresizeimage.md)
- [Imagick::adaptiveThresholdImage
»](imagick.adaptivethresholdimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Адаптивна зміна різкості зображення

# Imagick::adaptiveSharpenImage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveSharpenImage — Адаптивна зміна різкості
зображення

### Опис

public **Imagick::adaptiveSharpenImage**(float `$radius`, float
`$sigma`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Адаптивна зміна різкості зображення з більшою інтенсивністю
краях зображення і з меншою ближче до середини. Цей метод доступний,
якщо Imagick був скомпільований із версією ImageMagick 6.2.9 або старшим.

### Список параметрів

`radius`
Радіус Гауса, у пікселях, крім центрального пікселя. Використовуйте 0
для автовибору.

`sigma`
Стандартне відхилення Гауса, у пікселях.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::adaptiveSharpenImage()****

Адаптивна зміна різкості зображення з радіусом 2 та сигмою 1.

`<?phptry {   $image u003d new Imagick('image.png'); $image->adaptiveSharpenImage(2,1);} catch(ImagickException $e) {    echo 'Помилка: ' ,$e->getMessage(); die();}header('Content-type: image/png');echo $image;?> `

### Дивіться також

- [Imagick::sharpenImage()](imagick.sharpenimage.md) - Підвищує
різкість зображення
