- [« ReflectionObject::\_\_construct](reflectionobject.construct.md)
- [ReflectionParameter »](class.reflectionparameter.md)

- [PHP Manual](index.md)
- [ReflectionObject](class.reflectionobject.md)
- Експорт

# ReflectionObject::export

(PHP 5, PHP 7)

ReflectionObject::export — Експорт

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static **ReflectionObject::export**(string `$argument`, bool
`$return` u003d ?): string

Експортує відображення (reflection).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

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

### Дивіться також

- [ReflectionObject::\_\_construct()](reflectionobject.construct.md) -
Конструктор класу ReflectionObject
