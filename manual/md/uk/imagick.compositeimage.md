- [« Imagick::compareImages](imagick.compareimages.md)
- [Imagick::\_\_construct »](imagick.construct.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Накладає одне зображення на інше

# Imagick::compositeImage

(PECL imagick 2, PECL imagick 3)

Imagick::compositeImage — Накладає одне зображення на інше

### Опис

public **Imagick::compositeImage**(
[Imagick](class.imagick.md) `$composite_object`,
int `$composite`,
int `$x`,
int `$y`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Накладає одне зображення на інше із зазначеним усуненням. Будь-які
додаткові аргументи, необхідні для алгоритму накладання, слідують
передавати в setImageArtifact з 'compose:args' як перший
параметра та даних як другий параметр.

### Список параметрів

`composite_object`
Об'єкт Imagick, що містить зображення, що накладається.

`compose`
Оператор накладання. Дивіться [Константи оператора
наложения](imagick.constants.md#imagick.constants.compositeop).

`x`
Зміщення стовпця зображення, що накладається.

`y`
Зміщення рядка зображення, що накладається.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::compositeImage()**:**

Накладання двох зображень за допомогою 'математичного' методу накладання

` <?php// Еквівалентно запуску команди// convert src1.png src2.png -compose mathematics -define compose:argsu003d"1,0,-0.5,0.5" -composite ick| ./src1.png");$src2 u003d new \Imagick("./src2.png");$src1->setImageVirtualPixelMethod(Imagick::VIRTUALPIXELMETHOD_TRANSPARENT);$src1->setImageArtifact('compose:ar ,0,-0.5,0.5");$src1->compositeImage($src2, Imagick::COMPOSITE_MATHEMATICS, 0, 0);$src1->writeImage("./output.png");?> `

### Дивіться також

- [Imagick::setImageArtifact()](imagick.setimageartifact.md) -
Встановлює артефакт зображення
