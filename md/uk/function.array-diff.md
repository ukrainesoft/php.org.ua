- [«array_diff_ukey](function.array-diff-ukey.md)
- [array_fill_keys »](function.array-fill-keys.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Обчислити розбіжність масивів

#array_diff

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

array_diff - Обчислити розбіжність масивів

### Опис

**array_diff**(array `$array`, array `...$arrays`): array

Порівнює `array` з одним або декількома іншими масивами та
повертає значення з `array`, які відсутні у всіх інших
масивах.

### Список параметрів

`array`
Вихідний масив

`arrays`
Масиви, з якими йде порівняння

### Значення, що повертаються

Повертає масив (array), що містить елементи `array`, відсутні в
кожному з решти масивів. Ключі в масиві `array` зберігаються.

### Приклади

**Приклад #1 Приклад використання **array_diff()****

` <?php$array1 u003d array("a" u003d> "green", "red", "blue", "red");$array2 u003d array("b" u003d> "green", "yellow", " red");$result u003d array_diff($array1, $array2);print_r($result);?> `

Множинні збіги в $ array1 обробляються як одне. Результат
буде наступним:

Array
(
[1] u003d> blue
)

**Приклад #2 Приклад використання **array_diff()** з несхожими
типами**

Два елементи вважаються рівними тоді і лише тоді, коли
`(string) $elem1 u003du003du003d (string) $elem2`. Тобто, коли [рядкове
представлення](language.types.string.md#language.types.string.casting)
однаково.

` <?php// Це згенерує повідомлення про том, що масив не може перетворити в рядок.$source u003d [1, 2, 3, 4];$filter u003d [3, result u003d array_diff($source, $filter);// В то же час це нормально, оскільки об'єкти можуть бути перетворені в рядок.class S { private public function __construct(string$$) {   $this->v u003d $v; }  public function __toString() {    return $this->v; }}$source u003d [new S('a'), new S('b'), new S('c')];$filter u003d [new S('b'), new S('c') , new S('d')];$result u003d array_diff($source, $filter);// $result тепер містить один примірник S('a');?> `

Щоб використати альтернативну функцію порівняння, дивіться
[array_udiff()](function.array-udiff.md).

### Примітки

> **Примітка**:
>
> Зверніть увагу, що ця функція обробляє лише один вимір
> n-розмірного масиву. Звичайно, ви можете обробляти і більше
> глибокі рівні вкладеності, наприклад, використовуючи
> `array_diff($array1[0], $array2[0]);`.

### Дивіться також

- [array_diff_assoc()](function.array-diff-assoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу
- [array_udiff()](function.array-udiff.md) - Розраховує розбіжність
масивів, використовуючи для порівняння callback-функцію
- [array_intersect()](function.array-intersect.md) - Обчислює
сходження масивів
- [array_intersect_assoc()](function.array-intersect-assoc.md) -
Обчислює сходження масивів із додатковою перевіркою індексу
