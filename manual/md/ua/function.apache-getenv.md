- [« apache_get_version](function.apache-get-version.md)
- [apache_lookup_uri »](function.apache-lookup-uri.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Повертає змінну оточення підпроцесу сервера Apache

#apache_getenv

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

apache_getenv — Повертає змінну оточення підпроцесу сервера
Apache

### Опис

**apache_getenv**(string `$variable`, bool `$walk_to_top` u003d
**`false`**): string\|false

Повертає змінну оточення сервера Apache, вказану параметром
`variable`.

### Список параметрів

`variable`
Змінне оточення сервера Apache

`walk_to_top`
Отримати змінну верхнього рівня, доступну для всіх рівнів сервера
Apache чи ні.

### Значення, що повертаються

Значення змінної оточення сервера Apache у разі успішного
виконання, або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **apache_getenv()****

Нижче наведений приклад показує, як можна отримати значення
змінної оточення сервера Apache `SERVER_ADDR`.

` <?php$ret u003d apache_getenv("SERVER_ADDR");echo $ret;?> `

Результатом виконання цього прикладу буде щось подібне:

42.24.42.240

### Дивіться також

- [apache_setenv()](function.apache-setenv.md) - Встановлює
змінну subprocess_env Apache
- [getenv()](function.getenv.md) - Отримання значення змінної
оточення
- "[Суперглобальні змінні](language.variables.superglobals.md)"
