- [«$\_GET](reserved.variables.get.md)
- [$\_FILES »](reserved.variables.files.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Змінні HTTP POST

# $\_POST

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

$\_POST — Змінні HTTP POST

### Опис

Асоціативний масив даних, переданих скрипту через HTTP методом POST
при використанні `application/x-www-form-urlencoded` або
`multipart/form-data` у заголовку Content-Type запиту HTTP.

### Приклади

**Приклад #1 Приклад використання `$_POST`**

`<?phpecho 'Привіт ' . htmlspecialchars($_POST["name"]) . '!';?> `

Очевидно, що користувач надіслав через POST nameu003dІван

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

- [Обробка зовнішніх змінних](language.variables.external.md)
- [Фільтрування даних](book.filter.md)
