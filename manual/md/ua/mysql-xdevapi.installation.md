- [« Вимоги](mysql-xdevapi.requirements.md)
- [Налаштування під час виконання »](mysql-xdevapi.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mysql-xdevapi.setup.md)
- Встановлення

## Установка

Цей модуль [»PECL](https://pecl.php.net/) не поставляється разом з
PHP.

Приклад процедури встановлення на Ubuntu 18.04 з PHP 7.2:

// Залежно
$ apt install build-essential libprotobuf-dev libboost-dev openssl protobuf-compiler liblz4-tool zstd

// PHP із потрібними модулями; php7.2-dev, необхідним для компіляції
$ apt install php7.2-cli php7.2-dev php7.2-mysql php7.2-pdo php7.2-xml

// Компіляція модуля
$pecl install mysql_xdevapi

Команда `pecl install` не включає модулі PHP (за замовчуванням), включення
модулів PHP може бути зроблено кількома способами. Інший приклад PHP
7.2 в Ubuntu 18.04:

// Створення власного файлу ini
$ echo "extensionu003dmysql_xdevapi.so" > /etc/php/7.2/mods-available/mysql_xdevapi.ini

// Використання команди 'phpenmod' (примітка: це стосується Debian/Ubuntu)
$ phpenmod -v 7.2 -s ALL mysql_xdevapi

// Альтернативою 'phpenmod' є створення символічного посилання
// $ln -s /etc/php/7.2/mods-available/mysql_xdevapi.ini /etc/php/7.2/cli/conf.d/20-mysql_xdevapi.ini

// Давайте подивимося, які модулі MySQL зараз включені
$ php -m | grep mysql

mysql_xdevapi
mysqli
mysqlnd
pdo_mysql

Інформація щодо встановлення цього модуля PECL може бути знайдена у розділі
керівництва [Встановлення модулів PECL](install.pecl.md). Додаткова
інформація, така як нові версії, завантаження, вихідні файли,
інформація про розробника та CHANGELOG, може бути знайдена тут:
[»https://pecl.php.net/package/mysql_xdevapi](https://pecl.php.net/package/mysql_xdevapi).
