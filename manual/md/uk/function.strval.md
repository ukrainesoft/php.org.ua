- [«settype](function.settype.md)
- [unserialize »](function.unserialize.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає строкове значення змінної

#strval

(PHP 4, PHP 5, PHP 7, PHP 8)

strval — Повертає строкове значення змінної

### Опис

**strval**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): string

Повертає строкове значення змінної. Дивіться документацію за типом
string для більш детальної інформації про перетворення на рядок.

Ця функція не робить форматування значення, що повертається. Якщо
необхідно привести числове значення до рядка з особливим форматом,
скористайтесь [sprintf()](function.sprintf.md) або
[number_format()](function.number-format.md).

### Список параметрів

`value`
Змінна, яку потрібно перетворити на рядок.

`value` може бути будь-якого скалярного типу або об'єктом, який
реалізує метод
[\_\_toString()](language.oop5.magic.md#object.tostring). **strval()**
не можна застосувати до масиву або об'єкта, які не реалізують метод
[\_\_toString()](language.oop5.magic.md#object.tostring).

### Значення, що повертаються

Рядкове значення (string) параметра `value`.

### Приклади

**Приклад #1 Приклад використання **strval()** з магічним методом PHP
[\_\_toString()](language.oop5.magic.md#object.tostring).**

`<?phpclass StrValTest{    public function __toString()    {        return __CLASS__; }}// Виводить 'StrValTest'echo strval(new StrValTest);?> `

### Дивіться також

- [boolval()](function.boolval.md) - Повертає логічне значення
змінної
- [floatval()](function.floatval.md) - Повертає значення
змінною у вигляді числа з плаваючою точкою
- [intval()](function.intval.md) - Повертає ціле значення
змінної
- [settype()](function.settype.md) - Задає тип змінної
- [sprintf()](function.sprintf.md) - Повертає відформатовану
рядок
- [number_format()](function.number-format.md) - Форматує число з
поділом груп
- [Маніпуляції з типами](language.types.type-juggling.md)
- [\_\_toString()](language.oop5.magic.md#object.tostring)
