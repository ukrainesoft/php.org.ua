- [«imageinterlace](function.imageinterlace.md)
- [imagejpeg »](function.imagejpeg.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Визначає, чи є зображення повнокольоровим

#imageistruecolor

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

imageistruecolor — Визначає, чи є зображення повнокольоровим

### Опис

**imageistruecolor**([GdImage](class.gdimage.md) `$image`): bool

**imageistruecolor()** визначає, чи є зображення `image`
повнокольоровим.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

Повертає **`true`**, якщо `image` повнокольорове, **`false`** в
інакше.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Просте визначення повнокольорових зображень за допомогою
**imageistruecolor()****

` <?php// $im - зображення// Перевірка, є або зображення повнокольоровимif(!imageistruecolor($im)){    // Створення truecolor-зображення    $tcimage ; //копіювання з точки    imagecopy($tc, $im, 0, 0, 0, 0, imagesx($im), imagesy($im)); imagedestroy($im); $im u003d $tc; $tcu003du003dNULL; // або використовуйте imagepalettetotruecolor()}// Continue working with image instance?> `

### Дивіться також

- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
- [imagepalettetotruecolor()](function.imagepalettetotruecolor.md) -
Перетворює зображення на основі палітри на справжній колір
