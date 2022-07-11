- [« Imagick::morphImages](imagick.morphimages.md)
- [Imagick::mosaicImages »](imagick.mosaicimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::morphology

(PECL imagick 3 \>u003d 3.3.0)

Imagick::morphology — Опис

### Опис

public **Imagick::morphology**(
int `$morphologyMethod`,
int `$iterations`,
[ImagickKernel](class.imagickkernel.md) `$ImagickKernel`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Застосовує до зображення ядро, надане користувачем,
відповідно до заданого методу морфології.

### Список параметрів

`morphologyMethod`
Який метод морфології використовувати: одна з констант
\Imagick::MORPHOLOGY\_\*.

`iterations`
Кількість ітерацій до застосування морфологічної функції. Значення -1
означає цикл, доки не буде знайдено жодних змін. Як
це застосовується, може залежати від методу морфології. Зазвичай це
значення одно 1.

`ImagickKernel`

`channel`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання методу Convolve
**Imagick::morphology()****

` <?php$imagick u003d $this->getCharacter();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_GAUSSIAN, "5,1");$imagick->morphology(\Imagick::MORPHOLOGY , $kernel);header("Content-Type: image/png");echo $imagick->getImageBlob();?> `

**Приклад #2 Приклад використання методу Correlate
**Imagick::morphology()****

`<?php//Верхній лівий піксель повинен бути чорним.// Нижній правий піксель повинен бути білим// На остальне нам всі рівно.$imagick u003d $$ ::$correlateMatrix, [2, 2]);$imagick->morphology(\Imagick::MORPHOLOGY_CORRELATE, 1, $kernel);header("Content-Type: image/png");echo $imagick->getImageBlob( );?> `

**Приклад #3 Приклад використання методу Erode
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #4 Приклад використання методу Erode Intensity
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacter();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "1");$canvas->morphology(\Imagick::MORPHOLOGY_ERO_$_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #5 Приклад використання методу Dilate
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #6 Приклад використання методу Dilate intensity
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacter();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "1");$canvas->morphology(\Imagick::MORPHOLOGY_DITE kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #7 Приклад використання методу Distance з ядром Chebyshev
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_CHEBYSHEV, "3");$canvas->morphology(\Imagick::MORPHOLOGY kernel);$canvas->autoLevelImage();header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #8 Приклад використання методу Distance з ядром Manhattan
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_MANHATTAN, "5");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);$canvas->autoLevelImage();header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #9 Приклад використання методу Distance з ядром ocatagonal
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGONAL, "5");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);$canvas->autoLevelImage();header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #10 Приклад використання методу Distance з ядром Euclidean
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_EUCLIDEAN, "4");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);$canvas->autoLevelImage();header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #11 Приклад використання методу Edge
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #12 Приклад використання методу Open
**Imagick::morphology()****

` <?php// В результате вы увидите, что "Open" сглаживает контур, округляя все острые точки, и удаляет все части, которые меньше используемой формы.// Он также отключит или откроет любые тонкие мосты.$canvas u003d $this- >getCharacterOutline();$kernelu003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");$canvas->morphology(\Imagick::MORPHOLOGY_OPEN, 1, $kernel);header(" image/png");echo $canvas->getImageBlob();?> `

**Приклад #13 Приклад використання методу Open intensity
**Imagick::morphology()****

` <?php// В результате вы увидите, что "Open" сглаживает контур, округляя все острые точки, и удаляет все части, которые меньше используемой формы.// Он также отключит или откроет любые тонкие мосты.$canvas u003d $this- >getCharacter();$kernelu003du003dImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");$canvas->morphology(\Imagick::MORPHOLOGY_OPEN_INTENSITY, 1, $kernel);header" image/png");echo $canvas->getImageBlob();?> `

**Приклад #14 Приклад використання методу Close
**Imagick::morphology()****

`<?php// Основне використання методу "Close" - зменшити або видалити будь-які дірки або пробіли в розмірі Структурного елемента ядра.// Цього| kernelu003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");$canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $kernel);header("Content-Type: image/png" echo $canvas->getImageBlob();?> `

**Приклад #15 Приклад використання методу Close Intensity
**Imagick::morphology()****

