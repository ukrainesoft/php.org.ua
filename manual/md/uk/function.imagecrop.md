- [«imagecreatetruecolor](function.imagecreatetruecolor.md)
- [imagecropauto »](function.imagecropauto.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Обрізати зображення до заданого прямокутника

# imagecrop

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

imagecrop — Обрізати зображення до прямокутника.

### Опис

**imagecrop**([GdImage](class.gdimage.md) `$image`, array
`$rectangle`): [GdImage](class.gdimage.md)\|false

Обрізає зображення до заданої прямокутної області та повертає
отримане зображення. Вказаний параметр `image` не змінюється.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`rectangle`
Обрізаний прямокутник у вигляді масиву (array) з ключами `x`, `y`,
`width` та `height`.

### Значення, що повертаються

Повертає об'єкт обрізаного зображення у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |
| 8.0.0 | У разі успішного виконання, функція тепер повертає екземпляр [GDImage](class.gdimage.md); раніше повертався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagecrop()****

У цьому прикладі показано, як обрізати зображення до квадратної області.

` <?php$im u003d imagecreatefrompng('example.png');$size u003d min(imagesx($im), imagesy($im));$im2 u003d imagecrop($im, ['x' u003d> 0, 'y' u003d> 0, 'width' u003d> $size, 'height' u003d> $size]);if ($im2 !u003du003d FALSE) {    imagepng($im2, 'example-cropped.png'); imagedestroy($im2);}imagedestroy($im);?> `

### Дивіться також

- [imagecropauto()](function.imagecropauto.md) - Обрізає
зображення автоматично, використовуючи один із доступних режимів
