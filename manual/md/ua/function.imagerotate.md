- [«imageresolution](function.imageresolution.md)
- [imagesavealpha »](function.imagesavealpha.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Поворот зображення із заданим кутом

#imagerotate

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

imagerotate — Повертання зображення із заданим кутом

### Опис

**imagerotate**(
[GdImage](class.gdimage.md) `$image`,
float `$angle`,
int `$background_color`,
bool `$ignore_transparent` u003d **`false`**
): [GdImage](class.gdimage.md)\|false

Повертання зображення `image` на заданий кут `angle` у градусах.

Центром повороту є центр зображення. Повертається зображення
може відрізнятись розміром від оригіналу.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`angle`
Кут повороту у градусах проти годинникової стрілки.

`background_color`
Колір фон вільної зони після повороту.

`ignore_transparent`
Параметр не використовується.

### Значення, що повертаються

Повертає об'єкт повернутого зображення у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | У разі успішного виконання, функція тепер повертає екземпляр [GDImage](class.gdimage.md); раніше повертався ресурс (resource). |
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |
| 8.0.0 | Невикористовуваний `v` тепер очікує на логічне значення (bool); раніше очікувалося ціле число (int). |

### Приклади

**Приклад #1 Поворот зображення на 180 градусів**

Цей приклад повертає зображення на 180 градусів – верхи вниз.

` <?php// Файл і кут<повороту$filename u003d 'test.jpg';$degrees u003d 180;// Тип вмістheader('Content-type: image/jpeg');// Завантаження image filename);// Поворот$rotate u003d imagerotate($source, $degrees, 0);// Виведенняimagejpeg($rotate);// Вивільнення пам'ятіimagedestroy($source);imagedestroy($rotate);?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведе зображення повернене на 180
градусів](images/21009b70229598c6a80eef8b45bf282b-imagerotate.jpg)

### Примітки

> **Примітка**:
>
> Ця функція піддається впливу методу інтерполяції, встановленим
> функцією
> [imagesetinterpolation()](function.imagesetinterpolation.md).

### Дивіться також

- [imagesetinterpolation()](function.imagesetinterpolation.md) -
Встановлює метод інтерполяції
