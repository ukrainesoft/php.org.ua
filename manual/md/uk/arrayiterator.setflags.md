- [« ArrayIterator::serialize](arrayiterator.serialize.md)
- [ArrayIterator::uasort »](arrayiterator.uasort.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Встановлює прапори, що змінюють поведінку.

# ArrayIterator::setFlags

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ArrayIterator::setFlags — Встановлює прапори, що змінюють поведінку
ArrayIterator

### Опис

public **ArrayIterator::setFlags**(int `$flags`): void

Встановлює прапори, які керують поведінкою.

### Список параметрів

`flags`
Поведінка нового ArrayIterator. Приймає або бітову маску, або
іменовані константи. Використання іменованих констант наполегливо
рекомендується для сумісності з майбутніми версіями.

Доступні прапори поведінки наведені нижче. Фактичний сенс цих
прапорів описаний в [визначених
константах](class.arrayiterator.md#arrayiterator.constants).

| значення | константа
|----------|-------------------------------------- -------------------------------------------------- ----------|
| 1 | [ArrayIterator::STD_PROP_LIST](class.arrayiterator.md#arrayiterator.constants.std-prop-list) |
| 2 | [ArrayIterator::ARRAY_AS_PROPS](class.arrayiterator.md#arrayiterator.constants.array-as-props) |

**Прапори поведінки ArrayIterator**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [ArrayIterator::getFlags()](arrayiterator.getflags.md) - Отримує
прапори поведінки
