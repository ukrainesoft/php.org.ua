- [« Locale::lookup](locale.lookup.md)
- [Locale::setDefault »](locale.setdefault.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримати асоціативний масив усіх підтегів локалі

# Locale::parseLocale

#local_parse

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::parseLocale -- locale_parse — Отримати асоціативний масив усіх
підтегів локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::parseLocale**(string `$locale`): ?array

Процедурний стиль

**locale_parse**(string `$locale`): ?array

Повертає асоціативний масив, що містить усі підтеги заданої локалі.

### Список параметрів

`locale`
Локаль з якої витягатимуться підтеги. Зверніть увагу: підтегів
'variant' та 'private' може бути не більше 15, а підтегів 'extlang' не
більше ніж 3.

### Значення, що повертаються

Повертає асоціативний масив, у якому ключами виступають імена
підтегів, а значеннями відповідно їх значення. Підтеги будуть
відсортовані як підтеги ідентифікатора локалі, тобто. якщо ідентифікатор
містить кілька варіантів '-varX-varY-varZ', то в масиві вони будуть
розташовуватися так: variant0u003dvarX, variant1u003dvarY, variant2u003dvarZ

Повертає **`null`** якщо довжина параметра `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_parse()****

`<?php$arr u003d locale_parse('sl-Latn-IT-nedis');if ($arr) {   foreach ($arr as $key u003d> $value) { u| | }}?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?php$arr u003d Locale::parseLocale('sl-Latn-IT-nedis');if ($arr) {    foreach ($arr as $key u003d> $value) { u$$ "; }}?> `

Результат виконання цього прикладу:

language : sl , script : Latn , region : IT , variant0 : NEDIS ,

### Дивіться також

- [locale_compose()](locale.composelocale.md) - Повертає коректно
відсортовані та розділені ідентифікатори локалі
