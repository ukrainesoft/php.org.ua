- [« ZipArchive::getStreamIndex](ziparchive.getstreamindex.md)
- [ZipArchive::isCompressionMethodSupported
»](ziparchive.iscompressionmethoddupported.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Отримує обробник файлу для запису, визначеного його ім'ям (тільки
для читання)

# ZipArchive::getStreamName

(PHP 8 \>u003d 8.2.0, PECL zip \>u003d 1.20.0)

ZipArchive::getStreamName — Отримує обробник файлу для запису,
певною її ім'ям (тільки для читання)

### Опис

public **ZipArchive::getStreamName**(string `$name`, int `$flags` u003d 0):
resource\|false

Отримує обробник файлу для запису, визначеного його ім'ям. На цей
момент метод підтримує лише операції читання.

### Список параметрів

`name`
Ім'я запису для використання.

`flags`
Якщо у flags встановлена константа **`ZipArchive::FL_UNCHANGED`**,
повертається вихідний незмінений потік.

### Значення, що повертаються

У разі успішного виконання повертає покажчик на файл (ресурс) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Отримання та збереження вмісту запису за допомогою
[fread()](function.fread.md)**

` <?php$contents u003d '';$z u003d new ZipArchive();if ($z->open('test.zip')) {   $fp u003d $z->getStreamName('test', ZipArchive:: FL_UNCHANGED); if(!$fp) die($z->getStatusString()); echo stream_get_contents($fp); fclose($fp);}?> `

### Дивіться також

- [ZipArchive::getStreamIndex()](ziparchive.getstreamindex.md) -
Отримує обробник файлу для запису, визначеного його індексом
(тільки для читання)
