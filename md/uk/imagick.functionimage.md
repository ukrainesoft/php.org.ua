- [« Imagick::frameImage](imagick.frameimage.md)
- [Imagick::fxImage »](imagick.fximage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує функцію зображення

# Imagick::functionImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::functionImage — Застосовує функцію зображення

### Опис

public **Imagick::functionImage**(int `$function`, array `$arguments`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Застосовує арифметичний, реляційний або логічний вираз до
псевдозображення.

Дивіться також [»ImageMagick v6 Examples - Image Transformations —
Function, Multi-Argument
Evaluate](http://www.imagemagick.org/Usage/transform/#function)

Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.4.9 або старше.

### Список параметрів

`function`
Зверніться до списку [констант
FUNCTION](imagick.constants.md#imagick.constants.function).

`arguments`
Масив аргументів передачі у цю функцію.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Створення синусоїдального градієнта**

` <?php$imagick u003d new Imagick();$imagick->newPseudoImage(200, 200, 'gradient:black-white');$arguments u003d array(3, -90);$imagick->functionImage(Imagick: :FUNCTION_SINUSOID, $arguments);header("Content-Type: image/png");$imagick->setImageFormat("png");echo $imagick->getImageBlob();?> `

Результатом виконання цього прикладу буде щось подібне:

![Результат створення синусоїдального
градієнта](images/c0d23d2d6769e53e24a1b3136c064577-functionImage_sinusoidal.png)

**Приклад #2 Створення градієнта з полінома (4x^2 - 4x + 1)**

` <?php$imagick u003d new Imagick();$imagick->newPseudoImage(200, 200, 'gradient:black-white');$arguments u003d array(4, -4, 1);$imagick->functionImage( Imagick::FUNCTION_POLYNOMIAL, $arguments);header("Content-Type: image/png");$imagick->setimageformat("png");echo $imagick->getImageBlob();?> `

Результатом виконання цього прикладу буде щось подібне:

![Результат створення поліноміального
градієнта](images/c0d23d2d6769e53e24a1b3136c064577-functionImage_polynomial.png)

**Приклад #3 Створення складного градієнта з полінома (4x^2 - 4x^2 + 1),
модульованого синусоїдальним градієнтом**

` <?php$imagick1 u003d new Imagick();$imagick1->newPseudoImage(200, 200, 'gradient:black-white');$arguments u003d array(9, -90);$imagick1->functionImage(Imag :FUNCTION_SINUSOID, $arguments);$imagick2 u003d new Imagick();$imagick2->newPseudoImage(200, 200, 'gradient:black-white');$arguments u003d array(0.5, 0) Imagick::FUNCTION_SINUSOID, $arguments);$imagick1->compositeimage($imagick2, Imagick::COMPOSITE_MULTIPLY, 0, 0);header("Content-Type: image/png");$imagick1->setImageFormat("png );echo $imagick1->getImageBlob();?> `

Результатом виконання цього прикладу буде щось подібне:

![Результат створення складного
градієнта](images/c0d23d2d6769e53e24a1b3136c064577-functionImage_multiplied.png)
