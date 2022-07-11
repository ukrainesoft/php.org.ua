- [« pspell_config_create](function.pspell-config-create.md)
- [pspell_config_dict_dir »] (function.pspell-config-dict-dir.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Розташування файлів з мовними даними

#pspell_config_data_dir

(PHP 5, PHP 7, PHP 8)

pspell_config_data_dir — Розташування файлів із мовними даними

### Опис

**pspell_config_data_dir**([PSpell\Config](class.pspell-config.md)
`$config`, string `$directory`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
