- [«
SplObjectStorage::offsetExists](splobjectstorage.offsetexists.md)
- [SplObjectStorage::offsetSet »](splobjectstorage.offsetset.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Повертає дані, асоційовані з об'єктом object

# SplObjectStorage::offsetGet

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetGet — Повертає дані, асоційовані з
об'єктом object

### Опис

public **SplObjectStorage::offsetGet**(object `$object`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає дані, пов'язані з об'єктом object.

### Список параметрів

`object`
Об'єкт об'єкта, що шукається.

### Значення, що повертаються

Дані, пов'язані з об'єктом object.

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
об'єкт `object` не вдалося знайти.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::offsetGet()****

` <?php$s u003d new SplObjectStorage;$o1 u003d new StdClass;$o2 u003d new StdClass;$s[$o1] u003d "hello";$s->attach($o2);var_dump($s->offG ($ o1)); //  $s[$o1]var_dump($s->offsetGet($o2)); //  $s[$o2]?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "hello"
NULL

### Дивіться також

- [SplObjectStorage::offsetSet()](splobjectstorage.offsetset.md) -
Асоціює дані з об'єктом у контейнері
- [SplObjectStorage::offsetExists()](splobjectstorage.offsetexists.md) -
Перевіряє, чи існує об'єкт у контейнері
- [SplObjectStorage::offsetUnset()](splobjectstorage.offsetunset.md) -
Видаляє об'єкт із контейнера
