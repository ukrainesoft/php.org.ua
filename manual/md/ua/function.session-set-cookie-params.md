- [« session_save_path](function.session-save-path.md)
- [session_set_save_handler »](function.session-set-save-handler.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Встановлює параметри сесійної cookie

# session_set_cookie_params

(PHP 4, PHP 5, PHP 7, PHP 8)

session_set_cookie_params — Встановлює параметри сесійної cookie

### Опис

**session_set_cookie_params**(
int `$lifetime_or_options`,
?string `$path` u003d **`null`**,
?string `$domain` u003d **`null`**,
?bool `$secure` u003d **`null`**,
?bool `$httponly` u003d **`null`**
): bool

Альтернативна сигнатура доступна з PHP 7.3.0:

**session_set_cookie_params**(array `$lifetime_or_options`): bool

**session_set_cookie_params**(array `$options`): bool

Встановлює параметри cookie, визначені у файлі `php.ini`. Ефект
ця функція зберігається тільки на час виконання скрипта. Таким
Таким чином, потрібно викликати **session_set_cookie_params()** для кожного
запиту та перед кожним викликом
[session_start()](function.session-start.md).

Ця функція оновлює поточні ini-значення відповідних ключів
конфігурації PHP ini, які можна отримати за допомогою
[ini_get()](function.ini-get.md).

### Список параметрів

`lifetime_or_options`
Якщо використовувати першу сигнатуру, [час
життя](session.configuration.md#ini.session.cookie-lifetime)
сесійної куки, задане в секундах.

Якщо використовувати другу сигнатуру, асоціативний масив (array),
який може мати будь-який з ключів `lifetime`, `path`, `domain`,
`secure`, `httponly` та `samesite`. Значення мають той самий сенс, як
описано у параметрах із відповідним ім'ям. Значення елемента
`samesite` має бути або `Lax`, або `Strict`. Якщо якась із
допустимих опцій не вказано, її значення за умовчанням збігаються з
значення за промовчанням для явних параметрів. Якщо елемент `samesite` не
вказано, cookie-атрибут SameSite не встановлено.

`path`
[Шлях](session.configuration.md#ini.session.cookie-path) у домені, де
cookie буде працювати. Використовуйте одну косу рису ('/') для всіх шляхів
у домені.

`domain`
[Домен](session.configuration.md#ini.session.cookie-domain) cookie,
наприклад, 'www.php.net'. Щоб зробити cookies видимими для всіх
піддоменів, перед ім'ям домену потрібно поставити крапку, наприклад
'.php.net'.

`secure`
Якщо **`true`**, то cookies будуть передаватися лише через
[захищені](session.configuration.md#ini.session.cookie-secure)
з'єднання.

`httponly`
Якщо встановлено **`true`**, то PHP спробує надіслати прапорець
[httponly](session.configuration.md#ini.session.cookie-httponly) при
налаштування сесійної cookie.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.0.0 | `path`, `domain`, `secure` та `httponly` тепер можуть бути **`null`**. |
| 7.3.0 | Доданий альтернативний підпис, що підтримує масив опцій `lifetime_or_options`. Цей підпис також підтримує налаштування cookie-атрибута SameSite. |
| 7.2.0 | Повертає **`true`** у разі успішного виконання або **`false`** у разі виникнення помилки. Раніше повертала тип void. |

### Дивіться також

- [session.cookie_lifetime](session.configuration.md#ini.session.cookie-lifetime)
- [session.cookie_path](session.configuration.md#ini.session.cookie-path)
- [session.cookie_domain](session.configuration.md#ini.session.cookie-domain)
- [session.cookie_secure](session.configuration.md#ini.session.cookie-secure)
- [session.cookie_httponly](session.configuration.md#ini.session.cookie-httponly)
- [session.cookie_samesite](session.configuration.md#ini.session.cookie-samesite)
- [session_get_cookie_params()](function.session-get-cookie-params.md) -
Повертає параметри cookie сесії
