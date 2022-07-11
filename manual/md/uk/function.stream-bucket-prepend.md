- [«stream_bucket_new](function.stream-bucket-new.md)
- [stream_context_create »](function.stream-context-create.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Додати відро на початок бригади

#stream_bucket_prepend

(PHP 5, PHP 7, PHP 8)

stream_bucket_prepend — Додати відро на початок бригади

### Опис

**stream_bucket_prepend**(resource `$brigade`, object `$bucket`): void

Ця функція може використовуватися для додавання відра на початок бригади
відер. Зазвичай вона викликається з
[php_user_filter::filter()](php-user-filter.filter.md).

### Список параметрів

`brigade`
`brigade` - ресурс, що вказує на `бригаду вёдер`, що містить
один чи кілька об'єктів `bucket`.

`bucket`
Відро.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклади використання **stream_bucket_prepend()****

`<?phpclass foo extends php_user_filter {  protected $calls u003d 0; public function filter($in, $out, &$consumed, $closing) {    while ($bucket u003d stream_bucket_make_writeable($in)) {      $consumed if ($this->calls++ u003du003d 2) {         // Це відро знову з'явиться перед любим іншим відром. stream_bucket_prepend($in, $bucket); }    }   return PSFS_FEED_ME; }}stream_filter_register('test', 'foo');print  file_get_contents('php://filter/readu003dtest/resourceu003dfoo');?> `
