- [«Reflection](class.reflection.md)
- [Reflection::getModifierNames »](reflection.getmodifiernames.md)

- [PHP Manual](index.md)
- [Reflection](class.reflection.md)
- Експортує Reflection

# Reflection::export

(PHP 5, PHP 7)

Reflection::export — Експортує Reflection

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

public static **Reflection::export**([Reflector](class.reflector.md)
`$reflector`, bool `$return` u003d **`false`**): string

Експортує reflection.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`reflector`
Експортований об'єкт Reflection.

`return`
Установка в **`true`** поверне значення, що експортується, на відміну від
поведінки, де цей параметр опущено. Установка в **`false`** (за
замовчуванням) зробить протилежне.

### Значення, що повертаються

Якщо параметр `return` встановлений у **`true`**, тоді експортований
об'єкт буде повернутий як string, інакше буде повернено **`null`**.

### Дивіться також

- [Reflection::getModifierNames()](reflection.getmodifiernames.md) -
Отримання імен модифікаторів
