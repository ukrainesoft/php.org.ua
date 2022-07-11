- [« V8Js::getPendingException](v8js.getpendingexception.md)
- [V8JsException »](class.v8jsexception.md)

- [PHP Manual](index.md)
- [V8Js](class.v8js.md)
- Реєстрація модуля Javascript для V8Js

# V8Js::registerExtension

(PECL v8js \>u003d 0.1.0)

V8Js::registerExtension — Реєстрація модуля Javascript для V8Js

### Опис

public static **V8Js::registerExtension**(
string `$extension_name`,
string `$script`,
array `$dependencies` u003d array(),
bool `$auto_enable` u003d **`false`**
): bool

Реєстрація переданого в `script` Javascript як модуля для
використання [V8Js](class.v8js.md).

### Список параметрів

`extension_name`
Ім'я модуля, що реєструється.

`script`
Код JavaScript для реєстрації.

`dependencies`
Масив імен модулів, від яких залежить модуль, що реєструється. Кожен з
цих модулів буде увімкнено автоматично при завантаженні цього модуля.

> **Примітка**:
>
> Усі модулі, включаючи залежності, повинні бути зареєстровані до
> створення будь-яких [V8Js](class.v8js.md), що їх використовують.

`auto_enable`
Якщо встановлено в **`true`**, модуль буде включено автоматично для
будь-якого контексту [V8Js](class.v8js.md).

### Значення, що повертаються

Повертає **`true`** якщо модуль успішно зареєстрований або
**`false`** у протилежному випадку.
