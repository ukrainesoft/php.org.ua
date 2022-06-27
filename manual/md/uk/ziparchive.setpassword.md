- [« ZipArchive::setMtimeName](ziparchive.setmtimename.md)
- [ZipArchive::statIndex »](ziparchive.statindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановлення пароля для активного архіву

# ZipArchive::setPassword

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8, PECL zip \>u003d 1.12.4)

ZipArchive::setPassword — Встановлення пароля для активного архіву

### Опис

public **ZipArchive::setPassword**(string `$password`): bool

Визначає пароль для активного архіву.

### Список параметрів

`password`
Пароль для архіву.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Починаючи з PHP 7.2.0 і libzip 1.2.0, пароль використовується для
> розпакування архіву, а також як пароль за замовчуванням для
> [ZipArchive::setEncryptionName()](ziparchive.setencryptionname.md) та
> [ZipArchive::setEncryptionIndex()](ziparchive.setencryptionindex.md).
> Раніше ця функція встановлювала пароль лише для розпакування. Вона не
> не перетворювала не захищений паролем
> [ZipArchive](class.ziparchive.md) у захищений
> [ZipArchive](class.ziparchive.md).

### Дивіться також

- [ZipArchive::setEncryptionIndex()](ziparchive.setencryptionindex.md) -
Встановити метод шифрування запису за його індексом
- [ZipArchive::setEncryptionName()](ziparchive.setencryptionname.md) -
Встановити метод шифрування запису на його ім'я
