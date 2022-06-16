- [« ReflectionMethod::\_\_construct](reflectionmethod.construct.md)
- [ReflectionMethod::getClosure »](reflectionmethod.getclosure.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Експорт відбитого методу

# ReflectionMethod::export

(PHP 5, PHP 7)

ReflectionMethod::export — Експорт відбитого методу

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static **ReflectionMethod::export**(string `$class`, string
`$name`, bool `$return` u003d **`false`**): string

Експортує ReflectionMethod.

### Список параметрів

`class`
Назва класу.

`name`
Назва методу.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

Якщо параметр `return` встановлений у **`true`**, тоді експортований
об'єкт буде повернутий як string, інакше буде повернено **`null`**.

### Дивіться також

- [ReflectionMethod::\_\_construct()](reflectionmethod.construct.md) -
Конструктор класу ReflectionMethod
- [ReflectionMethod::\_\_toString()](reflectionmethod.tostring.md) -
Повертає строкове представлення об'єкту ReflectionMethod
