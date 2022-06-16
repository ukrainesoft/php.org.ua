- [« stream_supports_lock](function.stream-supports-lock.md)
- [stream_wrapper_restore »](function.stream-wrapper-restore.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- реєструє обгортку URL, реалізовану у вигляді PHP-класу

#stream_wrapper_register

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

stream_wrapper_register — Реєструє обгортку URL, реалізовану як
PHP-класу

### Опис

**stream_wrapper_register**(string `$protocol`, string `$class`, int
$flags u003d 0): bool

Дозволяє вам реалізувати ваші власні обробники протоколів та
потоків для використання з усіма іншими функціями файлової системи
(такі як [fopen()](function.fopen.md),
[fread()](function.fread.md) та ін.).

### Список параметрів

`protocol`
Назва обертки, що реєструється. Допустимі імена протоколів повинні
містити лише літери, цифри, точки (.), плюси (+) або дефіси (-).

`class`
Назва класу, що реалізує протокол 'protocol'.

`flags`
Потрібно встановити в **`STREAM_IS_URL`**, якщо параметр `protocol`
є протоколом URL. Типово 0, локальний потік.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**stream_wrapper_register()** повертатиме **`false`**, якщо
протокол `protocol` вже має обробник.

### Приклади

**Приклад #1 Як зареєструвати обгортку потоку**

` <?php$existed u003d in_array("var", stream_get_wrappers());if ($existed) {    stream_wrapper_unregister("var");}stream_wrapper_register("var", "VariableStream"$| fpu003du003dfopen("var://myvar", "r+");fwrite($fp, "line1
");fwrite($fp, "line2
");fwrite($fp, "line3
"); rewind ($ fp); );}?> `

Результат виконання цього прикладу:

line1
line2
line3
string(18) "line1
line2
line3
"

### Дивіться також

- Клас-прототип [streamWrapper](class.streamwrapper.md)
- [Приклад класу, зареєстрованого як обгортка
потоку](stream.streamwrapper.example-1.md)
- [stream_wrapper_unregister()](function.stream-wrapper-unregister.md) -
Скасує реєстрацію обгортки URL
- [stream_wrapper_restore()](function.stream-wrapper-restore.md) -
Відновлює скасовану раніше вбудовану обгортку
- [stream_get_wrappers()](function.stream-get-wrappers.md) -
Отримати список зареєстрованих потоків
