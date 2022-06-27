- [«image_type_to_mime_type](function.image-type-to-mime-type.md)
- [imageaffine »](function.imageaffine.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Виводить зображення у браузер або пише у файл

#image2wbmp

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7)

image2wbmp — Виводить зображення у браузер або пише файл

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.3.0 і була *Видалена*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

**image2wbmp**(resource `$image`, string `$filename` u003d ?, int
`$foreground` u003d ?): bool

**image2wbmp()** виводить або зберігає WBMP версію заданого
зображення `image`.

### Список параметрів

`image`
Ресурс зображення, який повертається однією з функцій створення зображення,
наприклад, [imagecreatetruecolor()](function.imagecreatetruecolor.md).

`filename`
Шлях збереження файла. Якщо не встановлено, вихідні дані зображення
будуть виведені безпосередньо у вихідний потік.

`foreground`
Ви можете встановити колір переднього плану за допомогою цього параметра,
встановивши ідентифікатор, отриманий за допомогою
[imagecolorallocate()](function.imagecolorallocate.md). Колір переднього
за замовчуванням чорний.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**Застереження**

Однак, якщо libgd не може вивести зображення, ця функція поверне
**`true`**.

### Приклади

**Приклад #1 Приклад використання **image2wbmp()****

` <?php$file u003d 'php.png';$image u003d imagecreatefrompng($file);header('Content-Type: ' . image_type_to_mime_type(IMAGETYPE_WBMP));image2wbmp($image); // виведення потокуimagedestroy($image);?> `

### Дивіться також

- [imagewbmp()](function.imagewbmp.md) - Виводить зображення на
браузер або пише у файл
