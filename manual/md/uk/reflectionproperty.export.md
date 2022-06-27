- [«
ReflectionProperty::\_\_construct](reflectionproperty.construct.md)
- [ReflectionProperty::getAttributes
»](reflectionproperty.getattributes.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Експорт

# ReflectionProperty::export

(PHP 5, PHP 7)

ReflectionProperty::export — Експорт

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static
**ReflectionProperty::export**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$class`, string `$name`, bool `$return` u003d ?): string

Експортує відображення (reflection).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`argument`
Експортований об'єкт Reflection.

`name`
Ім'я якості.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

### Дивіться також

- [ReflectionProperty::\_\_toString()](reflectionproperty.tostring.md) -
Перетворення на рядок
