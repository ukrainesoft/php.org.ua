- [« Locale::acceptFromHttp](locale.acceptfromhttp.md)
- [Locale::composeLocale »](locale.composelocale.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Канонізувати рядок локалі

# Locale::canonicalize

#local_canonicalize

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::canonicalize -- locale_canonicalize — Канонізувати рядок
локалі

### Опис

public static **Locale::canonicalize**(string `$locale`): ?string

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`locale`

### Значення, що повертаються

Канонізований рядок локалі.

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.
