- [«NoRewindIterator::next](norewinditerator.next.md)
- [NoRewindIterator::valid »](norewinditerator.valid.md)

- [PHP Manual](index.md)
- [NoRewindIterator](class.norewinditerator.md)
- Запобігає поверненню внутрішнього ітератора на початок

# NoRewindIterator::rewind

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

NoRewindIterator::rewind — Запобігає поверненню внутрішнього ітератора в
початок

### Опис

public **NoRewindIterator::rewind**(): void

Запобігає поверненню внутрішнього ітератора на початок.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **NoRewindIterator::rewind()****

Приклад показує, що виклик операції повернення на початок об'єкта
NoRewindIterator не має жодного ефекту.

` <?php$fruits u003d array("лимон", "апельсин", "яблуко", "груша");$noRewindIterator u003d new NoRewindIterator(new ArrayIterator($fruits));echo $noRewind "
";$noRewindIterator->next();// повернення ітератора початок (нічого не повинно трапитися)$noRewindIterator->rewind();echo $noRewindIterator->current() . ""
";?> `

Результат виконання цього прикладу:

лимон
апельсин
