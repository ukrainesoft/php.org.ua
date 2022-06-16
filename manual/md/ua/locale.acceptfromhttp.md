- [«Locale](class.locale.md)
- [Locale::canonicalize »](locale.canonicalize.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Спробувати визначити найкращу локаль на основі заголовку HTTP
"Accept-Language"

# Locale::acceptFromHttp

#local_accept_from_http

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::acceptFromHttp -- locale_accept_from_http — Спробувати
визначити найкращу локаль на основі заголовку HTTP
"Accept-Language"

### Опис

Об'єктно-орієнтований стиль

public static **Locale::acceptFromHttp**(string `$header`):
string\|false

Процедурний стиль

**locale_accept_from_http**(string `$header`): string\|false

Намагається визначити локаль, що відповідає списку мов, запрошеному
у HTTP-заголовку "Accept-Language".

### Список параметрів

`header`
Рядок, що містить заголовок "Accept-Language" відповідно до формату
RFC 2616.

### Значення, що повертаються

Ідентифікатор локалі.

Повертає **`false`**, якщо довжина `header` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_accept_from_http()****

` <?php$locale u003d locale_accept_from_http($_SERVER['HTTP_ACCEPT_LANGUAGE']);echo $locale;?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$locale u003d Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);echo $locale;?> `

Результат виконання цього прикладу:

en_US

### Дивіться також

- [locale_lookup()](locale.lookup.md) - Пошук мовних позначок
найбільш відповідних заданої локалі
