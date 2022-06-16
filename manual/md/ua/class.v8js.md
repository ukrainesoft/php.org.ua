- [« Приклади](v8js.examples.md)
- [V8Js::\_\_construct »](v8js.construct.md)

- [PHP Manual](index.md)
- [V8js](book.v8js.md)
- Клас V8Js

# Клас [V8Js](class.v8js.md)

(PECL v8js \>u003d 0.1.0)

## Вступ

Це основний клас модуля V8Js. Кожен екземпляр цього класу має
власний контекст у якому буде скомпілюваний та запущений JavaScript.

Також дивіться [V8Js::\_\_construct()](v8js.construct.md).

## Огляд класів

class **V8Js** {

/\* Константи \*/

const string `V8_VERSION`;

const int `FLAG_NONE` u003d 1;

const int `FLAG_FORCE_ARRAY` u003d 2;

/\* Методи \*/

public [\_\_construct](v8js.construct.md)(
string `$object_name` u003d "PHP",
array `$variables` u003d array(),
array `$extensions` u003d array(),
bool `$report_uncaught_exceptions` u003d **`true`**
)

public [executeString](v8js.executestring.md)(string `$script`, string
`$identifier` u003d "V8Js::executeString()", int `$flags` u003d
**`V8Js::FLAG_NONE`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [getExtensions](v8js.getextensions.md)(): array

public [getPendingException](v8js.getpendingexception.md)():
[V8JsException](class.v8jsexception.md)

public static [registerExtension](v8js.registerextension.md)(
string `$extension_name`,
string `$script`,
array `$dependencies` u003d array(),
bool `$auto_enable` u003d **`false`**
): bool

}

## Зумовлені константи

**`V8Js::V8_VERSION`**
Версія двигуна V8 Javascript.

**`V8Js::FLAG_NONE`**
Без прапорів.

**`V8Js::FLAG_FORCE_ARRAY`**
Примушує об'єкти JS бути асоціативними масивами PHP.

## Зміст

- [V8Js::\_\_construct](v8js.construct.md) — Створює новий об'єкт
V8Js
- [V8Js::executeString](v8js.executestring.md) — Виконати рядок
як код Javascript
- [V8Js::getExtensions](v8js.getextensions.md) - Повертає масив
зареєстрованих модулів
- [V8Js::getPendingException](v8js.getpendingexception.md) -
Повертає очікуваний непойманий виняток Javascript
- [V8Js::registerExtension](v8js.registerextension.md) — Реєстрація
модуля Javascript для V8Js
