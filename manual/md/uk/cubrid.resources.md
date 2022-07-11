- [« Налаштування під час виконання](cubrid.configuration.md)
- [Предвизначені константи »](cubrid.constants.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](cubrid.setup.md)
- Типи ресурсів

## Типи ресурсів

Існує чотири типи ресурсів, що використовуються в CUBRID. Перший -
ідентифікатор з'єднання, другий - ресурс, що зберігає результат запиту, та
два останні містять результати запиту типів BLOB/CLOB.

## ідентифікатор з'єднання

Ідентифікатор з'єднання, що повертається функціями
[cubrid_connect()](function.cubrid-connect.md),
[cubrid_connect_with_url()](function.cubrid-connect-with-url.md),
[cubrid_pconnect()](function.cubrid-pconnect.md) та
[cubrid_pconnect_with_url()](function.cubrid-pconnect-with-url.md).

## request identifier

Ідентифікатор запиту, який повертається функціями
[cubrid_prepare()](function.cubrid-prepare.md) та
[cubrid_execute()](function.cubrid-execute.md).

## Ідентифікатор LOB

Ідентифікатор LOB, який повертається функцією
[cubrid_lob_get()](function.cubrid-lob-get.md).

## LOB2 identifier

Ідентифікатор LOB, який повертається функцією
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або взятий з
результуючого набору.
