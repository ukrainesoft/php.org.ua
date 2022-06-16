- [« Вимоги](ds.requirements.md)
- [Предвизначені константи »](ds.constants.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](ds.setup.md)
- Установка

## Установка

Найпростіший спосіб встановлення, через
[»PECL](https://pecl.php.net/package/ds)

pecl install ds

Також ви можете самостійно зібрати його з вихідних джерел:

# Залежності, які, можливо, доведеться встановити
# sudo apt-get install git build-essential php7.0-dev

git clone https://github.com/php-ds/extension "php-ds"
cd php-ds

# Складання та встановлення модуля
phpize
./configure
make
make install

# Очищення артефактів, що залишилися
make clean
phpize --clean

Якщо ви використовуєте Windows, ви можете завантажити [» готову бібліотеку
.dll з PECL](https://pecl.php.net/package/ds)

> **Примітка**:
>
> Якщо ви використовуєте Composer, рекомендується включити
> [» php-ds/php-ds](https://packagist.org/packages/php-ds/php-ds) у ваш
> проект, щоб ваш код залишався робочим, без того,
> встановлено модуль чи ні.
