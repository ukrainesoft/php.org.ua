- [« Imagick::mapImage](imagick.mapimage.md)
- [Imagick::medianFilterImage »](imagick.medianfilterimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює значення прозорості кольору

# Imagick::matteFloodfillImage

(PECL imagick 2, PECL imagick 3)

Imagick::matteFloodfillImage — Змінює значення прозорості кольору

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::matteFloodfillImage**(
float `$alpha`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$bordercolor,
int `$x`,
int `$y`
): bool

Змінює значення прозорості будь-якого пікселя, що відповідає
мети і є найближчим сусідом. Якщо вказано метод
**`FillToBorderMethod`**, значення прозорості змінюється для будь-якого
сусіднього пікселя, який не відповідає елементу bordercolor
зображення.

### Список параметрів

`alpha`
Рівень прозорості: 1.0 – повністю непрозорий, а 0.0 – повністю
прозорий.

`fuzz`
Елемент fuzz зображення визначає, наскільки можна вважати два
кольори однакові.

'bordercolor'
Об'єкт [ImagickPixel](class.imagickpixel.md) або рядок,
представляє колір кадру.

`x`
Початкова координата X операції.

`y`
Початкова координата Y операції.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------------|
| PECL imagick 2.1.0 Тепер дозволяє рядок, що представляє колір, як третій параметр. Попередні версії допускали лише об'єкт [ImagickPixel](class.imagickpixel.md). |
