- [«
MultipleIterator::attachIterator](multipleiterator.attachiterator.md)
- [MultipleIterator::containsIterator
»](multipleiterator.containsiterator.md)

- [PHP Manual](index.md)
- [MultipleIterator](class.multipleiterator.md)
- Створює новий MultipleIterator

# MultipleIterator::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

MultipleIterator::\_\_construct — Створює новий MultipleIterator

### Опис

public **MultipleIterator::\_\_construct**(int `$flags` u003d
MultipleIterator::MIT_NEED_ALL \| MultipleIterator::MIT_KEYS_NUMERIC)

Створює новий MultipleIterator.

### Список параметрів

`flags`
Прапори для установки, відповідно до [Предвизначеним
константам](class.multipleiterator.md#multipleiterator.constants).

- **`MultipleIterator::MIT_NEED_ALL`** або
**`MultipleIterator::MIT_NEED_ANY`**
- **`MultipleIterator::MIT_KEYS_NUMERIC`** або
**`MultipleIterator::MIT_KEYS_ASSOC`**

За замовчуванням
**`MultipleIterator::MIT_NEED_ALL`**\|**`MultipleIterator::MIT_KEYS_NUMERIC`**.

### Приклади

**Приклад #1 Ітерування MultipleIterator**

` <?php$people u003d new ArrayIterator(array('John', 'Jane', 'Jack', 'Judy'));$roles u003d new ArrayIterator(array('Developer', Scrum '));$team u003d new MultipleIterator($flags);$team->attachIterator($people, 'person');$team->attachIterator($roles, 'role');foreach ($team as $member) {   print_r($member);}?> `

Висновок з $flags u003d MIT_NEED_ALL|MIT_KEYS_NUMERIC`

Array
(
[0] u003d> John
[1] u003d> Developer
)
Array
(
[0] u003d> Jane
[1] u003d> Scrum Master
)
Array
(
[0] u003d> Jack
[1] u003d> Project Owner
)

Висновок з $flags u003d MIT_NEED_ANY|MIT_KEYS_NUMERIC`

Array
(
[0] u003d> John
[1] u003d> Developer
)
Array
(
[0] u003d> Jane
[1] u003d> Scrum Master
)
Array
(
[0] u003d> Jack
[1] u003d> Project Owner
)
Array
(
[0] u003d> Judy
[1] u003d>
)

Висновок з $flags u003d MIT_NEED_ALL | MIT_KEYS_ASSOC

Array
(
[person] u003d> John
[Role] u003d> Developer
)
Array
(
[person] u003d> Jane
[Role] u003d> Scrum Master
)
Array
(
[person] u003d> Jack
[Role] u003d> Project Owner
)

Висновок з $flags u003d MIT_NEED_ANY | MIT_KEYS_ASSOC

Array
(
[person] u003d> John
[Role] u003d> Developer
)
Array
(
[person] u003d> Jane
[Role] u003d> Scrum Master
)
Array
(
[person] u003d> Jack
[Role] u003d> Project Owner
)
Array
(
[person] u003d> Judy
[role] u003d>
)

### Дивіться також

- [Предвизначені
константи](class.multipleiterator.md#multipleiterator.constants)
- [MultipleIterator::valid()](multipleiterator.valid.md) - Перевіряє
коректність підитераторів
