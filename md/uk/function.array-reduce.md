- [«array_rand](function.array-rand.md)
- [array_replace_recursive »](function.array-replace-recursive.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Ітеративно зменшує масив до єдиного значення, використовуючи
callback-функцію

#array_reduce

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

array_reduce - Ітеративно зменшує масив до єдиного значення,
використовуючи callback-функцію

### Опис

**array_reduce**(array `$array`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**array_reduce()** ітеративно застосовує callback-функцію `callback` до
елементам масиву `array` і, таким чином, зводить масив до
єдиного значення.

### Список параметрів

`array`
Вхідний масив.

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$carry`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$item`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`carry`
Містить результуюче значення попередньої ітерації; у випадку ж
перша ітерація містить значення параметра `initial`.

`item`
Містить поточну ітерацію.

`initial`
Якщо переданий необов'язковий параметр initial, то він буде використаний
на початку процесу, або як остаточний результат у випадку
порожній масив.

### Значення, що повертаються

Повертає значення, що вийшло.

Якщо масив порожній і не передано параметр `initial`, **array_reduce()**
поверне **`null`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------|
| 8.0.0 | Якщо параметр callback очікує, що буде передано значення за посиланням, функція тепер видасть помилку рівня ** E_WARNING **. |

### Приклади

**Приклад #1 Приклад використання **array_reduce()****

`<?phpfunction sum($carry, $item){   $carry +u003d $item; return $carry;}function product($carry, $item){    $carry *u003d $item; return $carry;}$a u003d array(1, 2, 3, 4, 5);$x u003d array();var_dump(array_reduce($a, "sum")); // int(15)var_dump(array_reduce($a, "product", 10)); // int(1200), тому що: 10*1*2*3*4*5var_dump(array_reduce($x, "sum", "Нет даних")); // string(19) "Немає даних"?> `

### Дивіться також

- [array_filter()](function.array-filter.md) - Фільтрує елементи
масиву за допомогою callback-функції
- [array_map()](function.array-map.md) - Застосовує callback-функцію
до всіх елементів зазначених масивів
- [array_unique()](function.array-unique.md) - Забирає повторювані
значення з масиву
- [array_count_values()](function.array-count-values.md) -
Підраховує кількість усіх значень масиву
