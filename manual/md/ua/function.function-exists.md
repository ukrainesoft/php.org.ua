- [«func_num_args](function.func-num-args.md)
- [get_defined_functions »](function.get-defined-functions.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Повертає true, якщо вказана функція визначена

# function_exists

(PHP 4, PHP 5, PHP 7, PHP 8)

function_exists — Повертає **`true`**, якщо вказана функція
визначено

### Опис

**function_exists**(string `$function`): bool

Перевіряє, чи є у списку певних функцій як вбудованих
(Внутрішніх), так і користувальницьких, функція `function`.

### Список параметрів

`function`
Ім'я функції у вигляді рядка.

### Значення, що повертаються

Повертає **`true`**, якщо `function` існує і є функцією,
інакше повертається **`false`**.

> **Примітка**:
>
> Ця функція повертає **`false`** для мовних конструкцій, таких як
> [include_once](function.include-once.md) або
> [Echo](function.echo.md).

### Приклади

**Приклад #1 Приклад використання **function_exists()****

` <?phpif (function_exists('imap_open')) {   echo "Функції IMAP доступні.<br />
";} else {    echo "Функції IMAP недоступні.<br />
";}?> `

### Примітки

> **Примітка**:
>
> Зверніть увагу, що назва функції може бути навіть
> якщо функцію неможливо використовувати через налаштування конфігурації
> або опцій компіляції (наприклад, як для функцій
> [image](ref.image.md)).

### Дивіться також

- [method_exists()](function.method-exists.md) - Перевіряє,
чи існує метод у даному класі
- [is_callable()](function.is-callable.md) - Перевіряє, що значення
може бути викликано як функція у поточній області видимості
- [get_defined_functions()](function.get-defined-functions.md) -
Повертає масив усіх певних функцій
- [class_exists()](function.class-exists.md) - Перевіряє, чи був він
оголошено клас
- [extension_loaded()](function.extension-loaded.md) - Визначає,
чи завантажений модуль
