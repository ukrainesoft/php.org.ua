- [« pspell_config_repl](function.pspell-config-repl.md)
- [pspell_config_save_repl »](function.pspell-config-save-repl.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- розглядає об'єднані слова як правильні складні слова

#pspell_config_runtogether

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_runtogether — Розглядає об'єднані слова як
правильні складні слова

### Опис

**pspell_config_runtogether**([PSpell\Config](class.pspell-config.md)
`$config`, bool `$allow`): bool

Функція визначає, чи будуть об'єднані слова розглядатися як
правильні складні слова. Так, thecat буде вважатися правильним
складним словом, хоча між артиклем і словом має бути пробіл.
Зміна цієї установки впливає лише на результати, що повертаються
функцією [pspell_check()](function.pspell-check.md);
[pspell_suggest()](function.pspell-suggest.md) буде продовжувати
видавати варіанти виправлення.

**pspell_config_runtogether()** має бути використана для
конфігурації до дзвінка
[pspell_new_config()](function.pspell-new-config.md).

### Список параметрів

`config`
Примірник [PSpell\Config](class.pspell-config.md).

`allow`
**`true`**, якщо об'єднані слова повинні розглядатися як
правильні складні слова, **`false`** інакше.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_config_runtogether()****

` <?php$pspell_config u003d pspell_config_create("en");pspell_config_runtogether($pspell_config, true);$pspell u003d pspell_new_config($pspell_config);pspell_check($pspell, >"
