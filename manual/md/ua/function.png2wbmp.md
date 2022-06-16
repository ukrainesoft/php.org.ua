- [«jpeg2wbmp](function.jpeg2wbmp.md)
- [GdImage »](class.gdimage.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Перетворення PNG файлу на WBMP

# png2wbmp

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7)

png2wbmp — Перетворення PNG файлу на WBMP

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.2.0 і була *Видалена*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

**png2wbmp**(
string `$pngname`,
string `$wbmpname`,
int `$dest_height`,
int `$dest_width`,
int `$threshold`
): bool

Перетворює PNG файл на WBMP.

### Список параметрів

`pngname`
Шлях до файлу PNG.

`wbmpname`
Шлях до результуючого WBMP файлу.

`dest_height`
Висота результуючого зображення.

`dest_width`
Ширина результуючого зображення.

`threshold`
Обмеження від 0 до 8 (включно).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**Застереження**

Однак, якщо libgd не може вивести зображення, ця функція поверне
**`true`**.

### Приклади

**Приклад #1 Приклад використання **png2wbmp()****

` <?php// Шлях к png$path u003d './test.png';// Отримання розмірів зображень$image u003d getimagesize($path);// Перетворенняpng2wbmp($path, './test.wbmp' image[1], $image[0], 7);?> `

### Дивіться також

- [jpeg2wbmp()](function.jpeg2wbmp.md) - Конвертує зображення з
формату JPEG у WBMP
