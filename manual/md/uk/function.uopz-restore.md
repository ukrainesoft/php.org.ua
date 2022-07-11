- [«uopz_rename](function.uopz-rename.md)
- [uopz_set_hook »](function.uopz-set-hook.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Відновити раніше зарезервовану функцію

#uopz_restore

(PECL uopz 1 \>u003d 1.0.3, PECL uopz 2)

uopz_restore — Відновити раніше зарезервовану функцію

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_restore**(string `$function`): void

**uopz_restore**(string `$class`, string `$function`): void

Відновити раніше зарезервовану функцію

### Список параметрів

`class`
Ім'я класу, що містить функцію відновлення

`function`
Ім'я функції

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_restore()****

` <?phpuopz_backup("fgets");uopz_function("fgets", function(){    return true;});var_dump(fgets());uopz_restore('fgets');fgets();?> `

Результатом виконання цього прикладу буде щось подібне:

Warning: fgets() expects at least 1 parameter, 0 given in /path/to/script.php on line 8
