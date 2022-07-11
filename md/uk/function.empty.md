- [«doubleval](function.doubleval.md)
- [floatval »] (function.floatval.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи порожня змінна

# empty

(PHP 4, PHP 5, PHP 7, PHP 8)

empty — Перевіряє, чи порожня змінна

### Опис

**empty**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`): bool

Перевіряє, чи вважається змінна пустою. Змінна вважається порожньою,
якщо вона не існує або її значення дорівнює **`false`**. **empty()** не
генерує попередження, якщо не існує.

### Список параметрів

`var`
Перевірена змінна

Якщо змінна немає, попередження не генерується. Це
означає, що **empty()** фактично є точним еквівалентом
конструкції **!isset($var) \|\| $var u003du003d false**

### Значення, що повертаються

Повертає **`true`**, якщо параметр `var` не існує, якщо значення
і нулю, або не задано, дивіться [Перетворення на булев
тип](language.types.boolean.md#language.types.boolean.casting). В
в іншому випадку повертає **`false`**.

### Приклади

**Приклад #1 Просте порівняння **empty()** та
[isset()](function.isset.md).**

` <?php$var u003d 0;// Приймає значення true, тому що $var пустоif (empty($var)) {    echo '$var або 0, або пусто, або є , потому що $var визначенаif (isset($var)) {    echo '$var визначена, навіть якщо вона порожня';}?> `

**Приклад #2 **empty()** та рядкові індекси**

` <?php$expected_array_got_string u003d 'somestring';var_dump(empty($expected_array_got_string['some_key']));var_dump(empty($expected_array_got_string[0])));var_dump(empty($expected_array) ;var_dump(empty($expected_array_got_string[0.5])));var_dump(empty($expected_array_got_string['0.5']));var_dump(empty($expected_array_got_string['0 Mostel'])));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)
bool(false)
bool(true)
bool(true)

### Примітки

> **Примітка**: Оскільки це мовна конструкція, а не функція, вона
> не може викликатися за допомогою [змінних
> функцій](functions.variable-functions.md) або [іменованих
> аргументів](functions.arguments.md#functions.named-arguments).

> **Примітка**:
>
> При використанні функції **empty()** на недоступних (неоголошених)
> властивості об'єкта буде викликаний вбудований метод об'єкта
> [\_\_isset()](language.oop5.overloading.md#object.isset), якщо він
> Визначено.

### Дивіться також

- [isset()](function.isset.md) - Визначає, чи було встановлено
змінна значенням, відмінним від null
- [\_\_isset()](language.oop5.overloading.md#object.isset)
- [unset()](function.unset.md) - Видаляє змінну
- [array_key_exists()](function.array-key-exists.md) - Перевіряє,
чи присутній у масиві зазначений ключ чи індекс
- [count()](function.count.md) - Підраховує кількість елементів
масиву або Countable об'єкті
- [strlen()](function.strlen.md) - Повертає довжину рядка
- [Таблиця порівняння типів](types.comparisons.md)
