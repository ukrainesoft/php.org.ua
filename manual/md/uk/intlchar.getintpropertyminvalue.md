- [«
IntlChar::getIntPropertyMaxValue](intlchar.getintpropertymaxvalue.md)
- [IntlChar::getIntPropertyValue »](intlchar.getintpropertyvalue.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати мінімальне значення для якості Unicode

# IntlChar::getIntPropertyMinValue

(PHP 7, PHP 8)

IntlChar::getIntPropertyMinValue — Отримати мінімальне значення для
властивості Unicode

### Опис

public static **IntlChar::getIntPropertyMinValue**(int `$property`): int

Отримує мінімальне значення (перелічене/цілочисленне/бінарне) для
властивості Unicode

### Список параметрів

`property`
Властивість Unicode для відображення (Дивись константи
`IntlChar::PROPERTY_*`).

### Значення, що повертаються

Мінімальне значення, що повертається
[IntlChar::getIntPropertyValue()](intlchar.getintpropertyvalue.md) для
властивості Unicode `0`, якщо властивість не входить у допустимий діапазон.

### Приклади

**Приклад #1 Тестування різних властивостей**

` <?phpvar_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_BIDI_CLASS));var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_SCRIPT)); getIntPropertyMinValue(999999999)); // Some made-up value?> `

Результат виконання цього прикладу:

int(0)
int(0)
int(0)
int(0)

### Дивіться також

- [IntlChar::hasBinaryProperty()](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- [IntlChar::getIntPropertyMaxValue()](intlchar.getintpropertymaxvalue.md) -
Отримати мінімальне значення для якості Unicode
- [IntlChar::getIntPropertyValue()](intlchar.getintpropertyvalue.md) -
Отримати значення властивості Unicode для символу
- [IntlChar::getUnicodeVersion()](intlchar.getunicodeversion.md) -
Отримати версію Unicode
