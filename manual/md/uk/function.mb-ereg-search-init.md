- [«mb_ereg_search_getregs](function.mb-ereg-search-getregs.md)
- [mb_ereg_search_pos »](function.mb-ereg-search-pos.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Ініціалізація пошуку відповідностей регулярному виразу
багатобайтовим рядком та текстом регулярного вираження

#mb_ereg_search_init

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_init — Ініціалізація пошуку відповідностей регулярному
виразу багатобайтовим рядком та текстом регулярного виразу

### Опис

**mb_ereg_search_init**(string `$string`, ?string `$pattern` u003d
**`null`**, ?string `$options` u003d **`null`**): bool

**mb_ereg_search_init()** задає значення параметрів `string` та
`pattern` для функцій регулярних виразів. Ці значення будуть
використовуватись у функціях
[mb_ereg_search()](function.mb-ereg-search.md),
[mb_ereg_search_pos()](function.mb-ereg-search-pos.md) та
[mb_ereg_search_regs()](function.mb-ereg-search-regs.md).

### Список параметрів

`string`
Рядок, у якому здійснюватиметься пошук відповідностей.

`pattern`
Шаблон, регулярний вираз.

`options`
Опція пошуку. Детальніше дивіться
[mb_regex_set_options()](function.mb-regex-set-options.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------|
| 8.0.0 | `pattern` та `options` тепер допускають значення null. |

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
- [mb_ereg_search_regs()](function.mb-ereg-search-regs.md) -
Повертає частину рядка, що збіглася з регулярним виразом.
