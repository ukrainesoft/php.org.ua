- [« pspell_config_data_dir](function.pspell-config-data-dir.md)
- [pspell_config_ignore »](function.pspell-config-ignore.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Розташування основного списку слів

#pspell_config_dict_dir

(PHP 5, PHP 7, PHP 8)

pspell_config_dict_dir — Розташування основного списку слів

### Опис

**pspell_config_dict_dir**([PSpell\Config](class.pspell-config.md)
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
