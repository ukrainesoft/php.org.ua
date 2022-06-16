- [«
stream_context_get_default](function.stream-context-get-default.md)
- [stream_context_get_params
»](function.stream-context-get-params.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Отримує опції для потоку/обгортки/контексту

#stream_context_get_options

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_get_options — Отримує опції для потоку/обгортки/контексту

### Опис

**stream_context_get_options**(resource `$stream_or_context`): array

Повертає масив опцій у зазначеному потоці чи контексті.

### Список параметрів

`stream_or_context`
Потік (stream) або контекст (context), у якого будуть отримані
налаштування

### Значення, що повертаються

Повертає асоціативний масив із опціями.

### Приклади

**Приклад #1 Приклад використання **stream_context_get_options()****

` <?php$params u003d array("method" u003d> "POST");stream_context_set_default(array("http" u003d> $params));var_dump(stream_context_get_options(stream_context_get_default()));?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
["http"]u003d>
array(1) {
["method"]u003d>
string(4) "POST"
}
}
