- [« svn_auth_get_parameter](function.svn-auth-get-parameter.md)
- [svn_blame »](function.svn-blame.md)

- [PHP Manual](index.md)
- [Функції SVN](ref.svn.md)
- Встановлює параметр автентифікації

# svn_auth_set_parameter

(PECL svn \>u003d 0.1.0)

svn_auth_set_parameter — Встановлює параметр автентифікації

### Опис

**svn_auth_set_parameter**(string `$key`, string `$value`): void

Встановлює параметр аутентифікації значення `value` за ключом `key`.
Список можливих ключів та їх значень доступний у [списку констант
аутентифікації](svn.constants.md#svn.constants.auth).

### Список параметрів

`key`
Ім'я ключа (Рядок). Щоб вказати ключ, використовуйте [список констант
аутентифікації](svn.constants.md#svn.constants.auth), визначений
цим модулем.

`value`
Строкове значення параметра по ключу. Формат значень
може змінюватись в залежності від параметра.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Простий приклад аутентифікації**

Цей приклад показує як налаштувати SVN, щоб ім'я користувача за
замовчуванням було 'Bob', а пароль за замовчуванням - 'abc123':

` <?phpsvn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_USERNAME, 'Bob');svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_PASSWORD, 'abc123');?> `

### Примітки

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Дивіться також

- [svn_auth_get_parameter()](function.svn-auth-get-parameter.md) -
Повертає параметр аутентифікації
- [Константи аутентифікації](svn.constants.md#svn.constants.auth)
