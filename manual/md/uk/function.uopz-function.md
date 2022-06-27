- [«uopz_flags](function.uopz-flags.md)
- [uopz_get_exit_status »](function.uopz-get-exit-status.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Створює функцію під час виконання

#uopz_function

(PECL uopz 1, PECL uopz 2)

uopz_function — Створює функцію під час виконання

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_function**(string `$function`, [Closure](class.closure.md)
`$handler`, int `$modifiers` u003d ?): void

**uopz_function**(
string `$class`,
string `$function`,
[Closure](class.closure.md) `$handler`,
int `$modifiers` u003d ?
): void

Створює функцію під час виконання

### Список параметрів

`class`
Ім'я класу для отримання нової функції

`function`
Ім'я функції

`handler`
Замикання для функції

`modifiers`
Модифікатори для функції, скопійовані за замовчуванням або ZEND_ACC_PUBLIC

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_function()****

` <?phpuopz_function("my_strlen", function($arg) {   return strlen($arg);});echo my_strlen("Привіт, Світ");?> `

Результат виконання цього прикладу:

11

**Приклад #2 Приклад використання **uopz_function()** з класом**

` <?phpclass My {}uopz_function(My::class, "strlen", function($arg) {   return strlen($arg);}, ZEND_ACC_STATIC);echo My::strlen("Привіт, > `

Результат виконання цього прикладу:

11
