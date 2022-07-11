- [«
ZipArchive::setCompressionName](ziparchive.setcompressionname.md)
- [ZipArchive::setEncryptionName »](ziparchive.setencryptionname.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановити метод шифрування запису за його індексом

# ZipArchive::setEncryptionIndex

(PHP \>u003d 7.2.0, PHP 8, PECL zip \>u003d 1.14.0)

ZipArchive::setEncryptionIndex — Встановити метод шифрування запису
її індексу

### Опис

public **ZipArchive::setEncryptionIndex**(int `$index`, int `$method`,
?string `$password` u003d **`null`**): bool

Встановлює метод шифрування запису, вказаного за індексом.

### Список параметрів

`index`
Індекс запису.

`method`
Метод шифрування, заданий однією із констант ZipArchive::EM\_.

`password`
Пароль. Якщо не вказувати, буде використано пароль за замовчуванням.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | `password` тепер припускає значення null. |

### Примітки

> **Примітка**:
>
> Функція доступна лише якщо скомпільовано за допомогою libzip ≥
>1.2.0.

### Дивіться також

- [ZipArchive::setPassword()](ziparchive.setpassword.md) - Установка
пароля для активного архіву
- [ZipArchive::setEncryptionName()](ziparchive.setencryptionname.md) -
Встановити метод шифрування запису на його ім'я
