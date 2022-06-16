- [« FilterIterator](class.filteriterator.md)
- [FilterIterator::\_\_construct »](filteriterator.construct.md)

- [PHP Manual](index.md)
- [FilterIterator](class.filteriterator.md)
- Перевіряє, чи є поточний елемент ітератора допустимим

# FilterIterator::accept

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

FilterIterator::accept — Перевіряє, чи є поточний елемент
ітератора допустимим

### Опис

public **FilterIterator::accept**(): bool

Перевіряє, чи є поточний елемент ітератора допустимим для цього
фільтра.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`** якщо поточний елемент допустимо, інакше
**`false`**.

### Приклади

**Приклад #1 Приклад використання **FilterIterator::accept()****

` <?php// Этот итератор фильтрует все значения с длиной менее 10 символовclass LengthFilterIterator extends FilterIterator {    public function accept() {        // Допускает строки с длиной 10 символов и более        return strlen(parent::current()) >u003d 10; }}$arrayIterator u003d new ArrayIterator(array('тест1', 'більше 10 символів'));$lengthFilter u003d new LengthFilterIterator($arrayIterator);foreach ($length   "
";}?> `

Результат виконання цього прикладу:

більше 10 символів
