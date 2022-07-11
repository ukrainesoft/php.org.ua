- [« ZipArchive::getStream](ziparchive.getstream.md)
- [ZipArchive::getStreamName »](ziparchive.getstreamname.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Отримує обробник файлу для запису, визначеного його індексом
(тільки для читання)

# ZipArchive::getStreamIndex

(PHP 8 \>u003d 8.2.0, PECL zip \>u003d 1.20.0)

ZipArchive::getStreamIndex — Отримує обробник файлу для запису,
визначеною її індексом (тільки для читання)

### Опис

public **ZipArchive::getStreamIndex**(int `$index`, int `$flags` u003d 0):
resource\|false

Отримує обробник файлу для запису, визначеного його індексом. На
На даний момент метод підтримує тільки операції читання.

### Список параметрів

`index`
Індекс запису.

`flags`
Якщо у flags встановлена константа **`ZipArchive::FL_UNCHANGED`**,
повертається вихідний незмінений потік.

### Значення, що повертаються

У разі успішного виконання повертає покажчик на файл (ресурс) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Отримання та збереження вмісту запису за допомогою
[fread()](function.fread.md)**

` <?php$contents u003d '';$z u003d new ZipArchive();if ($z->open('test.zip')) {   $fp u003d $z->getStreamIndex(1, ZipArchive::FL_UNCHA ; if(!$fp) die($z->getStatusString()); echo stream_get_contents($fp); fclose($fp);}?> `

### Дивіться також

- [ZipArchive::getStreamName()](ziparchive.getstreamname.md) -
Отримує обробник файлу для запису, визначеного його ім'ям (тільки
для читання)
