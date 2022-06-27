- [«array_reverse](function.array-reverse.md)
- [array_shift »](function.array-shift.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Здійснює пошук даного значення в масиві та повертає ключ
першого знайденого елемента у разі успішного виконання

#array_search

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

array_search — Здійснює пошук даного значення в масиві та
повертає ключ першого знайденого елемента у разі успішного
виконання

### Опис

**array_search**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$needle`, array `$haystack`, bool `$strict` u003d **`false`**):
int\|string\|false

Шукає в `haystack` значення `needle`.

### Список параметрів

`needle`
Шукане значення.

> **Примітка**:
>
> Якщо `needle` є рядком, порівняння відбувається з урахуванням
> Регістру.

`haystack`
Масив.

`strict`
Якщо третій параметр `strict` встановлений у **`true`**, то функція
**array_search()** шукатиме *ідентичні* елементи в `haystack`. Це
означає, що також перевірятимуться [типи](language.types.md)
`needle` в `haystack`, а об'єкти повинні бути одним і тим самим екземпляром.

### Значення, що повертаються

Повертає ключ для `needle`, якщо він був знайдений у масиві, інакше
**`false`**.

Якщо `needle` присутній у `haystack` більше одного разу, буде
повернено перший знайдений ключ. Для того, щоб повернути ключі для
всіх знайдених значень, використовуйте функцію
[array_keys()](function.array-keys.md) з необов'язковим параметром
`search_value`.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Приклади

**Приклад #1 Приклад використання **array_search()****

` <?php$array u003d array(0 u003d> 'blue', 1 u003d> 'red', 2 u003d> 'green', 3 u003d> 'red');$key u003d array_search('green', $array) ; // $key u003d 2;$key u003d array_search('red', $array); // $key u003d 1;?> `

### Дивіться також

- [array_keys()](function.array-keys.md) - Повертає всі або
деяке підмножина ключів масиву
- [array_values()](function.array-values.md) - Вибирає всі значення
масиву
- [array_key_exists()](function.array-key-exists.md) - Перевіряє,
чи присутній у масиві зазначений ключ чи індекс
- [in_array()](function.in-array.md) - Перевіряє, чи є в
масиве значення
