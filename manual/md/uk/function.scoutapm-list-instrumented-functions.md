- [« scoutapm_get_calls](function.scoutapm-get-calls.md)
- [SNMP »](book.snmp.md)

- [PHP Manual](index.md)
- [Функції Scoutapm](ref.scoutapm.md)
- Список функцій, які scoutapm буде використовувати

# scoutapm_list_instrumented_functions

(PECL scoutapm \>u003d 1.0.2)

scoutapm_list_instrumented_functions — Список функцій, які scoutapm
буде використовувати

### Опис

**scoutapm_list_instrumented_functions**(): array

Повертає список функцій, які модуль використовуватиме

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**scoutapm_list_instrumented_functions()** повертає масив, що містить
Список всіх функцій, які модуль scoutapm може використовувати в
поточної установки.

### Приклади

**Приклад #1 Отримання списку функцій, які scoutapm може
використовувати**

` <?phpprint_r(scoutapm_list_instrumented_functions());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> file_get_contents
[1] u003d> file_put_contents
[2] u003d> fopen
[3] u003d> fread
[4] u003d> fwrite
[5] u003d> pdo->exec
[6] u003d> pdo->query
[7] u003d> pdo->prepare
[8] u003d> pdostatement->execute
)
