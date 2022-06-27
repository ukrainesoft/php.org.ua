- [« IntlChar::getNumericValue](intlchar.getnumericvalue.md)
- [IntlChar::getPropertyName »](intlchar.getpropertyname.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати значення константи властивості на його ім'я

# IntlChar::getPropertyEnum

(PHP 7, PHP 8)

IntlChar::getPropertyEnum — Отримати значення константи властивості на його
імені

### Опис

public static **IntlChar::getPropertyEnum**(string `$alias`): int

Повертає значення константи властивості за його ім'ям, як задано в
PropertyAliases.txt. Приймаються довгі, короткі та інші варіанти
імені.

Додатково ця функція пов'язує синтетичне ім'я "gcm" /
"General_Category_Mask" з властивістю
**`IntlChar::PROPERTY_GENERAL_CATEGORY_MASK`**.Цих імен немає в
PropertyAliases.txt.

Функція близька до
[IntlChar::getPropertyName()](intlchar.getpropertyname.md).

### Список параметрів

`alias`
Ім'я якості. Імена порівнюються за принципом "loose matching", як
описано в PropertyValueAliases.txt.

### Значення, що повертаються

Повертає значення константи `IntlChar::PROPERTY_`, або
**`IntlChar::PROPERTY_INVALID_CODE`**, якщо задане ім'я не
відповідає жодній якості.

### Приклади

**Приклад #1 Тестування різних властивостей**

` <?phpvar_dump(IntlChar::getPropertyEnum('Bidi_Class') u003du003du003d IntlChar::PROPERTY_BIDI_CLASS);var_dump(IntlChar::getPropertyEnum('script') u003du003du003d IntlChar::PROPERTY_SCRIPT) 'IDEOGRAPHIC') u003du003du003d IntlChar::PROPERTY_IDEOGRAPHIC);var_dump(IntlChar::getPropertyEnum('Some made-up string') u003du003du003d IntlChar::PROPERTY_INVALID_CODE);?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)
bool(true)

### Дивіться також

- [IntlChar::getPropertyName()](intlchar.getpropertyname.md) -
Отримати Unicode ім'я властивості
