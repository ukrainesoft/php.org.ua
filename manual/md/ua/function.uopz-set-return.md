- [«uopz_set_property](function.uopz-set-property.md)
- [uopz_set_static »](function.uopz-set-static.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Надати значення, що повертається для існуючої функції

#uopz_set_return

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_set_return — Надати значення, що повертається для існуючої
функції

### Опис

**uopz_set_return**(string `$function`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, bool `$execute` u003d **`false`**): bool

**uopz_set_return**(
string `$class`,
string `$function`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
bool `$execute` u003d **`false`**
): bool

Встановити значення, що повертається для `function` на `value`. Якщо `value`
замикання та встановлений `execute`, замикання буде виконуватися замість
вихідної функції. Ви можете викликати вихідну функцію із замикання.

> **Примітка**:
>
> Ця функція замінює [uopz_rename()](function.uopz-rename.md).

### Список параметрів

`class`
Ім'я класу, що містить функцію

`function`
Ім'я існуючої функції

`value`
Значення, що повертається функцією. Якщо передано замикання та параметр
execute встановлено, замикання буде виконано замість вихідної функції.

`execute`
Якщо true, і у параметрі value передано замикання, замикання буде
виконано замість вихідної функції.

### Значення, що повертаються

True у разі успішного виконання, false у противному випадку.

### Приклади

**Приклад #1 Приклад використання **uopz_set_return()****

` <?phpuopz_set_return("strlen", 42);echo strlen("Banana");?> `

Результат виконання цього прикладу:

42

**Приклад #2 Приклад використання **uopz_set_return()****

` <?phpuopz_set_return("strlen", function($str) { return strlen($str) * 2; }, true );echo strlen("Banana");?> `

Результат виконання цього прикладу:

12

**Приклад #3 Приклад використання **uopz_set_return()** з класом**

`<?phpclass My {    public static function strlen($arg) {        return strlen($arg); }}uopz_set_return(My::class, "strlen", function($str) { return strlen($str) * 2; }, true );echo My::strlen("Banana");?> `

Результат виконання цього прикладу:

12
