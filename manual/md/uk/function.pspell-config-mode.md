- [« pspell_config_ignore](function.pspell-config-ignore.md)
- [pspell_config_personal »](function.pspell-config-personal.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Змінює режим кількості варіантів виправлення, що повертаються.

#pspell_config_mode

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_mode — Змінює режим кількості варіантів, що повертаються.
виправлення

### Опис

**pspell_config_mode**([PSpell\Config](class.pspell-config.md)
`$config`, int `$mode`): bool

**pspell_config_mode()** має бути використана для конфігурації до
виклику [pspell_new_config()](function.pspell-new-config.md). Ця
функція визначає, скільки варіантів виправлення буде повертати
функція [pspell_suggest()](function.pspell-suggest.md).

### Список параметрів

`config`
Примірник [PSpell\Config](class.pspell-config.md).

`mode`
Параметр mode - це режим, у якому працюватиме перевірка орфографії.
Доступно кілька режимів:

- **`PSPELL_FAST`** - Швидкий режим (найменше варіантів
виправлення)
- **`PSPELL_NORMAL`** - Нормальний режим (більше варіантів
виправлення)
- **`PSPELL_BAD_SPELLERS`** - Повільний режим (багато варіантів
виправлення)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_config_mode()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_mode($pspell_config, PSPELL_FAST);$pspell u003d pspell_new_config($pspell_config);pspell_check($pspell, >"
