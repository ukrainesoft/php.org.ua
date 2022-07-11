- [« Функції Scoutapm](ref.scoutapm.md)
- [scoutapm_list_instrumented_functions
»](function.scoutapm-list-instrumented-functions.md)

- [PHP Manual](index.md)
- [Функції Scoutapm](ref.scoutapm.md)
- Повертає список викликів, що відбулися

#scoutapm_get_calls

(PECL scoutapm \>u003d 1.0.0)

scoutapm_get_calls — Повертає список дзвінків, що відбулися

### Опис

**scoutapm_get_calls**(): array

Повертає список усіх дзвінків використаних функцій з моменту
останнього дзвінка **scoutapm_get_calls()**. Список очищується щоразу
під час виклику функції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**scoutapm_get_calls()** повертає масив, що містить список усіх
записаних викликів використаних функцій.

### Приклади

**Приклад #1 Отримання використаних функцій**

` <?phpfile_get_contents('a.txt');file_get_contents('b.txt');print_r(scoutapm_get_calls());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[function] u003d> file_get_contents
[entered] u003d> 1576839727.7934
[exited] u003d> 1576839727.7935
[time_taken] u003d> 2.7894973754883E-5
[argv] u003d> Array
(
[0] u003d> a.txt
)

)

[1] u003d> Array
(
[function] u003d> file_get_contents
[entered] u003d> 1576839727.7935
[exited] u003d> 1576839727.7935
[time_taken] u003d> 7.8678131103516E-6
[argv] u003d> Array
(
[0] u003d> b.txt
)

)

)
