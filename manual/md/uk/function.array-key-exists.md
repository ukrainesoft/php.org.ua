- [«array_is_list](function.array-is-list.md)
- [array_key_first »](function.array-key-first.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Перевіряє, чи присутній у масиві зазначений ключ чи індекс

#array_key_exists

(PHP 4 \>u003d 4.0.7, PHP 5, PHP 7, PHP 8)

array_key_exists — Перевіряє, чи присутній у масиві зазначений ключ
або індекс

### Опис

**array_key_exists**(string\|int `$key`, array `$array`): bool

Функція **array_key_exists()** повертає **`true`**, якщо в масиві
є вказаний ключ `key`. Параметр `key` може бути будь-яким
значенням, що підходить для індексу масиву.

### Список параметрів

`key`
Перевірене значення.

`array`
Масив з ключами, що перевіряються.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

> **Примітка**:
>
> **array_key_exists()** шукає ключі лише на першому рівні масиву.
> Внутрішні ключі в багатовимірних масивах не знайдено.

### Приклади

**Приклад #1 Приклад використання **array_key_exists()****

` <?php$search_array u003d array('first' u003d> 1, 'second' u003d> 4);if (array_key_exists('first', $search_array)) {    echo "Масив '" > `

**Приклад #2 **array_key_exists()** та [isset()](function.isset.md)**

[isset()](function.isset.md) не повертає **`true`** для ключів
масиву, що вказують на **`null`**, а array_key_exists()** повертає.

` <?php$search_array u003d array('first' u003d> null, 'second' u003d> 4);// повертає falseisset($search_array['first']);// повертає truearray_key_exists('$ ;?> `

### Примітки

> **Примітка**:
>
> З причин зворотної сумісності **array_key_exists()** повертає
> **`true`**, якщо `key` є властивістю об'єкта (object), переданим
> як параметр `array`. Поведінка застаріла в PHP 7.4.0 та видалено
> PHP 8.0.0.
>
> Щоб перевірити, чи містить об'єкт будь-яку властивість, використовуйте
> функцію [property_exists()](function.property-exists.md).

### Дивіться також

- [isset()](function.isset.md) - Визначає, чи було встановлено
змінна значенням, відмінним від null
- [array_keys()](function.array-keys.md) - Повертає всі або
деяке підмножина ключів масиву
- [in_array()](function.in-array.md) - Перевіряє, чи є в
масиве значення
- [property_exists()](function.property-exists.md) - Перевіряє,
чи містить об'єкт або клас вказаний атрибут
