- [« fann_get_errno](function.fann-get-errno.md)
- [fann_get_layer_array »](function.fann-get-layer-array.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає останній рядок помилки

# fann_get_errstr

(PECL fann u003d 1.0.0)

fann_get_errstr — Повертає останній рядок помилки

### Опис

**fann_get_errstr**(resource `$errdat`): string

Повертає останній рядок помилки.

### Список параметрів

`errdat`
Або ресурс (resource) нейронної мережі, або ресурс (resource) учнів
даних нейронної мережі.

### Значення, що повертаються

Останній рядок помилки або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_reset_errstr()](function.fann-reset-errstr.md) - Скидає
останній рядок помилки
- [fann_get_errno()](function.fann-get-errno.md) - Повертає
останній номер помилки
