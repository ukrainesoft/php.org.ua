- [«imagecopyresized](function.imagecopyresized.md)
- [imagecreatefromavif »](function.imagecreatefromavif.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створення нового палітрового зображення

#imagecreate

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecreate — Створення нового графічного зображення

### Опис

**imagecreate**(int `$width`, int `$height`):
[GdImage](class.gdimage.md)\|false

**imagecreate()** повертає ідентифікатор зображення, що представляє
собою порожнє зображення заданого розміру.

Ми рекомендуємо використати функцію
[imagecreatetruecolor()](function.imagecreatetruecolor.md) замість
**imagecreate()**, так як вона обробляє зображення з
максимально можливою якістю. Якщо потрібно вивести палітру
зображення, то
[imagetruecolortopalette()](function.imagetruecolortopalette.md)
необхідно викликати безпосередньо перед збереженням зображення з
за допомогою [imagepng()](function.imagepng.md) або
[imagegif()](function.imagegif.md).

### Список параметрів

`width`
Ширина зображення.

`height`
Висота зображення.

### Значення, що повертаються

Повертає об'єкт зображення у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | У разі успішного виконання, функція тепер повертає екземпляр [GDImage](class.gdimage.md); раніше повертався ресурс (resource). |

### Приклади

**Приклад #1 Створення нового GD потоку зображення та виведення зображення.**

` <?phpheader("Content-Type: image/png");$im u003d @imagecreate(110, 20)   or die("Неможливо створити потік зображення"); );$text_coloru003du003dimagecolorallocate($im, 233, 14, 91);imagestring($im, 1, 5, 5, "A Simple Text String", $text_color);imagepng($im);imagedestroy ;?> `

Результатом виконання цього прикладу буде щось подібне:

![ Висновок прикладу: Створення нового GD потоку зображення та виведення
зображення. ](images/21009b70229598c6a80eef8b45bf282b-imagecreate.png)

### Дивіться також

- [imagedestroy()](function.imagedestroy.md) - Знищення
зображення
- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
