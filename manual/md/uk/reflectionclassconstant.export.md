- [«
ReflectionClassConstant::\_\_construct](reflectionclassconstant.construct.md)
- [ReflectionClassConstant::getAttributes
»](reflectionclassconstant.getattributes.md)

- [PHP Manual](index.md)
- [ReflectionClassConstant](class.reflectionclassconstant.md)
- Експорт

# ReflectionClassConstant::export

(PHP 7 \>u003d 7.1.0)

ReflectionClassConstant::export — Експорт

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static
**ReflectionClassConstant::export**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$class`, string `$name`, bool `$return` u003d ?): string

Експортує reflection.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`class`
Експортований об'єкт Reflection.

`name`
Назва константи класу.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

### Дивіться також

- [ReflectionClassConstant::\_\_toString()](reflectionclassconstant.tostring.md) -
Повертає строкове представлення об'єкту ReflectionClassConstant
