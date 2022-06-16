- [« Locale::getAllVariants](locale.getallvariants.md)
- [Locale::getDisplayLanguage »](locale.getdisplaylanguage.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримання значення локалі INTL за замовчуванням з опції
'default_locale'

# Locale::getDefault

# locale_get_default

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getDefault -- locale_get_default — Отримання значення локалі
INTL за замовчуванням з опції 'default_locale'

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getDefault**(): string

Процедурний стиль

**locale_get_default**(): string

Отримувати значення локалі за замовчуванням. при ініціалізації PHP, це
значення встановлюється в значення 'intl.default_locale' з `php.ini`,
якщо воно там є, або значення ICU uloc_getDefault().

### Список параметрів

### Значення, що повертаються

Поточна локаль часу виконання

### Приклади

**Приклад #1 Приклад використання **locale_get_default()****

` <?phpini_set('intl.default_locale', 'de-DE');echo locale_get_default();echo '; ';locale_set_default('fr');echo locale_get_default();?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?phpini_set('intl.default_locale', 'de-DE');echo Locale::getDefault();echo '; ';Locale::setDefault('fr');echo Locale::getDefault();?> `

Результат виконання цього прикладу:

de-DE; fr

### Дивіться також

- [locale_set_default()](locale.setdefault.md) - Встановити локаль
за умовчанням під час виконання
