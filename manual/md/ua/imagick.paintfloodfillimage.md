- [«
Imagick::orderedPosterizeImage](imagick.orderedposterizeimage.md)
- [Imagick::paintOpaqueImage »](imagick.paintopaqueimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює значення кольору будь-якого пікселя, що відповідає меті

# Imagick::paintFloodfillImage

(PECL imagick 2 \>u003d 2.1.0, PECL imagick 3)

Imagick::paintFloodfillImage — Змінює значення кольору будь-якого пікселя,
відповідної мети

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::paintFloodfillImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$bordercolor,
int `$x`,
int `$y`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Змінює значення кольору будь-якого пікселя, який відповідає цілі та
є найближчим сусідом. Починаючи з ImageMagick 6.3.8, цей метод
застарів і замість нього слід використати
[Imagick::floodfillPaintImage()](imagick.floodfillpaintimage.md).

### Список параметрів

`fill`
Об'єкт ImagickPixel або рядок, який містить колір заливки.

`fuzz`
Міра заокруглення (fuzz). Наприклад, встановіть значення fuzz в 10 і
червоний колір з інтенсивністю 100 та 102 буде інтерпретуватися як
той самий колір.

'bordercolor'
Об'єкт ImagickPixel або рядок, який містить цільовий колір для малювання.

`x`
Початкова позиція заливки на осі X.

`y`
Початкова позиція заливки на осі Y.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
