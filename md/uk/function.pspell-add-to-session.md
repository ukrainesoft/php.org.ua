- [« pspell_add_to_personal](function.pspell-add-to-personal.md)
- [pspell_check »](function.pspell-check.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Додає слово до списку слів у поточній сесії

#pspell_add_to_session

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_add_to_session — Додає слово до списку слів у поточній сесії

### Опис

**pspell_add_to_session**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`, string `$word`): bool

**pspell_add_to_session()** додає слово до списку слів,
асоційований із поточною сесією. Ця функція дуже схожа на функцію
[pspell_add_to_personal()](function.pspell-add-to-personal.md)

### Список параметрів

`dictionary`
Примірник [PSpell\Dictionary](class.pspell-dictionary.md).

`word`
Слово, що додається.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.1.0 | Параметр `dictionary` тепер очікує на екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
