- [«PDO_IBM DSN](ref.pdo-ibm.connection.md)
- [PDO_INFORMIX DSN »](ref.pdo-informix.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції Informix (PDO_INFORMIX)

# Функції Informix (PDO_INFORMIX)

## Вступ

PDO_INFORMIX - це драйвер, що реалізує інтерфейс [PHP Data Objects
(PDO)](intro.pdo.md) для доступу до баз даних Informix.

## Установка

Для складання модуля PDO_INFORMIX вам потрібно встановити на тому ж
хості Informix Client SDK 2.81 UC1 або вище. Informix Client SDK можна
завантажити з [» сайту підтримки IBM
Informix](http://www-306.ibm.com/software/data/informix/tools/csdk/).

PDO_INFORMIX є модулем [»PECL](https://pecl.php.net/), так що
для його встановлення слідуйте наступним інструкціям [Установка модулів
PECL](install.pecl.md). Виконайте команду **configure**, вказавши
розташування заголовних файлів та бібліотек Informix Client SDK:

bash$ ./configure --with-pdo-informixu003d/path/to/SDK[,shared]

За замовчуванням команда **configure** використовуватиме значення
змінної оточення `INFORMIXDIR`.

## Перемотується курсор

PDO_INFORMIX підтримує курсори, що перемотуються; однак за умовчанням їх
використання не дозволено. Для дозволу їх підтримки ви повинні
вказати **`ENABLESCROLLABLECURSORSu003d1`** у відповідних налаштуваннях
з'єднання ODBC в `odbc.ini` або задати параметр
**`EnableScrollableCursorsu003d1`** у рядку з'єднання (DSN).

## Зміст

- [PDO_INFORMIX DSN](ref.pdo-informix.connection.md) — З'єднання з
базою даних Informix
