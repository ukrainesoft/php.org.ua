- [«
RecursiveIteratorIterator::callHasChildren](recursiveiteratoriterator.callhaschildren.md)
- [RecursiveIteratorIterator::current
»](recursiveiteratoriterator.current.md)

- [PHP Manual](index.md)
- [RecursiveIteratorIterator](class.recursiveiteratoriterator.md)
- Конструктор класу RecursiveIteratorIterator

# RecursiveIteratorIterator::\_\_construct

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

RecursiveIteratorIterator::\_\_construct — Конструктор класу
RecursiveIteratorIterator

### Опис

public
**RecursiveIteratorIterator::\_\_construct**([Traversable](class.traversable.md)
`$iterator`, int `$mode` u003d RecursiveIteratorIterator::LEAVES_ONLY, int
`$flags` u003d 0)

Створює новий об'єкт класу
[RecursiveIteratorIterator](class.recursiveiteratoriterator.md) на
на основі об'єкта [RecursiveIterator](class.recursiveiterator.md).

### Список параметрів

`iterator`
Об'єкт-ітератор, на основі якого потрібно побудувати цей
екземпляр. Це може бути об'єкт класу
[RecursiveIterator](class.recursiveiterator.md) або класу
[IteratorAggregate](class.iteratoraggregate.md).

`mode`
Необов'язковий параметр. Завдання режиму роботи архітектора. Можливі
значення:

- **`RecursiveIteratorIterator::LEAVES_ONLY`** - За замовчуванням.
Ітерація здійснюватиметься лише з листів дерева елементів.
- **`RecursiveIteratorIterator::SELF_FIRST`** - Ітерація буде
здійснюватися по всьому дереву елементів, причому першими будуть йти
Батьківські елементи.
- **`RecursiveIteratorIterator::CHILD_FIRST`** - Ітерація буде
здійснюватися по всьому дереву елементів, причому першими будуть йти
дочірніх елементів.

`flags`
Необов'язковий прапор. Можливе значення
**`RecursiveIteratorIterator::CATCH_GET_CHILD`** дає розпорядження
об'єкту не брати до уваги винятки, які викликає метод
**RecursiveIteratorIterator::getChildren()**.

### Приклади

**Приклад #1 Ітерація по дереву елементів за допомогою
RecursiveIteratorIterator**

` <?php$array u003d array(    array(        array(            array(                'leaf-0-0-0-0',                'leaf-0-0-0-1'            ),            'leaf-0-0-0'        ) ,        array(            array(                'leaf-0-1-0-0',                'leaf-0-1-0-1'            ),            'leaf-0-1-0'        ),        'leaf-0-0'    )) ;$iteratoru003du003d new RecursiveIteratorIterator(    new RecursiveArrayIterator($array),    $mode);foreach ($iterator as $key u003d> $leaf) {  

Виведення прикладу в режимі $mode u003d RecursiveIteratorIterator::LEAVES_ONLY`

0 u003d> leaf-0-0-0-0
1 u003d> leaf-0-0-0-1
0 u003d> leaf-0-0-0
0 u003d> leaf-0-1-0-0
1 u003d> leaf-0-1-0-1
0 u003d> leaf-0-1-0
0 u003d> leaf-0-0

Виведення прикладу в режимі `$mode u003d RecursiveIteratorIterator::SELF_FIRST`

0 u003d> Array
0 u003d> Array
0 u003d> Array
0 u003d> leaf-0-0-0-0
1 u003d> leaf-0-0-0-1
1 u003d> leaf-0-0-0
1 u003d> Array
0 u003d> Array
0 u003d> leaf-0-1-0-0
1 u003d> leaf-0-1-0-1
1 u003d> leaf-0-1-0
2 u003d> leaf-0-0

Виведення прикладу в режимі `$mode u003d RecursiveIteratorIterator::CHILD_FIRST`

0 u003d> leaf-0-0-0-0
1 u003d> leaf-0-0-0-1
0 u003d> Array
1 u003d> leaf-0-0-0
0 u003d> Array
0 u003d> leaf-0-1-0-0
1 u003d> leaf-0-1-0-1
0 u003d> Array
1 u003d> leaf-0-1-0
1 u003d> Array
2 u003d> leaf-0-0
0 u003d> Array
