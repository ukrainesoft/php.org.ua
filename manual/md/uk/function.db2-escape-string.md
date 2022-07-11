- [«db2_cursor_type](function.db2-cursor-type.md)
- [db2_exec »](function.db2-exec.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Використовується для екранування деяких символів

#db2_escape_string

(PECL ibm_db2 \>u003d 1.6.0)

db2_escape_string — Використовується для екранування деяких символів

### Опис

**db2_escape_string**(string `$string_literal`): string

Додає зворотні сліші перед спеціальними символами в переданій
рядку.

### Список параметрів

`string_literal`
Рядок, що містить символи, які потрібно екранувати. Символи, які
треба екранувати: `\x00`, `
`,``, `\`, ```, ```` і `\x1a`.

### Значення, що повертаються

Повертає `string_literal` із екранованими спеціальними символами.

### Приклади

**Приклад #1 Приклад використання **db2_escape_string()****

Результат виконання функції **db2_escape_string()**

` <?php$conn u003d db2_connect($database, $user, $password);if ($conn) {    $str[0] u003d "All characters: \x00 ,
,, \ , ' , \" , \x1a ."; $str[1] u003d "Backslash (\). Single quote ('). Double quote (\")";    $str[2] u003d "The NULL character   must be quoted   Intersting characters: \x1a , \x00 .";    $str[4] u003d "Nothing to quote";    $str[5] u003d 200676;    $str[6] u003d "";    foreach( $str as $string ) {        echo "db2_escape_string: " . db2_escape_string($string). "
";    }}?> `

Результат виконання цього прикладу:

db2_escape_string: All characters: ,
 , , \ , \' , \" , \Z .
db2_escape_string: Backslash (\). Single quote (\'). Double quote (\")
db2_escape_string: NULL character must be quoted as well
db2_escape_string: Intersting characters: \Z , .
db2_escape_string: Nothing to quote
db2_escape_string: 200676
db2_escape_string:

### Дивіться також

- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
