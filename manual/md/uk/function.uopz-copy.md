- [«uopz_compose](function.uopz-compose.md)
- [uopz_del_function »](function.uopz-del-function.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Скопіювати функцію

#uopz_copy

(PECL uopz 1 \>u003d 1.0.4, PECL uopz 2)

uopz_copy — Скопіювати функцію

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_copy**(string `$function`): [Closure](class.closure.md)

**uopz_copy**(string `$class`, string `$function`):
[Closure](class.closure.md)

Копіювати функцію на ім'я

### Список параметрів

`class`
Ім'я класу, що містить функцію копіювання

`function`
Ім'я функції

### Значення, що повертаються

Об'єкт Closure для певної функції

### Приклади

**Приклад #1 Приклад використання **uopz_copy()****

` <?php$strtotime u003d uopz_copy('strtotime');uopz_function("strtotime", function($arg1, $arg2) use($strtotime) {     /* зесь можна  викликати         ¦ });var_dump(strtotime('dummy'));?> `

Результат виконання цього прикладу:

string(5) "dummy"
