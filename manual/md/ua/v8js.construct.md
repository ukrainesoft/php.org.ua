- [« V8Js] (class.v8js.md)
- [V8Js::executeString »](v8js.executestring.md)

- [PHP Manual](index.md)
- [V8Js](class.v8js.md)
- Створює новий об'єкт V8Js

# V8Js::\_\_construct

(PECL v8js \>u003d 0.1.0)

V8Js::\_\_construct — Створює новий об'єкт [V8Js](class.v8js.md)

### Опис

public **V8Js::\_\_construct**(
string `$object_name` u003d "PHP",
array `$variables` u003d array(),
array `$extensions` u003d array(),
bool `$report_uncaught_exceptions` u003d **`true`**
)

Створює новий об'єкт [V8Js](class.v8js.md).

### Список параметрів

`object_name`
Ім'я об'єкта, що передається Javascript.

`variables`
Список змінних PHP, які мають бути доступні у Javascript.
Асоціативний масив формату
`array("name-for-js" u003d> "name-of-php-variable")`. За замовчуванням порожній
масив.

`extensions`
Список зареєстрованих через
[V8Js::registerExtension()](v8js.registerextension.md) модулів,
які мають бути доступні в контексті створеного об'єкту
[V8Js](class.v8js.md).

> **Примітка**:
>
> Модулі, зареєстровані як доступні автоматично, не потрібні
> перераховувати у цьому масиві. Також, якщо модуль має будь-які
> залежності, їх теж не потрібно перераховувати. За замовчуванням порожній
> масив.

`report_uncaught_exceptions`
Визначає, чи повідомлятимуться про непоймані винятки JavaScript
відразу чи ні. За промовчанням **`true`**. Якщо встановити в **`false`**,
то ці винятки будуть доступні за допомогою
[V8Js::getPendingException()](v8js.getpendingexception.md).
