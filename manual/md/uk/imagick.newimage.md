- [« Imagick::negateImage](imagick.negateimage.md)
- [Imagick::newPseudoImage »](imagick.newpseudoimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює нове зображення

# Imagick::newImage

(PECL imagick 2, PECL imagick 3)

Imagick::newImage — Створює нове зображення

### Опис

public **Imagick::newImage**(
int `$cols`,
int `$rows`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`,
string `$format` u003d ?
): bool

Створює нове зображення і пов'язує значення ImagickPixel як
кольори фону

### Список параметрів

`cols`
Стовпці у новому зображенні

`rows`
Рядки у новому зображенні

`background`
Колір фону для цього зображення

`format`
Формат зображення. Цей параметр був доданий до Imagick версії 2.0.1.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -----------------------------------------------|
| PECL imagick 2.1.0 Тепер допускається рядок, що представляє колір, як третій параметр. Раніше допускався лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::newImage()**:**

Створення нового зображення та його відображення.

` <?php$image u003d new Imagick();$image->newImage(100, 100, new ImagickPixel('red'));$image->setImageFormat('png');header('Content-type: image /png');echo $image;?> `
