- [« ImagickDraw::translate](imagickdraw.translate.md)
- [ImagickPixel::clear »](imagickpixel.clear.md)

- [PHP Manual](index.md)
- [ImageMagick](book.imagick.md)
- Клас ImagickPixel

# Клас [ImagickPixel](class.imagickpixel.md)

(PECL imagick 2, PECL imagick 3)

## Огляд класів

class **ImagickPixel** {

public [clear](imagickpixel.clear.md)(): bool

public [\_\_construct](imagickpixel.construct.md)(string `$color` u003d ?)

public [destroy](imagickpixel.destroy.md)(): bool

public [getColor](imagickpixel.getcolor.md)(int `$normalized` u003d 0):
array

public [getColorAsString](imagickpixel.getcolorasstring.md)(): string

public [getColorCount](imagickpixel.getcolorcount.md)(): int

public [getColorQuantum](imagickpixel.getcolorquantum.md)(): array

public [getColorValue](imagickpixel.getcolorvalue.md)(int `$color`):
float

public
[getColorValueQuantum](imagickpixel.getcolorvaluequantum.md)(int
`$color`): int\|float

public [getHSL](imagickpixel.gethsl.md)(): array

public [getIndex](imagickpixel.getindex.md)(): int

public
[isPixelSimilar](imagickpixel.ispixelsimilar.md)([ImagickPixel](class.imagickpixel.md)
`$color`, float `$fuzz`): bool

public
[isPixelSimilarQuantum](imagickpixel.ispixelsimilarquantum.md)(string
`$color`, string `$fuzz` u003d ?): bool

public
[isSimilar](imagickpixel.issimilar.md)([ImagickPixel](class.imagickpixel.md)
`$color`, float `$fuzz`): bool

public [setColor](imagickpixel.setcolor.md)(string `$color`): bool

public [setcolorcount](imagickpixel.setcolorcount.md)(int
`$colorCount`): bool

public [setColorValue](imagickpixel.setcolorvalue.md)(int `$color`,
float `$value`): bool

public
[setColorValueQuantum](imagickpixel.setcolorvaluequantum.md)(int
`$color`, int\|float `$value`): bool

public [setHSL](imagickpixel.sethsl.md)(float `$hue`, float
`$saturation`, float `$luminosity`): bool

public [setIndex](imagickpixel.setindex.md)(int `$index`): bool

}

## Зміст

- [ImagickPixel::clear](imagickpixel.clear.md) — Очищає ресурси,
пов'язані з цим об'єктом
- [ImagickPixel::\_\_construct](imagickpixel.construct.md) -
Конструктор ImagickPixel
- [ImagickPixel::destroy](imagickpixel.destroy.md) — Звільняє
ресурси, пов'язані з цим об'єктом
- [ImagickPixel::getColor](imagickpixel.getcolor.md) — Повертає
колір
- [ImagickPixel::getColorAsString](imagickpixel.getcolorasstring.md)
— Повертає колір у вигляді рядка
- [ImagickPixel::getColorCount](imagickpixel.getcolorcount.md)
Повертає кількість кольорів, пов'язаних з цим кольором
- [ImagickPixel::getColorQuantum](imagickpixel.getcolorquantum.md) -
Опис
- [ImagickPixel::getColorValue](imagickpixel.getcolorvalue.md)
Повертає нормалізоване значення кольору каналу
- [ImagickPixel::getColorValueQuantum](imagickpixel.getcolorvaluequantum.md)
- Опис
- [ImagickPixel::getHSL](imagickpixel.gethsl.md) — Повертає
нормалізований HSL-колір об'єкту ImagickPixel
- [ImagickPixel::getIndex](imagickpixel.getindex.md) — Опис
- [ImagickPixel::isPixelSimilar](imagickpixel.ispixelsimilar.md)
Перевіряє відстань між цим кольором та іншим
- [ImagickPixel::isPixelSimilarQuantum](imagickpixel.ispixelsimilarquantum.md)
- Опис
- [ImagickPixel::isSimilar](imagickpixel.issimilar.md) — Перевірити
різницю між цим кольором та іншим
- [ImagickPixel::setColor](imagickpixel.setcolor.md) — Встановлює
колір
- [ImagickPixel::setColorCount](imagickpixel.setcolorcount.md)
Опис
- [ImagickPixel::setColorValue](imagickpixel.setcolorvalue.md)
Встановлює нормалізоване значення одного з каналів
- [ImagickPixel::setColorValueQuantum](imagickpixel.setcolorvaluequantum.md)
- Опис
- [ImagickPixel::setHSL](imagickpixel.sethsl.md) — Встановлення
нормалізованого HSL кольору
- [ImagickPixel::setIndex](imagickpixel.setindex.md) — Опис
