- [«mb_encoding_aliases](function.mb-encoding-aliases.md)
- [mb_ereg_replace_callback »](function.mb-ereg-replace-callback.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Збіг з регулярним виразом для багатобайтового рядка

#mb_ereg_match

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_match — Збіг з регулярним виразом для багатобайтного
рядки

### Опис

**mb_ereg_match**(string `$pattern`, string `$string`, ?string
`$options` u003d **`null`**): bool

Збіг з регулярним виразом для багатобайтового рядка.

> **Примітка**: `pattern` зіставляється лише на початку `string`.

### Список параметрів

`pattern`
Регулярний вираз шаблон.

`string`
Оцінений рядок (string).

`options`
Опція пошуку. Детальніше дивіться
[mb_regex_set_options()](function.mb-regex-set-options.md).

### Значення, що повертаються

Повертає **`true`**, якщо `string` збігається з регулярним виразом
`pattern`, **`false`** - інакше.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---|
| 8.0.0 | `options` тепер припускає значення null. |

### Примітки

> **Примітка**:
>
> Для цієї функції буде використано внутрішнє кодування або
> кодування, встановлене функцією
> [mb_regex_encoding()](function.mb-regex-encoding.md).

### Дивіться також

- [mb_regex_encoding()](function.mb-regex-encoding.md) -
Встановлює/отримує поточне кодування для багатобайтового
регулярного вираження
- [mb_ereg()](function.mb-ereg.md) - Збіг з регулярним
виразом з підтримкою багатобайтових кодувань
