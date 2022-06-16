- [«uopz_implement](function.uopz-implement.md)
- [uopz_redefine »](function.uopz-redefine.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Перевантажити опкод VM

#uopz_overload

(PECL uopz 1, PECL uopz 2)

uopz_overload — Перевантажити опкод VM

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_overload**(int `$opcode`,
[Callable](language.types.callable.md) `$callable`): void

Перевантажує певний `opcode` за допомогою функції користувача

### Список параметрів

`opcode`
Коректний опкод, дивіться константи для отримання підтримуваних
опкодів

`callable`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_overload()****

` <?phpuopz_overload(ZEND_EXIT, function(){});exit();echo "Привіт, Світ";?> `

Результат виконання цього прикладу:

Привіт світ
