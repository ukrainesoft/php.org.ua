- [«extract](function.extract.md)
- [key_exists »](function.key-exists.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Перевіряє, чи є у масиві значення

# in_array

(PHP 4, PHP 5, PHP 7, PHP 8)

in_array — Перевіряє, чи є у масиві значення

### Опис

**in_array**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$needle`, array `$haystack`, bool `$strict` u003d **`false`**): bool

Шукає в `haystack` значення `needle`. Якщо `strict` не встановлений, то при
пошуку буде використано не суворе порівняння.

### Список параметрів

`needle`
Шукане значення.

> **Примітка**:
>
> Якщо `needle` - рядок, порівняння буде проведено з урахуванням регістру.

`haystack`
Масив.

`strict`
Якщо третій параметр `strict` встановлений у **`true`**, тоді функція
**in_array()** також перевірить відповідність [типів](language.types.md)
параметра `needle` та відповідного значення масиву `haystack`.

### Значення, що повертаються

Повертає **`true`**, якщо `needle` був знайдений у масиві, та **`false`**
в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **in_array()****

` <?php$os u003d array("Mac", "NT", "Irix", "Linux");if (in_array("Irix", $os)) {   echo "Знайшов Irix";}if (in_array( "mac", $os)) {   echo "Знайшов mac";}?> `

Другого збігу не буде, тому що **in_array()** реєстрозалежна,
таким чином, програма виведе:

Знайшов Irix

**Приклад #2 Приклад використання **in_array()** з параметром strict**

` <?php$a u003d array('1.10', 12.4, 1.13);if (in_array('12.4', $a, true)) {    echo "'12.4' знайдено|
";}if (in_array(1.13, $a, true)) {    echo "1.13 найдено зі строгою перевіркою
";}?> `

Результат виконання цього прикладу:

1.13 знайдено із суворою перевіркою

**Приклад #3 Приклад використання **in_array()** з масивом як
параметра needle**

` <?php$a u003d array(array('p', 'h'), array('p', 'r'), 'o');if (in_array(array('p', 'h')) , $a)) {   echo "'ph' найдено
";}if(in_array(array('f', 'i'), $a)) {    echo "'fi' найдено
";}if (in_array('o', $a)) {   echo "'o' найдено
";}?> `

Результат виконання цього прикладу:

'ph' знайдено
'o' знайдено

### Дивіться також

- [array_search()](function.array-search.md) - Пошук
даного значення в масиві та повертає ключ першого знайденого
елемента у разі успішного виконання
- [isset()](function.isset.md) - Визначає, чи було встановлено
змінна значенням, відмінним від null
- [array_key_exists()](function.array-key-exists.md) - Перевіряє,
чи присутній у масиві зазначений ключ чи індекс
