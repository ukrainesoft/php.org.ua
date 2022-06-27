- [« ReflectionClass::\_\_construct](reflectionclass.construct.md)
- [ReflectionClass::getAttributes
»](reflectionclass.getattributes.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Експортує клас

# ReflectionClass::export

(PHP 5, PHP 7)

ReflectionClass::export — Експортує клас

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static
**ReflectionClass::export**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$argument`, bool `$return` u003d **`false`**): string

Експортує reflected (відбитий) клас.

### Список параметрів

`argument`
Експортований об'єкт Reflection.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

Якщо параметр `return` встановлений у **`true`**, тоді експортований
об'єкт буде повернутий як string, інакше буде повернено **`null`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::export()****

`<?phpclass Apple {    public $var1; public $var2 u003d 'Orange'; public function type() {        return 'Apple'; }}ReflectionClass::export('Apple');?> `

Результатом виконання цього прикладу буде щось подібне:

Class [ <user> class Apple ] {
@@ php shell code 1-8

- Constants [0] {
}

- Static properties [0] {
}

- Static methods [0] {
}

- Properties [2] {
Property [ <default> public $var1 ]
Property [ <default> public $var2 ]
}

- Methods [1] {
Method [ <user> public method type ] {
@@ php shell code 5 - 7
}
}
}

### Дивіться також

- [ReflectionClass::getName()](reflectionclass.getname.md) -
Повертає ім'я класу
- [ReflectionClass::\_\_toString()](reflectionclass.tostring.md) -
Повертає рядкову виставу об'єкта класу ReflectionClass
