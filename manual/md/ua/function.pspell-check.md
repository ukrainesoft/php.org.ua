- [« pspell_add_to_session](function.pspell-add-to-session.md)
- [pspell_clear_session »](function.pspell-clear-session.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Перевіряє слово

#pspell_check

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_check — Перевіряє слово

### Опис

**pspell_check**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`, string `$word`): bool

**pspell_check()** перевіряє орфографію слова.

### Список параметрів

`dictionary`
Примірник [PSpell\Dictionary](class.pspell-dictionary.md).

`word`
Перевірене слово.

### Значення, що повертаються

Повертає **`true`**, якщо орфографія вірна, інакше
повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.1.0 | Параметр `dictionary` тепер очікує на екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_check()****

` <?php$pspell u003d pspell_new("en");if (pspell_check($pspell, "testt")) {    echo "Це вірне написання";} else { на   
