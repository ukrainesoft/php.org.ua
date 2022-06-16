- [«
enchant_dict_is_in_session](function.enchant-dict-is-in-session.md)
- [enchant_dict_store_replacement
»](function.enchant-dict-store-replacement.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Перевірити, чи правильно написано слово та запропонувати варіанти заміни

#enchant_dict_quick_check

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant:0.2.0-1.0.1)

enchant_dict_quick_check — Перевірити, чи правильно написано слово та
запропонувати варіанти заміни

### Опис

**enchant_dict_quick_check**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$word`, array `&$suggestions` u003d **`null`**): bool

Якщо слово коректне, то поверне **`true`**, інакше поверне
**`false`**. Якщо заданий параметр suggestions, він буде заповнено
варіантами заміни.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`word`
Слово для перевірки

`suggestions`
Якщо перевірка провалилася, то ця змінна міститиме масив
варіантами заміни

### Значення, що повертаються

Повертає **`true`**, якщо слово написано правильно або **`false`**,
якщо ні

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **enchant_dict_quick_check()****

` <?php$tag u003d 'en_US';$r u003d enchant_broker_init();if (enchant_broker_dict_exists($r,$tag)) {   $d u003d enchant_broker_request_dict($r, $ enchant_dict_quick_check($d, 'soong', $suggs); print_r($suggs);}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> song
[1] u003d> snog
[2] u003d> soon
[3] u003d> Sang
[4] u003d> Sung
[5] u003d> sang
[6] u003d> sung
[7] u003d> sponge
[8] u003d> spongy
[9] u003d> snag
[10] u003d> snug
[11] u003d> sonic
[12] u003d> sing
[13] u003d> songs
[14] u003d> Son
[15] u003d> Sonja
[16] u003d> Synge
[17] u003d> son
[18] u003d> Sejong
[19] u003d> sarong
[20] u003d> sooner
[21] u003d> Sony
[22] u003d> sown
[23] u003d> scone
[24] u003d> song's
)

### Дивіться також

- [enchant_dict_check()](function.enchant-dict-check.md) -
Перевіряє, чи правильно задано слово
- [enchant_dict_suggest()](function.enchant-dict-suggest.md) -
Поверне список можливих варіантів для слова з помилкою
