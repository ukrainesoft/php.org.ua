- [« Установка](ibm-db2.installation.md)
- [Типи ресурсів»] (ibm-db2.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](ibm-db2.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Лог змін |
|------------------------------------------------- ------------------------------------|------------- -|-----------------|---------------------------|
| [ibm_db2.binmode](ibm-db2.configuration.md#ini.ibm-db2.binmode) | "1" | PHP_INI_ALL | |
| [ibm_db2.i5_all_pconnect](ibm-db2.configuration.md#ini.ibm-db2.i5-all-pconnect) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.6.5. |
| [ibm_db2.i5_allow_commit](ibm-db2.configuration.md#ini.ibm-db2.i5-allow-commit) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.4.9. |
| [ibm_db2.i5_dbcs_alloc](ibm-db2.configuration.md#ini.ibm-db2.i5-dbcs-alloc) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.5.0. |
| [ibm_db2.instance_name](ibm-db2.configuration.md#ini.ibm-db2.instance-name) | NULL | PHP_INI_SYSTEM | Доступно з ibm_db2 1.0.2. |
| [ibm_db2.i5_ignore_userid](ibm-db2.configuration.md#ini.ibm-db2.i5-ignore-userid) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.8.0. |

**ibm_db2 Опції настроювання**

Коротке пояснення конфігураційних директив.

`ibm_db2.binmode` int
Ця опція контролює режим конвертації з/в бінарні дані в
програмі PHP.

- 1 (DB2_BINARY)

- 2 (DB2_CONVERT)

- 3 (DB2_PASSTHRU)

`ibm_db2.i5_all_pconnect` int
Ця опція повністю перевизначає поведінку i5
[db2_connect()](function.db2-connect.md). Якщо
`ibm_db2.i5_all_pconnect` u003d 1, всі з'єднання з DB2 будуть постійними
([db2_pconnect()](function.db2-pconnect.md)). На i5/OS використовувати
[db2_pconnect()](function.db2-pconnect.md) набагато, категорично,
краще, ніж [db2_connect()](function.db2-connect.md). Ця установка
перевизначає [db2_connect()](function.db2-connect.md) таким чином,
що завжди викликається [db2_pconnect()](function.db2-pconnect.md), що
дозволяє не переписувати код програми.

- 0 - [db2_connect()](function.db2-connect.md) працює штатно

- 1 - [db2_connect()](function.db2-connect.md) працює як
[db2_pconnect()](function.db2-pconnect.md)

`ibm_db2.i5_allow_commit` int
Ця опція контролює рівень ізоляції, що використовується для i5 схеми
колекцій у програмі PHP (дивися `i5_commit` для перевизначення).

- 0 - Контроль зобов'язань не використовується.

- 1 - read uncommitted, можливе брудне читання.

- 2 - read committed, брудне читання неможливо.

- 3 - repeatable read, брудне і неповторне читання не можливі.

- 4 - serializeable, брудне читання, неповторне читання і фантоми
неможливі.

`ibm_db2.i5_dbcs_alloc` int
Ця опція контролює внутрішню схему розташування великих буферів
колонок DBCS

- 0 - немає розширеного розміщення (дивись `i5_dbcs_alloc` для
перевизначення)

- 1 - використовувати розширене розміщення (дивись `i5_dbcs_alloc` для
перевизначення)

`ibm_db2.instance_name` string
В операційних системах Linux і UNIX ця опція задає ім'я екземпляра
для використання каталогізованих з'єднань із базою даних. Якщо ця
опція визначена, її значення використовується замість значення змінної
оточення DB2INSTANCE.

Ця опція ігнорується у Windows.

`ibm_db2.i5_ignore_userid` int
Ця опція перевизначає userid та password для i5 db2\_(p)connect
програмі PHP. Якщо `ibm_db2.i5_ignore_userid` u003d 1, всі з'єднання
будуть відбуватися з useridu003d**`null`** та passwordu003d**`null`**.
Отже завдання Apache будуть з'єднуватися з поточним профайлом
(NOBODY). Використовуйте це перевизначення тільки для простих сайтів, не
що вимагають перемикання профайлів і, отже, зможете уникнути всіх
накладних витрат, пов'язаних з додатковими завданнями QSQSRVR. Це
просте рішення для обнулення userid та password без внесення змін до
код PHP. Це перевизначення можна використовувати разом з
`ibm_db2.i5_all_pconnect` u003d 1.

- 0 - db2\_(p)connect використовує передані userid та password

- 1 - db2\_(p)connect вважає userid та password за **`null`**
