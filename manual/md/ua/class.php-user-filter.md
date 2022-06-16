- [« Приклад класу, зареєстрованого як обгортка
потоку](stream.streamwrapper.example-1.md)
- [php_user_filter::filter »](php-user-filter.filter.md)

- [PHP Manual](index.md)
- [Потоки](book.stream.md)
- Клас php_user_filter

# Клас php_user_filter

(PHP 5, PHP 7, PHP 8)

## Вступ

Нащадки цього класу передаються у функцію
[stream_filter_register()](function.stream-filter-register.md).
Зверніть увагу, що метод
[\_\_construct](language.oop5.decon.md#object.construct) не
викликається; натомість для ініціалізації слід використовувати
[php_user_filter::onCreate()](php-user-filter.oncreate.md).

## Огляд класів

class **php_user_filter** {

/\* Властивості \*/

public string `$filtername` u003d "";

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$params` u003d "";

public ?resource `$stream` u003d null;

/\* Методи \*/

public [filter](php-user-filter.filter.md)(
resource `$in`,
resource `$out`,
int `&$consumed`,
bool `$closing`
): int

public [onClose](php-user-filter.onclose.md)(): void

public [onCreate](php-user-filter.oncreate.md)(): bool

}

## Властивості

`filtername`
Ім'я фільтра, зареєстрованого функцією
[stream_filter_append()](function.stream-filter-append.md).

`params`

`stream`

## Зміст

- [php_user_filter::filter](php-user-filter.filter.md) — Викликається,
як тільки застосовується фільтр
- [php_user_filter::onClose](php-user-filter.onclose.md) -
Викликається під час закриття фільтра
- [php_user_filter::onCreate](php-user-filter.oncreate.md) -
Викликається під час створення об'єкта фільтра
