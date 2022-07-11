- [« Locale::parseLocale](locale.parselocale.md)
- [Normalizer »](class.normalizer.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Встановити локаль за умовчанням під час виконання

# Locale::setDefault

# locale_set_default

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::setDefault -- locale_set_default — Встановити локаль за
замовчуванням під час виконання

### Опис

Об'єктно-орієнтований стиль

public static **Locale::setDefault**(string `$locale`): bool

Процедурний стиль

**locale_set_default**(string `$locale`): bool

Встановлює локаль за умовчанням під час виконання згідно з аргументом
`locale`. Ця функція змінює значення глобальної опції
'default_locale'. Допускаються розширення UAX #35.

### Список параметрів

`locale`
Сумісна з BCP 47 мітка мови.

### Значення, що повертаються

Повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **locale_set_default()****

` <?phplocale_set_default('de-DE');echo locale_get_default();?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?phpLocale::setDefault('de-DE');echo Locale::getDefault();?> `

Результат виконання цього прикладу:

de-DE

### Дивіться також

- [locale_get_default()](locale.getdefault.md) - Отримання значення
локалі INTL за замовчуванням з опції 'default_locale'
