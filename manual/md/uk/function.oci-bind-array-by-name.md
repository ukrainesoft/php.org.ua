- [« OCI8 Функції](ref.oci8.md)
- [oci_bind_by_name »](function.oci-bind-by-name.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Пов'язує PHP масив з масивом Oracle PL/SQL

#oci_bind_array_by_name

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8, PECL OCI8 \>u003d 1.2.0)

oci_bind_array_by_name - Зв'язує PHP масив з масивом Oracle PL/SQL

### Опис

**oci_bind_array_by_name**(
resource `$statement`,
string `$param`,
array `&$var`,
int `$max_array_length`,
int `$max_item_length` u003d -1,
int `$type` u003d **`SQLT_AFC`**
): bool

Пов'язує PHP масив `var` з вказівником Oracle `param` на масив Oracle
PL/SQL. Напрямок, введення або висновок, для якого використовуватиметься
масив визначатиметься під час виконання.

### Список параметрів

`statement`
Ідентифікатор допустимого виразу OCI.

`param`
Вказівник на масив Oracle.

`var`
Масив.

`max_array_length`
Задає максимальний розмір для вихідного та результативного масивів.

`max_item_length`
Визначає максимальний розмір значень масиву. Якщо не задано чи одно
-1, **oci_bind_array_by_name()** знайде найбільший елемент у вихідному
масиві і використовує його розмір як цю настройку.

`type`
Використовується для завдання типу значень PL/SQL масиву. Дивіться список
нижче:

- **`SQLT_NUM`** - для масивів з елементами типу NUMBER.

- **`SQLT_INT`** - для масивів з елементами типу INTEGER (Примітка:
INTEGER - синонім для типу NUMBER(38), проте тип **`SQLT_NUM`**
цьому випадку не буде працювати, навіть незважаючи на те, що вони
синонімічні).

- **`SQLT_FLT`** - для масивів з елементами типу FLOAT.

- **`SQLT_AFC`** - для масивів з елементами типу CHAR.

- **`SQLT_CHR`** - для масивів з елементами типу VARCHAR2.

- **`SQLT_VCS`** - для масивів з елементами типу VARCHAR.

- **`SQLT_AVC`** - для масивів з елементами типу CHARZ.

- **`SQLT_STR`** - для масивів з елементами типу STRING.

- **`SQLT_LVC`** - для масивів з елементами типу LONG VARCHAR.

- **`SQLT_ODT`** - для масивів з елементами типу DATE.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_bind_array_by_name()****

` <?php$conn u003d oci_connect("hr", "hrpwd", "localhost/XE");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$create u003d "CREATE TABLE bind_example(name VARCHAR(20))";$stid u003d oci_parse($conn, $create); ;$create_pkg u003d "CREATE OR REPLACE PACKAGE ARRAYBINDPKG1 AS  TYPE ARRTYPE IS TABLE OF VARCHAR(20) INDEX BY BINARY_INTEGER;  PROCEDURE iobind(c1 IN OUT ARRTYPE);END ARRAYBINDPKG1;";$stid u003d oci_parse($conn, $create_pkg); oci_execute($stid);$create_pkg_body u003d "CREATE OR REPLACE PACKAGE BODY ARRAYBINDPKG1 AS  CURSOR CUR IS SELECT name FROM bind_example;  PROCEDURE iobind(c1 IN OUT ARRTYPE) IS    BEGIN    -- Bulk Insert    FORALL i IN INDICES OF c1      INSERT INTO bind_example VALUES ( c1(i));    -- Fetch and reverse    IF NOT CUR%ISOPEN THEN      OPEN CUR;    END IF;    FOR i IN REVERSE 1..5 LOOP      FETCH CUR INTO c1(i);      IF CUR%NOTFOUND THEN        CLOSE CUR;        EXIT; END IF;    END LOOP; END iobind;END ARRAYBINDPKG1;";$stid u003d oci_parse($conn, $create_pkg_body);oci_execute($stid);$stid u003d oci_ arraybindpkg1.iobind(:c1); END; "); );oci_execute($stid);var_dump($array);?> `
