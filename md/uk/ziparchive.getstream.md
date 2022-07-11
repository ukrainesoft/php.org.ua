- [« ZipArchive::getStatusString](ziparchive.getstatusstring.md)
- [ZipArchive::getStreamIndex »](ziparchive.getstreamindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Отримати дескриптор файлу елемента, визначений на ім'я елемента
(тільки для читання)

# ZipArchive::getStream

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::getStream — Отримати дескриптор файлу елемента
на ім'я елемента (тільки для читання)

### Опис

public **ZipArchive::getStream**(string `$name`): resource\|false

Отримати дескриптор файлу, визначений на ім'я елемента. На цей
момент підтримуються лише операції читання.

### Список параметрів

`name`
Ім'я елемента, що використовується.

### Значення, що повертаються

Повертає файловий покажчик (ресурс) у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Отримати вміст елемента за допомогою
[fread()](function.fread.md) та зберегти його**

` <?php$contents u003d '';$z u003d new ZipArchive();if ($z->open('test.zip')) {   $fp u003d $z->getStream('test'); if(!$fp) exit("помилка
");   while (!feof($fp)) {        $contents .u003d fread($fp, 2);   }}    fclose($fp);    |
";}?> `

**Приклад #2 Те саме, що й у попередньому прикладі, але використовуючи
[fopen()](function.fopen.md) і через обгортку zip-потоку**

` <?php$contents u003d '';$fp u003d fopen('zip://' . dirname(__FILE__) . '/test.zip#test', 'r');if (!$fp) {    exit( "Не вдається відкрити
");}while (!feof($fp)) {    $contents .u003d fread($fp, 2);}echo "$contents
";fclose($fp);echo "Готово.
";?> `

**Приклад #3 ZIP-потік та зображення можуть бути використані також у
функції XML**

` <?php$im u003d imagecreatefromgif('zip://' . dirname(__FILE__) . '/test_im.zip#pear_item.gif');imagepng($im, 'a.png');?> `

### Дивіться також

- [ZipArchive::getStreamIndex()](ziparchive.getstreamindex.md) -
Отримує обробник файлу для запису, визначеного його індексом
(тільки для читання)
- [ZipArchive::getStreamName()](ziparchive.getstreamname.md) -
Отримує обробник файлу для запису, визначеного його ім'ям (тільки
для читання)
