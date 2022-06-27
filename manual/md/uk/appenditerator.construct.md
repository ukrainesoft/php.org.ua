- [« AppendIterator::append](appenditerator.append.md)
- [AppendIterator::current »](appenditerator.current.md)

- [PHP Manual](index.md)
- [AppendIterator](class.appenditerator.md)
- Створює AppendIterator

# AppendIterator::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

AppendIterator::\_\_construct — Створює AppendIterator

### Опис

public **AppendIterator::\_\_construct**()

Створює AppendIterator.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Ітерація AppendIterator за допомогою foreach**

` <?php$pizzas   u003d new ArrayIterator(array('Margarita', 'Siciliana', 'Hawaii'));$toppings u003d new ArrayIterator(array('Cheese', 'Anchovies', 'Oliv 'Ham'));$appendIterator u003d new AppendIterator;$appendIterator->append($pizzas);$appendIterator->append($toppings);foreach ($appendIterator as $key u003d> $item) {          ' u003d> ' . $item . PHP_EOL;}?> `

Результат виконання цього прикладу:

0 u003d> Margarita
1 u003d> Siciliana
2 u003d> Hawaii
0 u003d> Cheese
1 u003d> Anchovies
2 u003d> Olives
3 u003d> Pineapple
4 u003d> Ham

**Приклад #2 Ітерація AppendIterator за допомогою AppendIterator API**

` <?php$pizzas   u003d new ArrayIterator(array('Margarita', 'Siciliana', 'Hawaii'));$toppings u003d new ArrayIterator(array('Cheese', 'Anchovies', 'Oliv 'Ham'));$appendIterator u003d new AppendIterator;$appendIterator->append($pizzas);$appendIterator->append($toppings);while ($appendIterator->valid()|                                             | %s u003d> %s%s',   $appendIterator->getIteratorIndex(),        $appendIterator->key(),        $appendItera     $appendIterator->next();}?> `

Результат виконання цього прикладу:

0 u003d> 0 u003d> Margarita
0 u003d> 1 u003d> Siciliana
0 u003d> 2 u003d> Hawaii
1 u003d> 0 u003d> Cheese
1 u003d> 1 u003d> Anchovies
1 u003d> 2 u003d> Olives
1 u003d> 3 u003d> Pineapple
1 u003d> 4 u003d> Ham

### Примітки

**Застереження**

При використанні функції
[iterator_to_array()](function.iterator-to-array.md) для копіювання
значення AppendIterator в масив, вам необхідно встановити
додатковий аргумент `use_key` на значення **`false`**. Коли
`use_key` не приймає значення **`false`**, будь-які ключі, повторно
що зустрічаються у внутрішніх ітераторах, будуть перезаписані в
масив, що повертається. Зберегти оригінальні ключі неможливо.

### Дивіться також

- [AppendIterator::append()](appenditerator.append.md) - Додає
ітератор
