- [«
ZipArchive::isCompressionMethodSupported](ziparchive.iscompressionmethoddupported.md)
- [ZipArchive::locateName »](ziparchive.locatename.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Перевіряє, чи підтримується метод шифрування libzip

# ZipArchive::isEncryptionMethodSupported

(PHP \>u003d 8.0.0, PECL zip \>u003d 1.19.0)

ZipArchive::isEncryptionMethodSupported — Перевіряє, чи підтримується
метод шифрування libzip

### Опис

public static **ZipArchive::isEncryptionMethodSupported**(int `$method`,
bool `$enc` u003d **`true`**): bool

Перевіряє, чи підтримується метод шифрування libzip.

### Список параметрів

`method`
Метод шифрування, одна із констант **`ZipArchive::EM_*`**.

`enc`
Якщо **`true`** перевірка шифрування, інакше перевірка розшифровки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо PHP зібрано з libzip ≥
>1.7.0.

### Дивіться також

- [ZipArchive::setEncryptionIndex()](ziparchive.setencryptionindex.md) -
Встановити метод шифрування запису за його індексом
- [ZipArchive::setEncryptionName()](ziparchive.setencryptionname.md) -
Встановити метод шифрування запису на його ім'я
