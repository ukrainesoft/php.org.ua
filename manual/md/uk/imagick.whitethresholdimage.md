- [« Imagick::waveImage](imagick.waveimage.md)
- [Imagick::writeImage »](imagick.writeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Зафарбовує всі пікселі вище за поріг у білий

# Imagick::whiteThresholdImage

(PECL imagick 2, PECL imagick 3)

Imagick::whiteThresholdImage — Зафарбовує всі пікселі вище порога
білий

### Опис

public
**Imagick::whiteThresholdImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$threshold`): bool

Схожий на Imagick::ThresholdImage(), але зафарбовує всі пікселі вище
порога в білий колір, залишаючи всі пікселі нижче за поріг без змін.

### Список параметрів

`threshold`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| PECL imagick 2.1.0 Тепер дозволяється передавати рядок, який представляє колір як параметр. Попередні версії допускають лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::whiteThresholdImage()****

` <?phpfunction whiteThresholdImage($imagePath, $color) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->whiteThresholdImage($color); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
