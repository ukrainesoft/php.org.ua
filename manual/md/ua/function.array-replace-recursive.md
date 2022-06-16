- [«array_reduce](function.array-reduce.md)
- [array_replace »](function.array-replace.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- рекурсивно замінює елементи першого масиву елементами переданих
масивів

#array_replace_recursive

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

array_replace_recursive — Рекурсивно замінює елементи першого масиву
елементами переданих масивів

### Опис

**array_replace_recursive**(array `$array`, array `...$replacements`):
array

**array_replace_recursive()** замінює значення масиву `array` на
відповідні за ключами значення всіх наступних масивів. Якщо ключ
з першого масиву є у другому, його значення буде замінено на
значення другого масиву. Якщо ключ є у другому масиві, але
відсутня у першому, він буде створений у першому масиві. Якщо ключ є
лише у першому масиві, він залишається як є. Якщо передано
кілька масивів, вони будуть оброблені по порядку, наступні
перезаписують попередні значення.

**array_replace_recursive()** - рекурсивна функція: вона буде
рекурсивно заглиблюватися в масиви та застосовувати до всіх внутрішніх значень
той самий процес.

Якщо значення, передане перший масив є скалярним, воно буде
замінено значенням у другому масиві, яке може бути скалярним
значенням чи масивом. Якщо обидва значення передані в перший масив і
у другий масив - масиви, **array_replace_recursive()** замінюватиме
їх значення рекурсивні.

### Список параметрів

`array`
Масив, елементи якого буде замінено.

`replacements`
Масиви, з яких братимуться елементи для заміни.

### Значення, що повертаються

Повертає масив (array) або **`null`**, якщо сталася помилка.

### Приклади

**Приклад #1 Приклад використання **array_replace_recursive()****

` <?php$base u003d array('citrus' u003d> array( "orange") , 'berries' u003d> array("blackberry", "raspberry"), );$replacements u003d array('citrus' u003d>> ('pineapple'), 'berries' u003d> array('blueberry'));$basket u003d array_replace_recursive($base, $replacements);print_r($basket);$basket u003d array_replace($base, $replace ($ basket);?> `

Результат виконання цього прикладу:

Array
(
[citrus] u003d> Array
(
[0] u003d> pineapple
)

[berries] u003d> Array
(
[0] u003d> blueberry
[1] u003d> raspberry
)

)
Array
(
[citrus] u003d> Array
(
[0] u003d> pineapple
)

[berries] u003d> Array
(
[0] u003d> blueberry
)

)

**Приклад #2 **array_replace_recursive()** та рекурсивна поведінка**

` <?php$base u003d array('citrus' u003d> array("orange") , 'berries' u003d> array("blackberry", "raspberry"), 'others' u003d> 'banana' );$replacements array('citrus' u003d> 'pineapple', 'berries' u003d> array('blueberry'), 'others' u003d> array('litchis'));$replacements2 u003d array('citrus' u003d> array('e '), 'berries' u003d> array('blueberry'), 'others' u003d> 'litchis');$basket u003d array_replace_recursive($base, $replacements, $replacements2);print_r($basket);?>

Результат виконання цього прикладу:

Array
(
[citrus] u003d> Array
(
[0] u003d> pineapple
)

[berries] u003d> Array
(
[0] u003d> blueberry
[1] u003d> raspberry
)

[others] u003d> litchis
)

### Дивіться також

- [array_replace()](function.array-replace.md) - Замінює елементи
масиву елементами інших переданих масивів
- [array_merge_recursive()](function.array-merge-recursive.md) -
Рекурсивне злиття одного або більше масивів
