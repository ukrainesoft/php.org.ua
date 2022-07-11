- [« oci_define_by_name](function.oci-define-by-name.md)
- [oci_execute »](function.oci-execute.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає останню помилку

#oci_error

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_error — Повертає останню помилку

### Опис

**oci_error**(?resource `$connection_or_statement` u003d **`null`**):
array\|false

Повертає останню знайдену помилку.

Функція повинна викликатися відразу після появи помилки. Помилки
очищаються під час виконання правильного запиту.

### Список параметрів

`connection_or_statement`
Для більшості помилок параметром `connection_or_statement` є
відповідний ідентифікатор з'єднання або виразу. Для помилок у
час виконання функцій [oci_connect()](function.oci-connect.md),
[oci_new_connect()](function.oci-new-connect.md) або
[oci_pconnect()](function.oci-pconnect.md) слід передавати
**`null`**.

### Значення, що повертаються

Якщо помилок не знайдено, **oci_error()** повертає **`false`**. В
в іншому випадку, **oci_error()** повертає інформацію про помилку у вигляді
асоціативного масиву.

| Ключ масиву Тип | Опис |
|--------------|--------|------------------------- -------------------------------------|
| `code` | int | Номер помилки Oracle. |
| `message` | string | Текст помилки Oracle. |
| `offset` | int | Позиція помилки у запиті SQL. Якщо немає запиту, то дорівнює `0` |
| `sqltext` | string | Текст запиту SQL. Якщо немає запиту, рядок порожній. |

**Опис масиву виведення **oci_error()****

### Список змін

| Версія | Опис |
|------------------------|------------------------ -----------------------------------|
| 8.0.0, PECL OCI8 3.0.0 | `connection_or_statement` тепер припускає значення null. |

### Приклади

**Приклад #1 Виведення повідомлення про помилку Oracle після помилки з'єднання**

` <?php$conn u003d oci_connect("hr", "welcome", "localhost/XE");if (!$conn) {    $e u003d oci_error(); // Для обробки помилок oci_connect    trigger_error(htmlentities($e['message']), E_USER_ERROR);}?> `

**Приклад #2 Виведення повідомлення про помилку Oracle після помилки розбору**

`<?php$stidu003du003doci_parse($conn, "select ' from dual"); // пропущені лапкиif (!$stid) {   $e u003d oci_error($conn); // Для обробки помилок oci_parse    trigger_error(htmlentities($e['message']), E_USER_ERROR);}?> `

**Приклад #3 Виведення повідомлення про помилку Oracle, помилкового запиту та
позиції помилки запуску запиту**

` <?php$stid u003d oci_parse($conn, "select does_not_exist from dual");$r u003d oci_execute($stid);if (!$r) {    $e u003d oci_error($stid) // Для обробки помилок oci_execute    print htmlentities($e['message']); print "
<pre>
";   print htmlentities($e['sqltext']);    printf("
%".($e['offset']+1)."s", "^");    print  "
</pre>
";}?> `
