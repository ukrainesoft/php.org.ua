- [« Radius] (book.radius.md)
- [Встановлення та налаштування »](radius.setup.md)

- [PHP Manual](index.md)
- [Radius](book.radius.md)
-   Вступ

# Вступ

Пакет базується на бібліотеці libradius (Remote Authentication Dial In
User Service) із FreeBSD. Він дозволяє проводити облік та автентифікацію
клієнтів шляхом запитів до віддалених мережевих сервісів.

Цей модуль PECL додає повну підтримку Radius Authentication
([» RFC 2865](http://www.faqs.org/rfcs/rfc2865)) та Radius Accounting
([»RFC 2866](http://www.faqs.org/rfcs/rfc2866)). Цей пакет доступний
для Unix (тестувався у FreeBSD та Linux) та для Windows.

> **Примітка**:
>
> Детальний опис бібліотеки libradius можна знайти
> [»тут](http://www.freebsd.org/cgi/man.cgi?queryu003dlibradius). Детальна
> інформація про файл конфігурації лежить
> [»тут](http://www.freebsd.org/cgi/man.cgi?queryu003dradius.conf).
