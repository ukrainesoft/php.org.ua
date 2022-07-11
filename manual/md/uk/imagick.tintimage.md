- [« Imagick::thumbnailImage](imagick.thumbnailimage.md)
- [Imagick::\_\_toString »](imagick.tostring.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує вектор кольору до кожного пікселя зображення

# Imagick::tintImage

(PECL imagick 2, PECL imagick 3)

Imagick::tintImage — Застосовує вектор кольору до кожного пікселя
зображення

### Опис

public
**Imagick::tintImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$tint`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$opacity`, bool `$legacy` u003d **`false`**): bool

Застосовує вектор кольору до кожного пікселя зображення. Довжина вектора
дорівнює 0 для чорного та білого та максимальна довжина для півтонів. Функція
векторного зважування: f(x)u003d(1-(4.0\*((x-0.5)\*(x-0.5)))).

### Список параметрів

`tint`

`opacity`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL imagick 2.1.0 Тепер дозволяє рядок, що представляє колір, як перший параметр і число з точкою, що представляє значення непрозорості, як другий параметр. Попередні версії допускали лише об'єкти ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::tintImage()****

` <?phpfunction tintImage($r, $g, $b, $a) {    $a u003d $a / 100; $imagicku003du003dnewImagick(); $imagick->newPseudoImage(400, 400, 'gradient:black-white'); $tint u003d new \ImagickPixel("rgb($r, $g, $b)"); $opacity u003d new \ImagickPixel("rgb(128, 128, 128, $a)"); $imagick->tintImage($tint, $opacity); $imagick->setImageFormat('png'); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
