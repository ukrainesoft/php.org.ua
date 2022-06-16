- [«
ReflectionExtension::\_\_construct](reflectionextension.construct.md)
- [ReflectionExtension::getClasses
»](reflectionextension.getclasses.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Експортує модуль

# ReflectionExtension::export

(PHP 5, PHP 7)

ReflectionExtension::export — Експортує модуль

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static **ReflectionExtension::export**(string `$name`, string
`$return` u003d **`false`**): string

Експортує відбитий модуль. Формат виведення цієї функції такий самий як
і при CLI-параметрі `--re [extension]`.

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

- [ReflectionExtension::info()](reflectionextension.info.md) - Висновок
інформації про модуль
- [ReflectionExtension::\_\_toString()](reflectionextension.tostring.md) -
Перетворення на рядок
