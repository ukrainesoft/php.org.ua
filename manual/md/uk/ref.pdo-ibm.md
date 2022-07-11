- [«PDO_FIREBIRD DSN](ref.pdo-firebird.connection.md)
- [PDO_IBM DSN »](ref.pdo-ibm.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції IBM (PDO_IBM)

# Функції IBM (PDO_IBM)

## Вступ

PDO_IBM – це драйвер, що реалізує інтерфейс [PHP Data Objects
(PDO)](intro.pdo.md) для надання можливості працювати з базами
даних IBM.

## Установка

Для складання модуля PDO_IBM на вашій системі має бути встановлений DB2
Client версії v9.1 або вище. DB2 Client можна завантажити з сайту [» сайту
розробки додатків IBM](http://www.ibm.com/software/data/db2/ad).

> **Примітка**: **Зверніть увагу**
>
> DB2 Client версії v9.1 та вище підтримує прямий доступ до DB2 для
> Linux, UNIX та Windows Server v8 та v9.1.
>
> Також DB2 Client v9.1 підтримує доступ до серверів DB2 UDB для i5 та
> DB2 UDB для z/OS, використовуючи окремо куплений [» продукт DB2
> Connect](http://www.ibm.com/software/data/db2/db2connect).

PDO_IBM - це модуль [»PECL](https://pecl.php.net/), так що слідуйте
інструкції [Установка модулів PECL](install.pecl.md) для встановлення
даного модуля. Не забудьте вказати команді **configure** розташування
заголовних файлів DB2 Client та бібліотек:

bash$ ./configure --with-pdo-ibmu003d/path/to/sqllib[,shared]

Команда **configure** за умовчанням використовуватиме змінну
оточення `DB2DIR`.

## Зміст

- [PDO_IBM DSN](ref.pdo-ibm.connection.md) — З'єднання з базою
даних IBM
