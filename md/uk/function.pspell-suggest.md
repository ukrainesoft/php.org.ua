- [« pspell_store_replacement](function.pspell-store-replacement.md)
- [PSpell\Dictionary »](class.pspell-dictionary.md)

- [PHP Manual](index.md)
- [Функції Pspell](ref.pspell.md)
- Пропонує варіанти виправлення слова

#pspell_suggest

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_suggest — Пропонує варіанти виправлення слова

### Опис

**pspell_suggest**([PSpell\Dictionary](class.pspell-dictionary.md)
`$dictionary`, string `$word`): array\|false

**pspell_suggest()** повертає масив можливих варіантів виправлення
заданого слова.

### Список параметрів

`dictionary`
Примірник [PSpell\Dictionary](class.pspell-dictionary.md).

`word`
Перевірене слово.

### Значення, що повертаються

Повертає масив можливих варіантів виправлення.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.1.0 | Параметр `dictionary` тепер очікує на екземпляр [PSpell\Dictionary](class.pspell-dictionary.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pspell_suggest()****

` <?php$pspell u003d pspell_new("en");if (!pspell_check($pspell, "testt")) {   $suggestionsu003du003dpspell_suggest($pspell, "testt"); foreach ($suggestions as $suggestion) {        echo "Можливий варіант виправлення: $suggestion<br />"; }}?> `
