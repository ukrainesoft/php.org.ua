- [«Mcrypt](book.mcrypt.md)
- [Встановлення та налаштування »](mcrypt.setup.md)

- [PHP Manual](index.md)
- [Mcrypt](book.mcrypt.md)
-   Вступ

# Вступ

**Увага**

Ця функціональність оголошена *УСТАРНІЙ* в PHP 7.1.0 і *Видалена* в PHP
PHP 7.2.0.

Є такі альтернативи:

- [Sodium](book.sodium.md) (доступний з PHP 7.2.0)
- [OpenSSL](book.openssl.md)

> **Примітка**:
>
> Цей модуль було переміщено до репозиторію
> [»PECL](https://pecl.php.net/) і більше не поставляється з PHP 7.2.0.

Це інтерфейс до бібліотеки mcrypt, яка підтримує широкий спектр
блокових алгоритмів, таких як DES, TripleDES, Blowfish (за замовчуванням),
3-WAY, SAFER-SK64, SAFER-SK128, TWOFISH, TEA, RC2 та GOST з режимами
шифрування CBC, OFB, CFB та ECB. Додатково підтримуються RC6 та IDEA,
які є "не вільними". CFB/OFB за замовчуванням 8-біт.
