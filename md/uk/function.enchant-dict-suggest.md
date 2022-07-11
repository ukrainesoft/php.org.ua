- [«
enchant_dict_store_replacement](function.enchant-dict-store-replacement.md)
- [EnchantBroker »](class.enchantbroker.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Поверне список можливих варіантів для слова з помилкою

#enchant_dict_suggest

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_dict_suggest — Поверне список можливих варіантів для слова з
помилкою

### Опис

**enchant_dict_suggest**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$word`): array

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`word`
Слово для перевірки.

### Значення, що повертаються

Поверне масив припущень для заданого помилкою слова.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **enchant_dict_suggest()****

` <?php$tag u003d 'en_US';$r u003d enchant_broker_init();if (enchant_broker_dict_exists($r,$tag)) {   $d u003d enchant_broker_request_dict($r, $ $wordcorrectu003du003denchant_dict_check($d, "soong"); if (!$wordcorrect) {        $suggs u003d enchant_dict_suggest($d, "soong"); echo "Подказки для 'soong':"; print_r($suggs); }    enchant_broker_free_dict($d);}enchant_broker_free($r);?> `

### Дивіться також

- [enchant_dict_check()](function.enchant-dict-check.md) -
Перевіряє, чи правильно задано слово
- [enchant_dict_quick_check()](function.enchant-dict-quick-check.md) -
Перевірити, чи правильно написано слово та запропонувати варіанти заміни
