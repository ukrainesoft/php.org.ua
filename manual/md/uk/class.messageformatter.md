- [« Normalizer::normalize](normalizer.normalize.md)
- [MessageFormatter::create »](messageformatter.create.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас MessageFormatter

# Клас MessageFormatter

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

## Вступ

MessageFormatter - це клас, що дозволяє створювати склеювані,
незалежні від мови повідомлення. Методи цього класу використовуються для
створення всіх повідомлень, що показуються користувачеві.

Клас MessageFormatter збирає повідомлення з різних фрагментів (таких
як текст, числа та дати), що поставляються програмою. Цей клас
дозволяє програмі не замислюватись про те, в якому порядку ці фрагменти
треба склеювати. Клас використовує специфікації форматування для складання
цих фрагментів у повідомлення, що зберігається у вигляді одного рядка у сховищі
ресурсів. Наприклад, MessageFormatter дозволить надрукувати фразу
"Finished printing x out of y files..." таким чином, щоб забезпечити
гнучкість перекладу.

Раніше повідомлення для кінцевого користувача створювалося як закінчене
фраза та оброблялася як рядок. Така процедура призводила до проблем
локалізації, оскільки структура фрази, порядок слів, формат чисел та
інше сильно відрізнялися у різних мовах. Нейтральна до мови процедура
створення повідомлень тримає кожну частину повідомлення окремо та
надає ключі даних. Використовуючи ці ключі, клас
MessageFormatter може склеювати частини повідомлення, перетворювати їх на
відповідно до локалі та відображати у вигляді грамотного повідомлення
кінцевого користувача.

MessageFormatter бере набір об'єктів, форматує їх та вставляє в
шаблон у потрібних місцях. Спільно з MessageFormatter корисно
використовувати засоби форматування вибору (choice formatter) для
обробки множини/однини, порівняння чисел і вибору
з масиву елементів. Зазвичай формат повідомлення береться з ресурсів, а
аргументи передаються під час виконання.

## Огляд класів

class **MessageFormatter** {

/\* Методи \*/

public [\_\_construct](messageformatter.create.md)(string `$locale`,
string `$pattern`)

public static [create](messageformatter.create.md)(string `$locale`,
string `$pattern`): ?[MessageFormatter](class.messageformatter.md)

public static
[formatMessage](messageformatter.formatmessage.md)(string `$locale`,
string `$pattern`, array `$values`): string\|false

public [format](messageformatter.format.md)(array `$values`):
string\|false

public [getErrorCode](messageformatter.geterrorcode.md)(): int

public [getErrorMessage](messageformatter.geterrormessage.md)():
string

public [getLocale](messageformatter.getlocale.md)(): string

public [getPattern](messageformatter.getpattern.md)(): string\|false

public static [parseMessage](messageformatter.parsemessage.md)(string
`$locale`, string `$pattern`, string `$message`): array\|false

public [parse](messageformatter.parse.md)(string `$string`):
array\|false

public [setPattern](messageformatter.setpattern.md)(string
`$pattern`): bool

}

## Дивіться також

- [»  ICU. Документація з
форматированию.](https://unicode-org.github.io/icu/userguide/format_parse/)
- [»  ICU. Опис форматування
повідомлень.](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [» ICU. Засоби форматування
повідомлень](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [» ICU. Засоби форматування
вибору](http://icu-project.org/apiref/icu4c/classChoiceFormat.md#details)

## Зміст

- [MessageFormatter::create](messageformatter.create.md) — Створює
засіб форматування повідомлень
- [MessageFormatter::formatMessage](messageformatter.formatmessage.md)
— Швидко форматує повідомлення
- [MessageFormatter::format](messageformatter.format.md) -
Форматує повідомлення
- [MessageFormatter::getErrorCode](messageformatter.geterrorcode.md)
— Повертає код помилки останньої операції
- [MessageFormatter::getErrorMessage](messageformatter.geterrormessage.md)
— Повертає текст помилки останньої операції
- [MessageFormatter::getLocale](messageformatter.getlocale.md) -
Повертає локаль, для якої було створено засіб форматування
- [MessageFormatter::getPattern](messageformatter.getpattern.md) -
Повертає шаблон, який використовується засобом форматування
- [MessageFormatter::parseMessage](messageformatter.parsemessage.md)
— Швидко розбирає вхідний рядок
- [MessageFormatter::parse](messageformatter.parse.md) - Розбирає
рядок згідно шаблону
- [MessageFormatter::setPattern](messageformatter.setpattern.md) -
Встановлює шаблон, який використовується засобом форматування
