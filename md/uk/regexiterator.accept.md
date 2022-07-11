- [« RegexIterator](class.regexiterator.md)
- [RegexIterator::\_\_construct »](regexiterator.construct.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Перевірка відповідності регулярному виразу

# RegexIterator::accept

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::accept — Перевірка відповідності регулярному виразу

### Опис

public **RegexIterator::accept**(): bool

Перевіряє відповідність рядка `(string)`, який повернув метод
**RegexIterator::current()** (або **RegexIterator::key()**, якщо
встановлено прапор
[RegexIterator::USE_KEY](class.regexiterator.md#regexiterator.constants.use-key)),
регулярного вираження.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо значення елемента відповідає регулярному виразу,
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::accept()****

У цьому прикладі буде здійснюватись навігація тільки за тими елементами,
значення яких відповідають регулярному виразу.

` <?php$names u003d new ArrayIterator(array('Ann', 'Bob', 'Charlie', 'David'));$filter u003d new RegexIterator($names, '/^[B-D]/');foreach ($filter as $name) {    echo $name . PHP_EOL;}?> `

Результат виконання цього прикладу:

Bob
Charlie
David

### Дивіться також

- [Константи
RegexIterator](class.regexiterator.md#regexiterator.constants)
- [RegexIterator::setFlags()](regexiterator.setflags.md) - Установка
прапорів
