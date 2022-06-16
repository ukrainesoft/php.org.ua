- [« Imagick::setImageScene](imagick.setimagescene.md)
- [Imagick::setImageType »](imagick.setimagetype.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює тривалість відображення кадру

# Imagick::setImageTicksPerSecond

(PECL imagick 2, PECL imagick 3)

Imagick::setImageTicksPerSecond — Встановлює тривалість
відображення кадру

### Опис

public **Imagick::setImageTicksPerSecond**(int `$ticks_per_second`):
bool

Регулює тривалість відображення анімованого кадру
зображення.

> **Примітка**:
>
> Для анімованих GIF-зображень ця функція не змінює кількість
> "тактів зображення" за секунду, яке завжди визначається як 100.
> Натомість вона регулює кількість часу, протягом якого
> відображається кадр, щоб імітувати зміну "тактів за секунду".
>
> Наприклад, для анімованого GIF-зображення, де кожен кадр
> відображається протягом 20 тактів (1/5 секунди), коли викликається цей
> метод кожного кадру цього зображення з аргументом `50`, кадри
> коригуються та відображатимуться протягом 40 тактів (2/5 секунди)
> анімація відтворюватиметься з половиною вихідної швидкості.

### Список параметрів

`ticks_per_second`
Тривалість, протягом якої має відображатися зображення,
виявляється у тактах на секунду.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Зміна анімованого GIF-зображення за допомогою
**Imagick::setImageTicksPerSecond()****

` <?php// Зміна анімованого gif-зображення так, перша половина gif відтворювалася з половинною швидкістю,// а друга половина відтворювалася с двоєною ick| u003d $imagick->coalesceImages();$totalFrames u003d $imagick->getNumberImages();$frameCount u003d 0;foreach ($imagick as $frame) {    $imagick->setImageTicksPerSecon if ($frameCount < ($totalFrames / 2)) {         // Змініть кадр так, щоб він відображався вдвоє довше, зараз. $imagick->setImageTicksPerSecond(50); } else {         // Змініть кадр так, щоб він відображався вдвічі менше, чем сейчас. $imagick->setImageTicksPerSecond(200); }   $frameCount++;}$imagick u003d $imagick->deconstructImages();$imagick->writeImages("/path/to/save/output.gif", true);?> `
