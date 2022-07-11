- [«uopz_del_function](function.uopz-del-function.md)
- [uopz_extend »] (function.uopz-extend.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Видалити функцію

#uopz_delete

(PECL uopz 1, PECL uopz 2)

uopz_delete — Видалити функцію

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_delete**(string `$function`): void

**uopz_delete**(string `$class`, string `$function`): void

Видаляє функцію або метод

### Список параметрів

`class`

`function`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_delete()****

` <?phpuopz_delete("strlen");echo strlen("Hello World");?> `

Результатом виконання цього прикладу буде щось подібне:

PHP Fatal error: Call до undefined function strlen() in /path/to/script.php on line 4

**Приклад #2 Приклад використання **uopz_delete()** з класом**

`<?phpclass My {    public static function strlen($arg) {        return strlen($arg); }}uopz_delete(My::class, "strlen");echo My::strlen("Hello World");?> `

Результатом виконання цього прикладу буде щось подібне:

PHP Fatal error: Call до undefined method My::strlen() in /path/to/script.php on line 10