`<?php//Основне використання методу "Close" - зменшити або видалити будь-які дірки або пробіли в розмірі Структурного елемента ядра. kernelu003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");$canvas->morphology(\Imagick::MORPHOLOGY_CLOSE_INTENSITY, 1, $kernel);header("Content-Type: echo $canvas->getImageBlob();?> `

**Приклад #16 Приклад використання методу Smooth
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");$canvas->morphology(\Imagick::MORPHOLOGY_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #17 Приклад використання методу Edge in
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");$canvas->morphology(\Imagick::MORPHOLOGY$_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #18 Приклад використання методу Edge out
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");$canvas->morphology(\Imagick::MORPHOLOGY$_ kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #19 Метод "TopHat", або, точніше, "White TopHat", повертає
пікселі, які були видалені відкриттям фігури, тобто пікселі, які
були видалені для округлення точок, та з'єднання, з'єднане мостом
між фігурами. **Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "5");$canvas->morphology(\Imagick::MORPHOLOGY_ TO kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #20 Метод "TopHat", або, точніше, "Black TopHat", повертає
пікселі, які були видалені закриттям фігури, тобто пікселі, які
використовувалися для заповнення дірок, зазорів та мостів.
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "5");$canvas->morphology(\Imagick::MORPHOLOGY_BOTT kernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #21 Приклад використання методу Hit та Miss
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();// Знаходить все пікселі з 3 пікселями правого краю$matrix u003d [[1, false, false, 0]];$kernel  matrix,    [0, 0]);$canvas->morphology(\Imagick::MORPHOLOGY_HIT_AND_MISS, 1, $kernel);header("Content-Type: image/png");echo $canvas->getImageBlob(); > `

**Приклад #22 Приклад використання методу Thinning
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$leftEdgeKernel u003d \ImagickKernel::fromMatrix([[0, 1]], [1, 0]);$rightEdgeKernel u003d \Imagick 1, 0]], [0, 0]);$leftEdgeKernel->addKernel($rightEdgeKernel);$canvas->morphology(\Imagick::MORPHOLOGY_THINNING, 3, $leftEdgeKernel);header("Conte png");echo $canvas->getImageBlob();?> `

**Приклад #23 Приклад використання методу Thicken
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$leftEdgeKernel u003d \ImagickKernel::fromMatrix([[0, 1]], [1, 0]);$rightEdgeKernel u003d \Imagick 1, 0]], [0, 0]);$leftEdgeKernel->addKernel($rightEdgeKernel);$canvas->morphology(\Imagick::MORPHOLOGY_THICKEN, 3, $leftEdgeKernel);header("Conte png");echo $canvas->getImageBlob();?> `

**Приклад #24 Приклад використання методу Thick для створення опуклої
оболонки **Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$diamondKernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DIAMOND, "1");$convexKernel u003d  \Imagick "");// Потовщена морфологія не справляється з невеликими зазорами.// Закриваємо их близькою морфологією. , -1, $convexKernel);$canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $diamondKernel);header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #25 Приклад використання методу Iterative morphology
**Imagick::morphology()****

` <?php$canvas u003d $this->getCharacterOutline();$kernel u003d \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "2");$canvas->morphology(\Imagick::MORPHOLOGY_TER kernel);$canvas->autoLevelImage();header("Content-Type: image/png");echo $canvas->getImageBlob();?> `

**Приклад #26 Приклад використання допоміжної функції для отримання
силуету зображення **Imagick::morphology()****

` <?phpfunction getCharacterOutline() {   $imagick u003d new \Imagick(realpath("./images/character.png")); $character u003d new \Imagick(); $character->newPseudoImage(      |$imagick->getImageWidth(),        $imagick->getImageHeight(),        "canvas:white"| $canvas u003d new \Imagick(); $canvas->newPseudoImage(        $imagick->getImageWidth(),        $imagick->getImageHeight(),        "canvas:black" ; $character->compositeimage(        $imagick,        \Imagick::COMPOSITE_COPYOPACITY,        0, 0     )); $canvas->compositeimage(        $character,         \Imagick::COMPOSITE_ATOP,        0, 0    ); $canvas->setFormat('png'); return $canvas;}?> `
