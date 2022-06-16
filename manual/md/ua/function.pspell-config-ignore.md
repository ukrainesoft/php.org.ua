- [« pspell_config_dict_dir](function.pspell-config-dict-dir.md)
- [pspell_config_mode »](function.pspell-config-mode.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Ігнорує слова довжиною менше N символів

#pspell_config_ignore

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_ignore — Ігнорує слова довжиною менше N символів

### Опис

**pspell_config_ignore**([PSpell\Config](class.pspell-config.md)
`$config`, int `$min_length`): bool

**pspell_config_ignore()** має бути використана для конфігурації до
виклику [pspell_new_config()](function.pspell-new-config.md). Ця
функція дозволяє пропускати короткі слова під час перевірки орфографії.

### Список параметрів

`config`
Примірник [PSpell\Config](class.pspell-config.md).

`min_length`
Слова довжиною менше 'min_length' символів будуть пропущені.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_config_ignore()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_ignore($pspell_config, 5);$pspell u003d pspell_new_config($pspell_config);pspell_check($pspell, "abcd") //Повідомлення про помилку не буде згенеровано?
