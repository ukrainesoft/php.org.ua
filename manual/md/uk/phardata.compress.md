- [« PharData::buildFromIterator](phardata.buildfromiterator.md)
- [PharData::compressFiles »](phardata.compressfiles.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Стискає весь архів tar/zip, використовуючи стиснення Gzip або Bzip2

# PharData::compress

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::compress — Стискає весь архів tar/zip, використовуючи стиснення Gzip
або Bzip2

### Опис

public **PharData::compress**(int `$compression`, ?string `$extension` u003d
**`null`**): ?[PharData](class.phardata.md)

Для tar-архівів, цей метод здійснить стиснення всього архіву за допомогою
gzip або bzip2. Результуючий файл можна розпакувати за допомогою команд
gunzip або bunzip або використовувати безпосередньо через модуль Phar.

Для zip-архівів цей метод викине виняток. Для gzip-стиснення повинен
бути доступним модуль [zlib](ref.zlib.md). Для bzip2-стиснення має бути
доступний модуль [bzip2](ref.bzip2.md).

Цей метод перейменовує архів, додаючи до імені розширення `.gz`,
`.bz2` або навпаки, що прибирає його, якщо параметр типу стиснення заданий як
`Phar::NONE`. Також можна явно вказати, яке розширення матиме
файл.

### Список параметрів

`compression`
Одна з констант: `Phar::GZ`, `Phar::BZ2`, або `Phar::NONE` для
відключення компресії.

`extension`
За промовчанням файлу призначається розширення `.tar.gz` або `.tar.bz2` для
стиснення та `.tar`, якщо стиснення відключено.

### Значення, що повертаються

Повертає об'єкт [PharData](class.phardata.md) у разі успішного
виконання або **`null`** у разі виникнення помилки.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо
недоступний модуль [zlib](ref.zlib.md) або вимкнено модуль
[bzip2](ref.bzip2.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.0 | ` extension ` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **PharData::compress()****

` <?php$p u003d new PharData('/path/to/my.tar');$p['myfile.txt'] u003d 'hi';$p['myfile2.txt'] u003d 'hi'; $p1u003du003d$p->compress(Phar::GZ); // copies to /path/to/my.tar.gz$p2 u003d $p->compress(Phar::BZ2); // copies to /path/to/my.tar.bz2$p3 u003d $p2->compress(Phar::NONE); // exception: /path/to/my.tar already exists?> `

### Дивіться також

- [Phar::compress()](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
