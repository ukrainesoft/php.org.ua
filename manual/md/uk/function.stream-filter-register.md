- [«stream_filter_prepend](function.stream-filter-prepend.md)
- [stream_filter_remove »](function.stream-filter-remove.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Реєструє потоковий фільтр, визначений користувачем

#stream_filter_register

(PHP 5, PHP 7, PHP 8)

stream_filter_register — реєструє потоковий фільтр, визначений
користувачем

### Опис

**stream_filter_register**(string `$filter_name`, string `$class`): bool

**stream_filter_register()** дозволяє вам реалізувати власний
фільтр для будь-якого зареєстрованого потоку, що використовується з усіма
іншими функціями файлової системи (такі як
[fopen()](function.fopen.md), [fread()](function.fread.md) тощо.

### Список параметрів

`filter_name`
Назва фільтру, що реєструється.

`class`
Щоб реалізувати фільтр, вам потрібно визначити клас як розширення
[php_user_filter](class.php-user-filter.md) з цілим рядом
функцій-членів. При виконанні операцій читання/запису на потоці,
якому прикріплений ваш фільтр, PHP передаватиме дані через ваш
фільтр (і через будь-які інші фільтри, прикріплені до потоку), так що
дані можуть бути змінені як потрібно. Вам необхідно реалізувати
методи точно як описано в
[php_user_filter](class.php-user-filter.md). Інша реалізація приведе
до непередбачуваної поведінки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**stream_filter_register()** повертатиме **`false`**, якщо фільтр з
ім'ям `filter_name` вже визначено.

### Приклади

**Приклад #1 Фільтр для перекладу літер у верхній регістр у потоці
`foo-bar.txt`**

Приклад нижче реалізує фільтр під назвою `strtoupper` на файловому потоці
`foo-bar.txt`, який перекладатиме у великі всі літери, які
пишуться/читаються із цього потоку.

` <?php/* Определяем наш класс фильтра */class strtoupper_filter extends php_user_filter {  function filter($in, $out, &$consumed, $closing)  {    while ($bucket u003d stream_bucket_make_writeable($in)) {      $bucket-> data u003d strtoupper($bucket->data); $consumed +u003d $bucket->datalen; stream_bucket_append($out, $bucket); }   return PSFS_PASS_ON; }}/* Реєструємо наш фільтр в  PHP */stream_filter_register("strtoupper", "strtoupper_filter")   or die("Не удалося зареєструвати фільтр");$fp u003d|t| /* Приєднуємо зареєстрований фільтр к тільки що відкритому потоку */stream_filter_append($fp, "strtoupper");fwrite($fp, "Line1
");fwrite($fp, "Word - 2
");fwrite($fp, "Easy As 123
");fclose($fp);/* Читаємо вміст знову*/readfile("foo-bar.txt");?> `

Результат виконання цього прикладу:

LINE1
WORD - 2
EASY AS 123

**Приклад #2 Реєстрація стандартного фільтра, що відповідає
множинним іменам фільтрів.

` <?php/* Визначаємо наш клас фільтра */class string_filter extends php_user_filter { var $mode; function filter($in, $out, &$consumed, $closing) {     while ($bucket u003d stream_bucket_make_writeable($in)) {                                br| bucket->data); } elseif ($this->mode u003du003d 0) {        $bucket->data u003d strtolower($bucket->data); }     $consumed +u003d $bucket->datalen; stream_bucket_append($out, $bucket); }   return PSFS_PASS_ON; }  function onCreate() | {    if ($this->filtername u003du003d 'str.toupper') {      $this->mode u003d 1; } elseif ($this->filtername u003du003d 'str.tolower') {      $this->mode u003d 0; } else {      /* Було викликаний якийсь інший фільтр str.*,          повертаємо помилку, щого fHP мог       }   return true; }}/* Реєструємо наш фільтр в  PHP */stream_filter_register("str.*", "string_filter")   or die("Не удалося зареєструвати фільтр");$fp u003d"fo| );/* Приєднуємо зареєстрований фільтр к тільки що відкритому потоку   Ми могли би використовувати тут  str.tolower */stream_filter_append($fp, $;
");fwrite($fp, "Word - 2
");fwrite($fp, "Easy As 123
");fclose($fp);/* Читаємо вміст знову*/readfile("foo-bar.txt");?> `

Результат виконання цього прикладу:

LINE1
WORD - 2
EASY AS 123

### Дивіться також

- [stream_wrapper_register()](function.stream-wrapper-register.md) -
Реєструє обгортку URL, реалізовану у вигляді PHP-класу
- [stream_filter_append()](function.stream-filter-append.md) -
Прикріпити фільтр до потоку
- [stream_filter_prepend()](function.stream-filter-prepend.md) -
Прикріплює фільтр до потоку
