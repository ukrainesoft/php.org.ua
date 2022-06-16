- [« Imagick::shaveImage](imagick.shaveimage.md)
- [Imagick::sigmoidalContrastImage
»](imagick.sigmoidalcontrastimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює паралелограм

# Imagick::shearImage

(PECL imagick 2, PECL imagick 3)

Imagick::shearImage — Створює паралелограм

### Опис

public
**Imagick::shearImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`, float `$x_shear`, float `$y_shear`): bool

Зсуває один край зображення по осі X або Y, утворюючи паралелограм.
Зсув у напрямку X зсуває край по осі X, а зсув у напрямку Y
переміщує край по осі Y. Величина зсуву контролюється кутом зсуву.
Для зсуву в напрямку X, x_shear вимірюється щодо осі Y
аналогічно для зсуву в напрямку Y, y_shear вимірюється щодо
осі X. Порожні трикутники, що залишилися від обрізки зображення,
заповнюються кольором фону.

### Список параметрів

`background`
Колір фону.

`x_shear`
Кількість градусів для зсуву осі X.

`y_shear`
Кількість градусів для зсуву осі Y.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- ----------------------------------------------|
| PECL imagick 2.1.0 Тепер допускається рядок, що представляє колір як перший параметр. Раніше допускався лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::shearImage()****

` <?phpfunction shearImage($imagePath, $color, $shearX, $shearY) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->shearimage($color, $shearX, $shearY); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
