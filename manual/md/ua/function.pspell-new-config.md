- [« pspell_config_save_repl](function.pspell-config-save-repl.md)
- [pspell_new_personal »](function.pspell-new-personal.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Завантажує новий словник із установками на основі заданої
конфігурації

#pspell_new_config

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_new_config — Завантажує новий словник із установками на основі
заданої конфігурації

### Опис

**pspell_new_config**([PSpell\Config](class.pspell-config.md)
`$config`): [PSpell\Dictionary](class.pspell-dictionary.md)\|false

**pspell_new_config()** відкриває новий словник із параметрами, заданими
в `config`, створеній за допомогою
[pspell_config_create()](function.pspell-config-create.md) та
модифікованою за допомогою функцій **pspell_config\_\*()**. Цей метод
дає найбільшу гнучкість і має всі функціональні можливості,
надані [pspell_new()](function.pspell-new.md) та
[pspell_new_personal()](function.pspell-new-personal.md).

### Список параметрів

`config`
Параметр `config` - це параметр, повернутий функцією
[pspell_config_create()](function.pspell-config-create.md) після того,
як конфігурація була створена.

### Значення, що повертаються

Повертає екземпляр [PSpell\Dictionary](class.pspell-dictionary.md)
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_new_config()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");pspell_config_repl($pspell_config, "/var/dictionaries/custom. u003d pspell_new_config($pspell_config);?> `
