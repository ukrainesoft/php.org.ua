- [« fann_get_connection_rate](function.fann-get-connection-rate.md)
- [fann_get_errstr »](function.fann-get-errstr.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає останній номер помилки

# fann_get_errno

(PECL fann u003d 1.0.0)

fann_get_errno — Повертає останній номер помилки

### Опис

**fann_get_errno**(resource `$errdat`): int

Повертає останній номер помилки.

### Список параметрів

`errdat`
Або ресурс (resource) нейронної мережі, або ресурс (resource) учнів
даних нейронної мережі.

### Значення, що повертаються

Номер помилки або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_reset_errno()](function.fann-reset-errno.md) - Скидає
номер останньої помилки
- [fann_get_errstr()](function.fann-get-errstr.md) - Повертає
останній рядок помилки
