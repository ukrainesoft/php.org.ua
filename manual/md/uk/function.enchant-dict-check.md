- [«enchant_dict_add](function.enchant-dict-add.md)
- [enchant_dict_describe »] (function.enchant-dict-describe.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Перевіряє, чи правильно задано слово

#enchant_dict_check

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_dict_check — Перевіряє, чи правильно задано слово

### Опис

**enchant_dict_check**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$word`): bool

Повертає **`true`**, якщо слово написано без помилок або **`false`**,
якщо з помилками.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`word`
Слово для перевірки

### Значення, що повертаються

Повертає **`true`**, якщо слово написано без помилок або **`false`**,
якщо з помилками.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
