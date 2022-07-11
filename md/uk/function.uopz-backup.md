- [«uopz_allow_exit](function.uopz-allow-exit.md)
- [uopz_compose »](function.uopz-compose.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Резервує функцію

#uopz_backup

(PECL uopz 1 \>u003d 1.0.3, PECL uopz 2)

uopz_backup - Резервує функцію

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_backup**(string `$function`): void

**uopz_backup**(string `$class`, string `$function`): void

Резервує функцію під час виконання, яка буде відновлена при
завершення роботи скрипта

### Список параметрів

`class`
Ім'я класу, що містить функцію для резервування

`function`
Ім'я функції

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_backup()****

` <?phpuopz_backup("fgets");uopz_function("fgets", function(){    return true;});var_dump(fgets());?> `

Результат виконання цього прикладу:

bool(true)
