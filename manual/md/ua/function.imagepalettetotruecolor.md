- [«imagepalettecopy](function.imagepalettecopy.md)
- [imagepng »](function.imagepng.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Перетворює зображення на основі палітри на справжній колір

#imagepalettetotruecolor

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

imagepalettetotruecolor — Перетворює зображення на основі палітри на
справжній колір

### Опис

**imagepalettetotruecolor**([GdImage](class.gdimage.md) `$image`):
bool

Перетворює на основі палітри зображення, створене функцією, такою як
[imagecreate()](function.imagecreate.md) до справжнього (true) кольору
зображення, як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

Повертає **`true`**, якщо перетворення завершено, або якщо вихідне
зображення вже є зображенням справжнього кольору, в іншому
У разі повертається **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Конвертує будь-який об'єкт зображення у цей колір**

` <?php// Для обратной совместимостиif(!function_exists('imagepalettetotruecolor')){    function imagepalettetotruecolor(&$src)    {        if(imageistruecolor($src))        {            return(true); }         $dst u003d imagecreatetruecolor(imagesx($src), imagesy($src)); imagecopy($dst, $src, 0, 0, 0, 0, imagesx($src), imagesy($src)); imagedestroy($src); $srcu003du003d$dst; return (true); }}// Анонімна функція-помічник$typeof u003d function() use($im){   echo 'typeof($im) u003d ' . (imageistruecolor($im) ? 'true color' : 'palette'), PHP_EOL;};// Створення зображення на основі палітри$im u003d imagecreate(100, 100);$typeof( $im);$typeof();// Звільнити пам'ятьimagedestroy($im);?> `

Результат виконання цього прикладу:

typeof($im) u003d palette
typeof($im) u003d true color

### Дивіться також

- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
- [imageistruecolor()](function.imageistruecolor.md) - Визначає,
чи є зображення повнокольоровим
