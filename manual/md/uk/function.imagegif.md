- [«imagegetinterpolation](function.imagegetinterpolation.md)
- [imagegrabscreen »](function.imagegrabscreen.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Виводить зображення у браузер або пише у файл

#imagegif

(PHP 4, PHP 5, PHP 7, PHP 8)

imagegif - Виводить зображення в браузер або пише в файл

### Опис

**imagegif**([GdImage](class.gdimage.md) `$image`,
resource\|string\|null `$file` u003d **`null`**): bool

**imagegif()** створює GIF файл `file` із зображення `image`. Аргумент
`image` повертається функціями
[imagecreate()](function.imagecreate.md) або `imagecreatefrom*`.

Файл матиме формат GIF87a, якщо зображення не було зроблено
прозорою функцією
[imagecolortransparent()](function.imagecolortransparent.md). В цьому
у разі форматом файлу буде GIF89a.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`file`
Шлях, або відкритий потоковий ресурс (який автоматично закривається
після завершення функції), щоб зберегти файл. Якщо не встановлено або
дорівнює **`null`**, зображення буде виведено в потік виведення у бінарному
вигляді.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**Застереження**

Однак, якщо libgd не може вивести зображення, ця функція поверне
**`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Виведення зображення, використовуючи **imagegif()****

` <?php// Створення зображення$im u003d imagecreatetruecolor(100, 100);// Створення білого фонуimagefilledrectangle($im, 0, 0, 99, 99, 0xFFFFFF);   40, 20, 'GD'бібліотека', 0xFFBA00);

**Приклад #2 Перетворення PNG на GIF, використовуючи **imagegif()****

` <?php// Завантаження PNG$png u003d imagecreatefrompng('./php.png');// Збереження як GIFimagegif($png, './php.gif');// Звільнення пам'ятіimagedestroy($png);// / готовоecho 'Перетворення PNG в GIF успішно завершено!';?> `

### Примітки

> **Примітка**:
>
> Наступний приклад коду дозволить вам писати PHP додатки, які
> простіше портуватися на різні системи. У ньому використовується
> Автовизначення типу GD підтримки, доступної в даний момент. Замініть
> рядки: `header ("Content-Type: image/gif"); imagegif ($im);` на більш
> переносимі:
>
> `<?php// Створення нового зображення$im u003d imagecreatetruecolor(100, 100);// Якісь операції з зображенням// Обробка виводуif(function_exists('imagegif'))         Type: image/gif'); imagegif($im);}elseif(function_exists('imagejpeg')){    // для JPEG    header('Content-Type: image/jpeg'); imagejpeg($im, NULL, 100);}elseif(function_exists('imagepng')){    // для PNG    header('Content-Type: image/png'); imagepng($im);}elseif(function_exists('imagewbmp')){ для WBMP    header('Content-Type: image/vnd.wap.wbmp'); imagewbmp($im);}else{   imagedestroy($im); die('У цьому PHP сервері ні підтримки зображень');}//Якщо не підтримується ні один із форматів// звільним пам'ятьif($im){    imagedestroy($)

> **Примітка**:
>
> Ви можете використовувати функцію
> [imagetypes()](function.imagetypes.md) для перевірки, які формати
> підтримуються:
>
> ` <?phpif(imagetypes() & IMG_GIF){    header('Content-Type: image/gif'); imagegif($im);}elseif(imagetypes() & IMG_JPG){    /* ... і т.д. */}?> `

### Дивіться також

- [imagepng()](function.imagepng.md) - Виведення PNG зображення в
браузер або файл
- [imagewbmp()](function.imagewbmp.md) - Виводить зображення на
браузер або пише у файл
- [imagejpeg()](function.imagejpeg.md) - Виводить зображення на
браузер або пише у файл
- [imagetypes()](function.imagetypes.md) - Повертає список типів
зображень, підтримуваних PHP збиранням
