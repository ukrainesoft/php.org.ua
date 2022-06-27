- [«
pspell_config_runtogether](function.pspell-config-runtogether.md)
- [pspell_new_config »](function.pspell-new-config.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Визначає, чи зберігати список пар, що замінюють, разом зі списком
слів

#pspell_config_save_repl

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_save_repl — Визначає, чи зберігати список заміщувальних пар
разом зі списком слів

### Опис

**pspell_config_save_repl**([PSpell\Config](class.pspell-config.md)
`$config`, bool `$save`): bool

**pspell_config_save_repl()** визначає, чи буде
[pspell_save_wordlist()](function.pspell-save-wordlist.md) зберігати
заміщують пари разом зі списком слів. Зазвичай немає потреби
використовувати цю функцію, оскільки, якщо використовується
[pspell_config_repl()](function.pspell-config-repl.md), що замінюють
пари будуть збережені
[pspell_save_wordlist()](function.pspell-save-wordlist.md) у будь-якому
випадку, і, якщо вона не використовується, заміщувальні пари не будуть
зберігатись.

**pspell_config_save_repl()** має бути використана для конфігурації
до дзвінка [pspell_new_config()](function.pspell-new-config.md).

### Список параметрів

`config`
Примірник [PSpell\Config](class.pspell-config.md).

`save`
**`true`**, якщо заміщувальні пари повинні зберігатися, **`false`** в
інакше.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.1.0 | Параметр `config` тепер чекає на екземпляр [PSpell\Config](class.pspell-config.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Примітки

> **Примітка**:
>
> Функція не працюватиме, якщо у вас немає pspell .11.2 та aspell .32.5
> або вище.
