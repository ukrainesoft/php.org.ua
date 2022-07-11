- [«odbc_free_result](function.odbc-free-result.md)
- [odbc_longreadlen »] (function.odbc-longreadlen.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає інформацію про типи даних, що підтримуються джерелом
даних

#odbc_gettypeinfo

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_gettypeinfo — Повертає інформацію про типи даних, що підтримуються
джерелом даних

### Опис

**odbc_gettypeinfo**(resource `$odbc`, int `$data_type` u003d 0):
resource\|false

Повертає інформацію про типи даних, що підтримуються джерелом даних.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`data_type`
Тип даних, який можна використовувати для обмеження інформації до
одного типу даних.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC або **`false`** у разі
виникнення помилки.

У результуючому наборі є такі стовпці:

- TYPE_NAME
- DATA_TYPE
- PRECISION
- LITERAL_PREFIX
- LITERAL_SUFFIX
- CREATE_PARAMS
- NULLABLE
- CASE_SENSITIVE
- SEARCHABLE
- UNSIGNED_ATTRIBUTE
- MONEY
- AUTO_INCREMENT
- LOCAL_TYPE_NAME
- MINIMUM_SCALE
- MAXIMUM_SCALE

Набір результатів упорядкований за DATA_TYPE та TYPE_NAME.
