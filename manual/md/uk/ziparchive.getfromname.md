- [« ZipArchive::getFromIndex](ziparchive.getfromindex.md)
- [ZipArchive::getNameIndex »](ziparchive.getnameindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Повертає вміст елемента на його ім'я

# ZipArchive::getFromName

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::getFromName — Повертає вміст елемента на його ім'я

### Опис

public **ZipArchive::getFromName**(string `$name`, int `$len` u003d 0, int
`$flags` u003d 0): string\|false

Повертає вміст елемента на його ім'я.

### Список параметрів

`name`
Назва елемента.

`len`
Розмір даних з елемента. Якщо `0`, вміст читається
повністю.

`flags`
Прапори, які використовуються для пошуку запису. Наступні значення можуть бути
приєднані (побітове АБО).

- **`ZipArchive::FL_UNCHANGED`**

- **`ZipArchive::FL_COMPRESSED`**

- **`ZipArchive::FL_NOCASE`**

### Значення, що повертаються

Повертає вміст елемента при успіху або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Отримати вміст файлу**

` <?php$zip u003d new ZipArchive;if ($zip->open('test1.zip') u003du003du003d TRUE) {    echo $zip->getFromName('testfromfile.php'); $zip->close();} else {    echo 'помилка';}?> `

**Приклад #2 Перетворити зображення з ZIP-елемента**

` <?php$z u003d new ZipArchive();if ($z->open(dirname(__FILE__) . '/test_im.zip')) {   $im_string u003d $z->getFromName("pear_item.gif") $im u003d imagecreatefromstring($im_string); imagepng($im, 'b.png');}?> `

### Дивіться також

- [ZipArchive::getFromIndex()](ziparchive.getfromindex.md) -
Повертає вміст елемента за його індексом
