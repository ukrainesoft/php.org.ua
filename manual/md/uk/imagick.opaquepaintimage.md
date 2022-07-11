- [« Imagick::oilPaintImage](imagick.oilpaintimage.md)
- [Imagick::optimizeImageLayers »](imagick.optimizeimagelayers.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює значення кольору будь-якого пікселя, що відповідає цільовому

# Imagick::opaquePaintImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::opaquePaintImage — Змінює значення кольору будь-якого пікселя,
відповідного цільового

### Опис

public **Imagick::opaquePaintImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
bool `$invert`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Змінює будь-який піксель, який відповідає кольору, на колір, визначений
заливкою. Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.3.8 або старше.

### Список параметрів

`target`
Об'єкт ImagickPixel або рядок, який містить колір, який потрібно змінити

`fill`
Колір заміни

`fuzz`
Міра заокруглення (fuzz). Наприклад, встановіть значення fuzz в 10 і
червоний колір з інтенсивністю 100 та 102 буде інтерпретуватися як
той самий колір.

`invert`
Якщо **`true`** зафарбовується будь-який піксель, що не відповідає цільовому
кольору.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
