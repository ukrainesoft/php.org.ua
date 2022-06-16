- [« yaz_database](function.yaz-database.md)
- [yaz_errno»] (function.yaz-errno.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Вказує ім'я набору елементів для пошуку

# yaz_element

(PHP 4 u003d 4.0.1, PECL yaz u003d 0.9.0)

yaz_element — Вказує ім'я набору елементів для пошуку

### Опис

**yaz_element**(resource `$id`, string `$elementset`): bool

Функція встановлює ім'я набору елементів пошуку.

Викличте цю функцію перед [yaz_search()](function.yaz-search.md) або
[yaz_present()](function.yaz-present.md), щоб вказати ім'я набору
елементів для записів.

> **Примітка**:
>
> Якщо здається, що не відбувається жодного ефекту, дивіться опис
> опції `piggybacking` у [yaz_connect()](function.yaz-connect.md).

### Список параметрів

`id`
Ресурс з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`elementset`
Більшість серверів підтримують `F` (для повних записів) та `B` (для повних записів)
коротких записів).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
