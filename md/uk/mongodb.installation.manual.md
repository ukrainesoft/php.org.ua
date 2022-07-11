- [« Установка драйвера PHP MongoDB під
Windows](mongodb.installation.windows.md)
- [Налаштування під час виконання »](mongodb.configuration.md)

- [PHP Manual](index.md)
- [Установка](mongodb.installation.md)
- Складання драйвера PHP MongoDB з вихідного коду

## Складання драйвера PHP MongoDB з вихідного коду

Розробники драйверів та людей зацікавлені у найсвіжіших версіях,
можуть зібрати драйвер із вихідних кодів, які знаходяться тут:
[»GitHub](https://github.com/mongodb/mongo-php-driver). Запустіть
наступні команди для клонування та складання проекту:

`` shellcode
$ git clone https://github.com/mongodb/mongo-php-driver.git
$ cd mongo-php-driver
$ git submodule update --init
$ phpize
$./configure
$ make all
$ sudo make install
````

Якщо на вашій системі встановлено кілька версій PHP (наприклад, для
macOS установка за замовчуванням *І*
[» XAMPP](https://www.apachefriends.org/)), зверніть увагу, що
кожна з них має власну команду
[phpize](install.pecl.phpize.md) та файл `php.ini`.

За замовчуванням драйвер використовуватиме вбудовану версію
[» libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson),
[» libmongoc](https://github.com/mongodb/mongo-c-driver) та
[» libmongocrypt](https://github.com/mongodb/libmongocrypt) і спробує
настроїти їх самостійно. Якщо ці бібліотеки вже встановлені в
системі, ви можете повідомити драйверу про це за допомогою аргументу
`--with-libbsonu003dyes --with--libmongocu003dyes` команди `configure`. Починаючи
з версії 1.7.0 модуля ці аргументи застаріли, і ви повинні використовувати
замість них `-with-mongodb-system-libsu003dyes`.

Повний список опцій команди `configure` можна отримати за допомогою
**configure --help**.

При використанні вбудованих версій libbson і libmongoc, драйвер також
спробує вибрати бібліотеку SSL відповідно до опції
`--with-mongodb-ssl` команди `configure`. За замовчуванням це
`--with-mongodb-sslu003dauto`, що призведе до пошуку в такому порядку: Secure
Transport (тільки MacOS), OpenSSL, LibreSSL. Також ви можете явно
вказати `openssl`, `libressl` або `darwin`.

> **Примітка**:
>
> Якщо процес встановлення не зможе знайти бібліотеку SSL, переконайтеся, що
> встановлені пакети розробок (такі як `libssl-dev`) та пакет
> [»pkg-config](https://en.wikipedia.org/wiki/Pkg-config).
>
> При використанні Homebrew для macOS, звичайна ситуація, коли
> Встановлено кілька різних версій OpenSSL. Для використання саме
> версії, яка вам потрібна, відповідним чином встановіть
> змінну оточення `PKG_CONFIG_PATH`. Вона використовуватиметься
> `pkg-config` для визначення шляху пошуку. Якщо не використовується
> `pkg-config`, то можна використовувати `configure` з ключем
> `--with-openssl-diru003dDIR` (лише для OpenSSL).

На останньому, фінальному кроці, **make install** виведе шлях, яким
була зібрана модуль `mongodb.so`. Наприклад так:

``` txtcode
Installing shared extensions: /usr/lib/php/extensions/debug-non-zts-20151012/
````

Переконайтеся, що директива
[extension_dir](ini.core.md#ini.extension-dir) файлу `php.ini`
вказує на каталог, в якому є бібліотека `mongodb.so`.
Перевірити значення цієї директиви можна так:

`` shellcode
$php-i | grep extension_dir
extension_dir u003d> /usr/lib/php/extensions/debug-non-zts-20151012 u003d>
/usr/lib/php/extensions/debug-non-zts-20151012
````

Якщо директорії відрізняються, то змініть значення
[extension_dir](ini.core.md#ini.extension-dir) в `php.ini` або просто
перемістіть `mongodb.so` у потрібну директорію.

Додайте наступний рядок до `php.ini`:

`` inicode
extensionu003dmongodb.so
````
