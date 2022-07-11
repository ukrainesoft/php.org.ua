- [«
ReflectionParameter::\_\_construct](reflectionparameter.construct.md)
- [ReflectionParameter::getAttributes
»](reflectionparameter.getattributes.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Експорт

# ReflectionParameter::export

(PHP 5, PHP 7)

ReflectionParameter::export — Експорт

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static **ReflectionParameter::export**(string `$function`, string
`$parameter`, bool `$return` u003d ?): string

Експорт.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`function`
Назва функції.

`parameter`
Ім'я аргументу.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

Експорт відбиття (reflection).

### Дивіться також

- [ReflectionParameter::\_\_toString()](reflectionparameter.tostring.md) -
Перетворення на рядок
