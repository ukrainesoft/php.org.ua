- [«imagefilter](function.imagefilter.md)
- [imagefontheight »] (function.imagefontheight.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Перевертає зображення, використовуючи вибраний режим

# imageflip

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

imageflip — Перевертає зображення за допомогою вибраного режиму.

### Опис

**imageflip**([GdImage](class.gdimage.md) `$image`, int `$mode`): bool

Перевертає зображення `image`, використовуючи вибраний режим `mode`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`mode`
Режим перевороту - одна із констант **`IMG_FLIP_*`**:

| Константа Опис |
|---------------------------|--------------------- ----------------------------------------|
| **`IMG_FLIP_HORIZONTAL`** | Перевертає зображення по горизонталі. |
| **`IMG_FLIP_VERTICAL`** | Перевертає зображення по вертикалі. |
| **`IMG_FLIP_BOTH`** | Перевертає зображення і по горизонталі, і по вертикалі. |

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Перевертає зображення по вертикалі**

У цьому прикладі використовується константа **`IMG_FLIP_VERTICAL`**.

` <?php// Файл$filename u003d 'phplogo.png';// Тип данихheader('Content-type: image/png');// Завантаження$im u003d imagecreatefrompng($filename);// Перевертаємо поimage $im, IMG_FLIP_VERTICAL);// Виведенняimagejpeg($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Результат прикладу: Перевернуте по вертикалі
зображення](images/21009b70229598c6a80eef8b45bf282b-imageflipvertical.png)

**Приклад #2 Перевертає зображення по горизонталі**

У цьому прикладі використовується константа **`IMG_FLIP_HORIZONTAL`**.

` <?php// Файл$filename u003d 'phplogo.png';// Тип данихheader('Content-type: image/png');// Завантаження$im u003d imagecreatefrompng($filename);// Перевертаємо поimage $im, IMG_FLIP_HORIZONTAL);// Виведенняimagejpeg($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Результат прикладу: Перевернуте по горизонталі
зображення](images/21009b70229598c6a80eef8b45bf282b-imagefliphorizontal.png)
