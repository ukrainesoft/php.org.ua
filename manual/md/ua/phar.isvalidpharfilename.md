- [« Phar::isFileFormat](phar.isfileformat.md)
- [Phar::isWritable »](phar.iswritable.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Перевіряє, що ім'я файлу є коректним ім'ям
phar-архіву

# Phar::isValidPharFilename

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.0)

Phar::isValidPharFilename — Перевіряє, що задане ім'я файлу є
коректним ім'ям phar-архіву

### Опис

final public static **Phar::isValidPharFilename**(string `$filename`,
bool `$executable` u003d **`true`**): bool

Перевіряє, що ім'я файлу є коректним ім'ям
phar-архіву. Можна використовувати для перевірки імені файлу до його
безпосереднього створення, щоб уникнути небажаних винятків.

### Список параметрів

`filename`
Ім'я або повний шлях до файлу, який ще не створено

`executable`
Цей параметр визначає, чи повинен файл розпізнаватись як запускається
phar-архів, або як архів, що не запускається, з даними

### Значення, що повертаються

Повертає **`true`** або **`false`**.
