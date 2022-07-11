- [«Collator::getErrorMessage](collator.geterrormessage.md)
- [Collator::getSortKey »](collator.getsortkey.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Отримує назву локалі для Collator

# Collator::getLocale

#collator_get_locale

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::getLocale -- collator_get_locale — Отримує назву локалі
для Collator

### Опис

Об'єктно-орієнтований стиль

public **Collator::getLocale**(int `$type`): string\|false

Процедурний стиль

**collator_get_locale**([Collator](class.collator.md) `$object`, int
`$type`): string\|false

Отримує назву локалі Collator.

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`type`
Ви можете вибирати між коректним та фактичним мовним стандартом (
**`Locale::VALID_LOCALE`** та **`Locale::ACTUAL_LOCALE`**,
відповідно).

### Значення, що повертаються

Справжнє ім'я локалі, з якого беруться дані зіставлення. Якщо
Collator був створений із правил або сталася помилка, повертає
**`false`**.

### Приклади

**Приклад #1 **collator_get_locale()** example**

` <?php$coll    u003d collator_create( 'en_US_California' );$res_val u003d collator_get_locale( $coll, Locale::VALID_LOCALE );$res_act u003d?collator_get_locale(  s
Назва фактичної локалі: %s
",         $res_val, $res_act );?> `

Результат виконання цього прикладу:

Назва локалі: en_US_California
Назва коректної локалі: en_US
Назва фактичної локалі: en

### Дивіться також

- [collator_create()](collator.create.md) - Створює новий екземпляр
Collator
