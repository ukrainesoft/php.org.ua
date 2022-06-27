- [« iptcparse](function.iptcparse.md)
- [png2wbmp »](function.png2wbmp.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Конвертує зображення з формату JPEG у WBMP

#jpeg2wbmp

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7)

jpeg2wbmp — Перетворення зображення з формату JPEG на WBMP

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.2.0 і була *Видалена*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

**jpeg2wbmp**(
string `$jpegname`,
string `$wbmpname`,
int `$dest_height`,
int `$dest_width`,
int `$threshold`
): bool

Конвертує JPEG-файл у WBMP.

### Список параметрів

`jpegname`
Шлях до файлу JPEG.

`wbmpname`
Шлях для розміщення файлу WBMP.

`dest_height`
Висота WBMP-зображення.

`dest_width`
Ширина WBMP зображення.

`threshold`
Порогове значення від 0 до 8 (включно).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**Застереження**

Однак, якщо libgd не може вивести зображення, ця функція поверне
**`true`**.

### Приклади

**Приклад #1 Приклад використання **jpeg2wbmp()****

` <?php//Шлях до вихідному jpeg-зображенню$path u003d './test.jpg';// Отримуємо розміри зображення$image u003d getimagesize($path);// Конвертуємо зображенняjpeg2. wbmp', $image[1], $image[0], 5);?> `

### Дивіться також

- [png2wbmp()](function.png2wbmp.md) - Перетворення PNG файлу на
WBMP
