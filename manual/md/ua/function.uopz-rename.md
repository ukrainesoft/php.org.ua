- [«uopz_redefine](function.uopz-redefine.md)
- [uopz_restore »](function.uopz-restore.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Перейменувати функцію під час виконання

#uopz_rename

(PECL uopz 1, PECL uopz 2)

uopz_rename — Перейменувати функцію під час виконання

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_rename**(string `$function`, string `$rename`): void

**uopz_rename**(string `$class`, string `$function`, string `$rename`):
void

Перейменовує функцію `function` на `rename`

> **Примітка**:
>
> Якщо обидві функції існують, ця функція по суті змінює імена

### Список параметрів

`class`
Ім'я класу, що містить функцію

`function`
Ім'я існуючої функції

`rename`
Нове ім'я функції

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_rename()****

` <?phpuopz_rename("strlen", "original_strlen");echo original_strlen("Hello World");?> `

Результатом виконання цього прикладу буде щось подібне:

11

**Приклад #2 Приклад використання **uopz_rename()** з класом**

`<?phpclass My {   publicfunction strlen($arg) {        return strlen($arg); }}uopz_rename(My::class, "strlen", "original_strlen");echo My::original_strlen("Hello World");?> `

Результат виконання цього прикладу:

11
