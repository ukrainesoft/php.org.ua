- [«
IntlChar::getPropertyValueEnum](intlchar.getpropertyvalueenum.md)
- [IntlChar::getUnicodeVersion »](intlchar.getunicodeversion.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати ім'я Unicode для значення властивості

# IntlChar::getPropertyValueName

(PHP 7, PHP 8)

IntlChar::getPropertyValueName — Отримати ім'я Unicode для значення
властивості

### Опис

public static **IntlChar::getPropertyValueName**(int `$property`, int
`$value`, int `$type` u003d IntlChar::LONG_PROPERTY_NAME): string\|false

Повертає ім'я властивості Unicode за його значенням, як визначено у файлі
PropertyValueAliases.txt.

> **Примітка**:
>
> Деякі імена PropertyValueAliases.txt можуть бути вилучені
> тільки за допомогою **`IntlChar::PROPERTY_GENERAL_CATEGORY_MASK`**, а не
> **`IntlChar::PROPERTY_GENERAL_CATEGORY`**. Включно з:
>
> - "C" / "Інше"
> - "L" / "Літери"
> - "LC" / "Літери, що мають кілька регістрів"
> - "M" / "Мітки"
> - "N" / "Числа"
> - "P" / "Пунктуація"
> - "S" / "Символи"
> - "Z" / "Розділювачі"

### Список параметрів

`property`
Властивість Unicode для відображення (Дивись константи
`IntlChar::PROPERTY_*`).

Якщо не входить у допустимий діапазон, або якщо метод не працює з
даним значенням, повертається **`false`**.

`value`
Селектор для значення якості. Якщо не входить у допустимий діапазон, то
повернеться **`false`**.

В цілому, допустимий діапазон лежить у межах від `0` до деякого
максимуму. Є кілька винятків:

- Значення **`IntlChar::PROPERTY_BLOCK`** починаються з не нульового
значення **`IntlChar::BLOCK_CODE_BASIC_LATIN`**
- Значення **`IntlChar::PROPERTY_CANONICAL_COMBINING_CLASS`** не
безперервні та лежать у діапазоні 0..240.

`type`
Селектор для видобутого імені. Якщо не потрапляє в діапазон – буде
повернено **`false`**.

Усі значення мають довгі імена. Більшість мають короткі імена, але
не всі. Unicode дозволяє додаткові назви; Якщо існують, вони
будуть повернуті з додаванням 1, 2, і т.д
**`IntlChar::LONG_PROPERTY_NAME`**.

### Значення, що повертаються

Повертає імена або **`false`** якщо `property` або `nameChoice`
виходять за допустимий діапазон. У разі виникнення помилки повертає
**`null`**.

Якщо `type` повертає **`false`**, то все більші величини `type`
також повернуть **`false`**, з одним винятком: якщо **`false`** повернеться
для **`IntlChar::SHORT_PROPERTY_NAME`**, то
**`IntlChar::LONG_PROPERTY_NAME`** (і вище) все ще можуть повернути не
**`false`**.

### Приклади

**Приклад #1 Тестування різних властивостей**

` <?phpvar_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK)); :getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::LONG_PROPERTY_NAME));var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK:::PROPERTY_BLOCK)

Результат виконання цього прикладу:

string(16) "Greek_And_Coptic"
string(5) "Greek"
string(16) "Greek_And_Coptic"
bool(false)
