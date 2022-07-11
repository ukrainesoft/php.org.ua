- [« Imagick::getPixelIterator](imagick.getpixeliterator.md)
- [Imagick::getPointSize »](imagick.getpointsize.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає об'єкт ImagickPixelIterator для секції зображення

# Imagick::getPixelRegionIterator

(PECL imagick 2, PECL imagick 3)

Imagick::getPixelRegionIterator — Повертає об'єкт ImagickPixelIterator
для секції зображення

### Опис

public **Imagick::getPixelRegionIterator**(
int `$x`,
int `$y`,
int `$columns`,
int `$rows`
): [ImagickPixelIterator](class.imagickpixeliterator.md)

Повертає об'єкт ImagickPixelIterator для розділу зображення.

### Список параметрів

`x`
Координати області X.

`y`
Координати області Y.

`columns`
Ширина області.

`rows`
Висота області.

### Значення, що повертаються

Повертає об'єкт ImagickPixelIterator для розділу зображення.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання функції
**Imagick::getPixelRegionIterator()****

Пробігає пікселями вгорі зліва зображення і замінює їх на чорні.

` <?php$im u003d new Imagick(realpath("./testImage.png"));$areaIterator u003d $im->getPixelRegionIterator(0, 0, 10, 10);foreach ($areaIterator as   ($rowIterator as $pixel) {         // Красить кожний піксель чорним        $pixel->setColor("rgba(0, 0, 0, 0) }   $areaIterator->syncIterator();}$im->writeImage("./output.png");?> `
