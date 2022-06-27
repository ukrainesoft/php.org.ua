- [« ImagickPixel::isPixelSimilar](imagickpixel.ispixelsimilar.md)
- [ImagickPixel::isSimilar »](imagickpixel.issimilar.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Опис

# ImagickPixel::isPixelSimilarQuantum

(PECL imagick 3 \>u003d 3.3.0)

ImagickPixel::isPixelSimilarQuantum — Опис

### Опис

public **ImagickPixel::isPixelSimilarQuantum**(string `$color`, string
`$fuzz` u003d ?): bool

Повертає true, якщо відстань між двома кольорами менша від зазначеного
відстані. Значення fuzz має бути в діапазоні від 0 до QuantumRange.
Максимальне значення представляє максимально можливу відстань у
колірного простору. Наприклад, від RGB (0, 0, 0) до RGB (255, 255, 255)
для колірного простору RGB

### Список параметрів

`col`

`fuzz`

### Значення, що повертаються
