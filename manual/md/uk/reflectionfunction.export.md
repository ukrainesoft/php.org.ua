- [«
ReflectionFunction::\_\_construct](reflectionfunction.construct.md)
- [ReflectionFunction::getClosure
»](reflectionfunction.getclosure.md)

- [PHP Manual](index.md)
- [ReflectionFunction](class.reflectionfunction.md)
- Експортує функції

# ReflectionFunction::export

(PHP 5, PHP 7)

ReflectionFunction::export — Експортує функції

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static **ReflectionFunction::export**(string `$name`, string
`$return` u003d ?): string

Експортує відображену (reflected) функцію.

### Список параметрів

`name`
Експортований об'єкт Reflection.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

Якщо параметр `return` встановлений у **`true`**, тоді експортований
об'єкт буде повернутий як string, інакше буде повернено **`null`**.

### Дивіться також

- [ReflectionFunction::invoke()](reflectionfunction.invoke.md) -
Викликає функцію
- [ReflectionFunction::\_\_toString()](reflectionfunction.tostring.md) -
Подання у вигляді рядка
