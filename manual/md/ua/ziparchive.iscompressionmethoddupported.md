- [« ZipArchive::getStreamName](ziparchive.getstreamname.md)
- [ZipArchive::isEncryptionMethodSupported
»](ziparchive.isencryptionmethoddupported.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Перевіряє, чи підтримується метод стиснення libzip

# ZipArchive::isCompressionMethodSupported

(PHP \>u003d 8.0.0, PECL zip \>u003d 1.19.0)

ZipArchive::isCompressionMethodSupported — Перевіряє, чи підтримується
метод стиснення libzip

### Опис

public static **ZipArchive::isCompressionMethodSupported**(int
`$method`, bool `$enc` u003d **`true`**): bool

Перевіряє, чи підтримується метод стиснення libzip.

### Список параметрів

`method`
Метод стиснення, одна з констант **`ZipArchive::CM_*`**.

`enc`
Якщо **`true`** перевірка на стиснення, інакше перевірка на декомпресію.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо PHP зібрано з libzip ≥
>1.7.0.

### Дивіться також

- [ZipArchive::setCompressionIndex()](ziparchive.setcompressionindex.md) -
Встановити метод стиснення запису, заданого його індексом
- [ZipArchive::setCompressionName()](ziparchive.setcompressionname.md) -
Встановити метод стиснення запису, заданого на ім'я
