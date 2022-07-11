- [«imagecreatefromxpm](function.imagecreatefromxpm.md)
- [imagecrop »](function.imagecrop.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створення нового повнокольорового зображення

#imagecreatetruecolor

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagecreatetruecolor — Створення нового кольорового зображення

### Опис

**imagecreatetruecolor**(int `$width`, int `$height`):
[GdImage](class.gdimage.md)\|false

**imagecreatetruecolor()** повертає об'єкт, що представляє чорне
зображення заданого розміру.

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

**Приклад #1 Створення нового потоку GD зображення та виведення картинки.**

`<?phpheader ('Content-Type: image/png');$im u003d @imagecreatetruecolor(120, 20)      or die('Неможливо ініціалізувати GD потік');$text_color   );imagestring($im, 1, 5, 5, 'Проста Текстова Рядок', $text_color);imagepng($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу: Створення нового потоку GD зображення та виведення
картинки.](images/21009b70229598c6a80eef8b45bf282b-imagecreatetruecolor.png)

### Дивіться також

- [imagedestroy()](function.imagedestroy.md) - Знищення
зображення
- [imagecreate()](function.imagecreate.md) - Створення нового
палітрового зображення
