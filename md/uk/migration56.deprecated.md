- [« Нові можливості](migration56.new-features.md)
- [Змінені функції »](migration56.changed-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.5.x на PHP 5.6.x](migration56.md)
- Функціонал, оголошений застарілим у PHP 5.6.x

## Функціонал, оголошений застарілим у PHP 5.6.x

### Виклики з несумісного контексту

Методи, що викликаються з несумісного контексту, оголошені застарілими і
будуть викликати помилку рівня **`E_DEPRECATED`** замість **`E_STRICT`**. В
майбутніх версіях PHP підтримка цих дзвінків буде видалена.

Приклад такого виклику є:

` <?phpclass A {   function f() { echo get_class($this); }}class B {   function f() { A::f(); }}(new B)->f();?> `

Результат виконання цього прикладу:

Deprecated: Non-static method A::f() не може бути названий статичним, прийнятим $this from incompatible context in - on line 7
B

### `$HTTP_RAW_POST_DATA` та `always_populate_raw_post_data`

`always_populate_raw_post_data` тепер викликатиме помилку
**`E_DEPRECATED`**, якщо `$HTTP_RAW_POST_DATA` заповнено. Новий код
повинен використовувати
[`php://input`](wrappers.php.md#wrappers.php.input) замість
`$HTTP_RAW_POST_DATA`, який буде видалено у майбутніх версіях PHP. Ви
можете вибрати нову поведінку (у якій `$HTTP_RAW_POST_DATA` ніколи
не визначається, отже, **`E_DEPRECATED`** не буде генерувати
помилку) шляхом установки `always_populate_raw_post_data` в `-1`.

### Налаштування кодування [iconv](book.iconv.md) та [mbstring](book.mbstring.md)

Параметри конфігурації [iconv](book.iconv.md) та
[mbstring](book.mbstring.md), пов'язані з кодуванням, застаріли в
користь [`default_charset`](ini.core.md#ini.default-charset).
Застарілі опції:

-
[`iconv.input_encoding`](iconv.configuration.md#ini.iconv.input-encoding)
-
[`iconv.output_encoding`](iconv.configuration.md#ini.iconv.output-encoding)
-
[`iconv.internal_encoding`](iconv.configuration.md#ini.iconv.internal-encoding)
-
[`mbstring.http_input`](mbstring.configuration.md#ini.mbstring.http-input)
-
[`mbstring.http_output`](mbstring.configuration.md#ini.mbstring.http-output)
-
[`mbstring.internal_encoding`](mbstring.configuration.md#ini.mbstring.internal-encoding)
