- [« Imagick::quantizeImages](imagick.quantizeimages.md)
- [Imagick::queryFonts »](imagick.queryfonts.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає масив, що представляє метрики шрифту

# Imagick::queryFontMetrics

(PECL imagick 2, PECL imagick 3)

Imagick::queryFontMetrics - Повертає масив, що представляє метрики
шрифту

### Опис

public
**Imagick::queryFontMetrics**([ImagickDraw](class.imagickdraw.md)
`$properties`, string `$text`, bool `$multiline` u003d ?): array

Повертає багатовимірний масив, що становить метрики шрифту.

### Список параметрів

`properties`
Об'єкт ImagickDraw, що містить властивості шрифту.

`text`
Текст.

`multiline`
Багаторядковий параметр. Якщо залишити порожнім, він визначається
автоматично.

### Значення, що повертаються

Повертає багатовимірний масив, що становить метрики шрифту.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::queryFontMetrics()**:**

Запитує метрики для тексту та виводить результати на екран.

` <?php/* Створення нового об'єкта Imagick */$im u003d new Imagick();/* Створення нового об'єкта Imagick */$draw u003d new ImagickDraw()| path/to/font.ttf');/* Висновок метрики шрифту, автоматичне визначення многорядкового параметра */var_dump($im->queryFontMetrics($draw, "Hello World!"));?> `
