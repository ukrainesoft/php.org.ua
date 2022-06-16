- [« Imagick::borderImage](imagick.borderimage.md)
- [Imagick::charcoalImage »](imagick.charcoalimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::brightnessContrastImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::brightnessContrastImage — Опис

### Опис

public **Imagick::brightnessContrastImage**(float `$brightness`, float
`$contrast`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Змінює яскравість та/або контраст зображення. Перетворює параметри
яскравості та контрастності в нахил та перетин і викликає поліномічну
функцію застосування до зображення.

### Список параметрів

`brightness`

`contrast`

`channel`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
**Imagick::brightnessContrastImage()****

` <?phpfunction brightnessContrastImage($imagePath, $brightness, $contrast, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->brightnessContrastImage($brightness, $contrast, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
