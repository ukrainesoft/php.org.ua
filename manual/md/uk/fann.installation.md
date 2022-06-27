- [« Вимоги](fann.requirements.md)
- [Налаштування під час виконання »](fann.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](fann.setup.md)
- Установка

## Установка

Модуль FANN має працювати на будь-яких дистрибутивах Linux.

- [Встановлення бібліотеки
FANN](fann.installation.md#fann.installation.lib)
- [Встановлення з PECL](fann.installation.md#fann.installation.pecl)
- [Ручне встановлення](fann.installation.md#fann.installation.manual)

## Встановлення бібліотеки FANN

Перед початком встановлення переконайтеся, що на вашій системі вже встановлено
бібліотека * libfann *. Вона є частиною головного репозиторію в
більшості дистрибутивів Linux (шукайте за словом "fann"). Вам потрібна
версія для розробників.

Якщо вона не встановлена, то вам все-таки доведеться її встановити. Можете
встановити її з репозиторію ОС чи завантажити з [» офіційного
сайту](http://leenissen.dk/fann/wp/). Наприклад для Fedora:


$ sudo yum install fann-devel

або Ubuntu:


$ sudo apt-get install libfann-dev

Якщо бібліотека встановлюється вручну, то спочатку необхідно
видалити стару версію бібліотеки, інакше вона не буде замінена.

## Установка з PECL

Цей модуль доступний PECL. Установка дуже проста, запустіть:


$ sudo pecl install fann

## Ручне встановлення

Для розробників та людей, зацікавлених у найсвіжішій версії, є
можливість скомпілювати з найсвіжіших вихідних кодів, що лежать
на [»GitHub](https://github.com/bukka/php-fann). Зайдіть на GitHub та
натисніть "Download ZIP". після цього запустіть:


$ unzip php-fann-master.zip
$ cd php-fann-master
$ phpize
$./configure
$ make all
$ sudo make install

Внесіть наступні зміни до php.ini:

- Переконайтеся, що *extension_dir* вказує на директорію, де
знаходиться *fann.so*. При збиранні на екран буде виведено, куди саме
встановлюється скомпільований модуль:


Installing '/usr/lib/php/extensions/no-debug-non-zts-20060613/fann.so'

Переконайтеся, що це шлях, в якому лежать модулі PHP:


$php-i | grep extension_dir
extension_dir u003d> /usr/lib/php/extensions/no-debug-non-zts-20060613 u003d>
/usr/lib/php/extensions/no-debug-non-zts-20060613

Якщо це не так, то поміняйте *extension_dir* у php.ini або просто
перемістіть *fann.so* куди слід.

- Для завантаження модуля під час запуску PHP, додайте у php.ini рядок:


extensionu003dfann.so
