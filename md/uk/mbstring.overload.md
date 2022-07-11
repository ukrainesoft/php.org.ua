- [« Підтримувані кодування
символів](mbstring.supported-encodings.md)
- [Вимоги до кодування символів у PHP
»](mbstring.php4.req.md)

- [PHP Manual](index.md)
- [Багатобайтові рядки](book.mbstring.md)
- механізм перевантаження функцій

# Механізм навантаження функцій

**Увага**

Ця функціональність оголошена *ЗАСТАРЛЕННОЮ*, починаючи з PHP 7.2.0 та
була *Видалена* у версії PHP 8.0.0. Використовувати цю функцію вкрай не
рекомендується.

Найчастіше змусити працювати існуючий PHP-додаток у багатобайтовому
оточенні виявляється досить важким завданням. Це відбувається тому
що більшість PHP-програм написано з використанням стандартних
функцій обробки рядків, таких як [substr()](function.substr.md),
які не вміють працювати з рядками у багатобайтових кодуваннях.

mbstring підтримує механізм 'перевантаження функцій', який дозволяє
повідомити додаток про те, що використовується багатобайтове кодування, без
модифікації коду, який відповідає за роботу з рядками. Наприклад, якщо
включено навантаження функцій, то функція
[mb_substr()](function.mb-substr.md) буде викликатися замість
[substr()](function.substr.md). Цей механізм у багатьох випадках
дозволяє портувати програми, що підтримують лише однобайтові
кодування в багатобайтне оточення.

Для використання механізму перевантаження функцій потрібно встановити налаштування
`mbstring.func_overload` в `php.ini` позитивне значення, яке
є комбінацією бітових масок, що визначають категорії
функцій, які потрібно перевантажувати. Це буде число 1 для навантаження
функції [mail()](function.mail.md). 2 для рядкових функцій, 4 для
функцій регулярних виразів. Наприклад, якщо значення налаштування дорівнює 7,
то поштові, рядкові та функції регулярних виразів будуть
перевантажуватись. Список перевантажуваних функцій наведено нижче.

| значення налаштування mbstring.func_overload | Вихідна функція | перевантажена функція
|-------------------------------------------|----- -----------------------------------------|-------- --------------------------------------------|
| 1 | [mail()](function.mail.md) | [mb_send_mail()](function.mb-send-mail.md) |
| 2 | [strlen()](function.strlen.md) | [mb_strlen()](function.mb-strlen.md) |
| 2 | [strpos()](function.strpos.md) | [mb_strpos()](function.mb-strpos.md) |
| 2 | [strrpos()](function.strrpos.md) | [mb_strrpos()](function.mb-strrpos.md) |
| 2 | [substr()](function.substr.md) | [mb_substr()](function.mb-substr.md) |
| 2 | [strtolower()](function.strtolower.md) | [mb_strtolower()](function.mb-strtolower.md) |
| 2 | [strtoupper()](function.strtoupper.md) | [mb_strtoupper()](function.mb-strtoupper.md) |
| 2 | [stripos()](function.stripos.md) | [mb_stripos()](function.mb-stripos.md) |
| 2 | [strripos()](function.strripos.md) | [mb_strripos()](function.mb-strripos.md) |
| 2 | [strstr()](function.strstr.md) | [mb_strstr()](function.mb-strstr.md) |
| 2 | [stristr()](function.stristr.md) | [mb_stristr()](function.mb-stristr.md) |
| 2 | [strrchr()](function.strrchr.md) | [mb_strrchr()](function.mb-strrchr.md) |
| 2 | [substr_count()](function.substr-count.md) | [mb_substr_count()](function.mb-substr-count.md) |

**Функції, які будуть перевантажені**

> **Примітка**:
>
> Не рекомендується використовувати навантаження функцій у контексті кожної
> директорії, тому що досягти стабільної роботи в цьому випадку поки не
> вдалося, і це може призвести до несподіваної поведінки програми.
