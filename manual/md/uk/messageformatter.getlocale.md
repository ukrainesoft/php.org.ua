- [«
MessageFormatter::getErrorMessage](messageformatter.geterrormessage.md)
- [MessageFormatter::getPattern »](messageformatter.getpattern.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Повертає локаль, для якої було створено засіб форматування

# MessageFormatter::getLocale

#msgfmt_get_locale

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::getLocale -- msgfmt_get_locale — Повертає локаль,
для якої було створено засіб форматування

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::getLocale**(): string

Процедурний стиль

**msgfmt_get_locale**([MessageFormatter](class.messageformatter.md)
`$formatter`): string

Повертає локаль, на яку було створено засіб форматування.

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md)

### Значення, що повертаються

Ім'я локали.

### Приклади

**Приклад #1 Приклад використання **msgfmt_get_locale()****

` <?php$fmt u003d msgfmt_create('en_US', "Number {0,number}");echo msgfmt_get_locale($fmt);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new MessageFormatter('en_US', "Number {0,number}");echo $fmt->getLocale();?> `

Результат виконання цього прикладу:

en_US

### Дивіться також

- [msgfmt_create()](messageformatter.create.md) - Створює засіб
форматування повідомлень
