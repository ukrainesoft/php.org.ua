- [«imagesetclip](function.imagesetclip.md)
- [imagesetpixel »](function.imagesetpixel.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Встановлює метод інтерполяції

# imagesetinterpolation

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

imagesetinterpolation - Встановлює метод інтерполяції

### Опис

**imagesetinterpolation**([GdImage](class.gdimage.md) `$image`, int
`$method` u003d **`IMG_BILINEAR_FIXED`**): bool

Встановлює метод інтерполяції, встановлення методу інтерполяції впливає
на відображення різних функцій у GD, таких як функція
[imagerotate()](function.imagerotate.md).

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`method`
Метод інтерполяції, який може бути одним із наступних:

- **`IMG_BELL`**: Фільтр Белла.
- **`IMG_BESSEL`**: Фільтр Бесселя.
- **`IMG_BICUBIC`**: Бікубічна інтерполяція.
- **`IMG_BICUBIC_FIXED`**: Фіксована точка реалізації
бікубічної інтерполяції.
- **`IMG_BILINEAR_FIXED`**: Реалізація білінійної інтерполяції з
фіксованою комою
(`за замовчуванням (також під час створення зображення)`).
- **`IMG_BLACKMAN`**: Віконна функція Блекмана.
- **`IMG_BOX`**: Фільтр Коробка розмиття.
- **`IMG_BSPLINE`**: Сплайн-інтерполяція.
- **`IMG_CATMULLROM`**: Кубічна ермітова сплайн-інтерполяція.
- **`IMG_GAUSSIAN`**: Гаусова функція.
- **`IMG_GENERALIZED_CUBIC`**: Узагальнена кубічна
сплайн-фрактальна інтерполяція.
- **`IMG_HERMITE`**: Інтерполяція Ерміта.
- **`IMG_HAMMING`**: Фільтр Хеммінгу.
- **`IMG_HANNING`**: Фільтр Хеннінга.
- **`IMG_MITCHELL`**: Фільтр Мітчелла.
- **`IMG_POWER`**: Ступінна інтерполяція.
- **`IMG_QUADRATIC`**: Зворотна квадратична інтерполяція.
- **`IMG_SINC`**: Синк функція.
- **`IMG_NEAREST_NEIGHBOUR`**: Інтерполяція найближчого сусіда.
- **`IMG_WEIGHTED4`**: Ваговий фільтр.
- **`IMG_TRIANGLE`**: Трикутна інтерполяція.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagesetinterpolation()****

` <?php// Завантаження зображення$im u003d imagecreate(500, 500);// За мовчанням інтерполяція IMG_BILINEAR_FIXED, перемкніться// на використання фільтра 'Мітчела | im ...?> `

### Примітки

Зміна методу інтерполяції впливає на наступні функції при
відображенні:

- [imageaffine()](function.imageaffine.md)
- [imagerotate()](function.imagerotate.md)

### Дивіться також

- [imagegetinterpolation()](function.imagegetinterpolation.md) -
Отримує метод інтерполяції
