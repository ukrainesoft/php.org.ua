- [«$\_ENV](reserved.variables.environment.md)
- [$php_errormsg »](reserved.variables.phperrormsg.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- HTTP Cookies

# $\_COOKIE

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

$\_COOKIE - HTTP Cookies

### Опис

Асоціативний масив (array) значень, переданих скрипту через HTTP
Cookies.

### Приклади

**Приклад #1 Приклад використання `$_COOKIE`**

`<?phpecho 'Привіт, ' . htmlspecialchars($_COOKIE["name"]) . '!';?> `

Припустимо, що значення cookie з ім'ям "name" було встановлено раніше.

Результатом виконання цього прикладу буде щось подібне:

Привіт, Іване!

### Примітки

> **Примітка**:
>
> Це 'суперглобальна' або автоматична глобальна змінна. Це
> просто означає, що вона є у всіх контекстах скрипта. Ні
> необхідності виконувати **global $variable;** для доступу до неї всередині
> методу чи функції.

### Дивіться також

- [setcookie()](function.setcookie.md) - Надсилає cookie
- [Обробка зовнішніх змінних](language.variables.external.md)
- [Фільтрування даних](book.filter.md)
