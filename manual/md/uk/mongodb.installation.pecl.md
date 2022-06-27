- [« Установка](mongodb.installation.md)
- [Установка драйвера PHP MongoDB на macOS за допомогою Homebrew
»](mongodb.installation.homebrew.md)

- [PHP Manual](index.md)
- [Установка](mongodb.installation.md)
- Встановлення драйвера PHP MongoDB за допомогою PECL

## Встановлення драйвера PHP MongoDB за допомогою PECL

Інформація щодо встановлення цього модуля PECL може бути знайдена у розділі
керівництва [Встановлення модулів PECL](install.pecl.md). Додаткова
інформація, така як нові версії, завантаження, вихідні файли,
інформація про розробника та CHANGELOG, може бути знайдена тут:
[»https://pecl.php.net/package/mongodb](https://pecl.php.net/package/mongodb)

Користувачі Linux, Unix та macOS можуть використовувати наступну команду
для встановлення драйвера:

`` shellcode
$ sudo pecl install mongodb
````

Якщо на вашій системі встановлено кілька версій PHP (наприклад, для
macOS: установка за замовчуванням, Homebrew та
[» XAMPP](https://www.apachefriends.org/)), зверніть увагу, що
кожна з них має власну команду [pecl](install.pecl.md) та файл
`php.ini`.

Встановлення драйвера за допомогою PECL використовує вбудовані бібліотеки
[» libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson)
і [» libmongoc](https://github.com/mongodb/mongo-c-driver) і спробує
конфігурувати їх автоматично.

> **Примітка**: Якщо процес встановлення не зможе знайти бібліотеку SSL,
> переконайтеся, що встановлені пакети розробок (такі як
> `libssl-dev`) та пакет
> [»pkg-config](https://en.wikipedia.org/wiki/Pkg-config). якщо це не
> допоможе, то зробіть [ручну
> інсталяцію](mongodb.installation.manual.md).

І, нарешті, додайте наступний рядок в `php.ini`:

`` inicode
extensionu003dmongodb.so
````
