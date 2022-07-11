- [« yaz_itemorder](function.yaz-itemorder.md)
- [yaz_range »](function.yaz-range.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Готується до пошуку (Z39.50 є)

# yaz_present

(PHP 4 u003d 4.0.5, PECL yaz u003d 0.9.0)

yaz_present — Готується до пошуку (Z39.50 є)

### Опис

**yaz_present**(resource `$id`): bool

Функція готує для повернення запису після успішного пошуку.

Функція [yaz_range()](function.yaz-range.md) має бути викликана до
цією функцією, щоб вказати діапазон записів, які необхідно
Вилучити.

### Список параметрів

`id`
Ресурс з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
