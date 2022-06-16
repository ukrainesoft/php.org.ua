- [«
Imagick::forwardFourierTransformImage](imagick.forwardfouriertransformimage.md)
- [Imagick::functionImage »](imagick.functionimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає імітацію тривимірного кордону

# Imagick::frameImage

(PECL imagick 2, PECL imagick 3)

Imagick::frameImage — Додає імітацію тривимірної межі

### Опис

public **Imagick::frameImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$matte_color`,
int `$width`,
int `$height`,
int `$inner_bevel`,
int `$outer_bevel`
): bool

Додає імітацію тривимірної межі навколо зображення. Ширина та
висота визначають ширину межі вертикальної та горизонтальної сторін
рамки. Внутрішній та зовнішній скоси вказують ширину внутрішньої та зовнішньої
тіні рамки.

### Список параметрів

`matte_color`
Об'єкт ImagickPixel або рядок, який представляє матовий колір.

`width`
Ширина кордону.

`height`
Висота кордону.

`inner_bevel`
Ширина внутрішнього скосу.

`outer_bevel`
Ширина зовнішнього скосу.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| PECL imagick 2.1.0 Тепер дозволяє використовувати рядок, що представляє колір, як перший. Попередні версії дозволяли використовувати лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::frameImage()****

`<?phpfunction frameImage($imagePath, $color, $width, $height, $innerBevel, $outerBevel) {    $imagick u003d new \Imagick(realpath($imagePath)); $width u003d $width + $innerBevel + $outerBevel; $height u003d $height + $innerBevel + $outerBevel; $imagick->frameimage(    $height,                                  | header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
