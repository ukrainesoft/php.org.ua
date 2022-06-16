- [«
ImagickPixel::getColorValueQuantum](imagickpixel.getcolorvaluequantum.md)
- [ImagickPixel::getIndex »](imagickpixel.getindex.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Повертає нормалізований HSL-колір об'єкту ImagickPixel

# ImagickPixel::getHSL

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getHSL — Повертає нормалізований HSL-колір об'єкта
ImagickPixel

### Опис

public **ImagickPixel::getHSL**(): array

Повертає нормалізований HSL-колір, описаний об'єктом ImagickPixel,
кожне із трьох значень є дробовим числом між 0.0 та 1.0.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає HSL-значення у вигляді масиву з ключами "hue", "saturation" та
"luminosity". У разі виникнення помилки буде викинуто виняток
ImagickPixelException.

### Приклади

**Приклад #1 Приклад використання **Imagick::getHSL()****

` <?php$color u003d new ImagickPixel('rgb(90%, 10%, 10%)');$colorInfou003du003d$$color->getHSL();print_r($colorInfo);?> `

Результат виконання цього прикладу:

Array
(
[hue] u003d> 0
[saturation] u003d> 0.80001220740379
[luminosity] u003d> 0.50000762951095
)

### Примітки

> **Примітка**:
>
> Доступно з бібліотекою ImageMagick версії 6.2.9 або вищою.
