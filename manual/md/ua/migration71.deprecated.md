- [« Зміни, що ламають зворотну
сумісність](migration71.incompatible.md)
- [Змінені функції »](migration71.changed-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.0.x на PHP 7.1.x](migration71.md)
- Функціонал, оголошений застарілим у PHP 7.1.x

## Функціонал, оголошений застарілим у PHP 7.1.x

### ext/mcrypt

Модуль mcrypt не розвивався вже майже десять років, а також був украй
складним у використанні. Він був оголошений застарілим на користь OpenSSL. Він
буде видалено з ядра PHP і переміщений PECL в PHP 7.2.

### Модифікатор "e" для функцій [mb_ereg_replace()](function.mb-ereg-replace.md) та [mb_eregi_replace()](function.mb-eregi-replace.md)

Модифікатор шаблону `e` був оголошений застарілим для функцій
[mb_ereg_replace()](function.mb-ereg-replace.md) та
[mb_eregi_replace()](function.mb-eregi-replace.md).
