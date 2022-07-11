- [«enchant_dict_describe](function.enchant-dict-describe.md)
- [enchant_dict_is_added »](function.enchant-dict-is-added.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Повертає останню помилку поточної сесії перевірки

#enchant_dict_get_error

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_dict_get_error — Повертає останню помилку поточної сесії
перевірки

### Опис

**enchant_dict_get_error**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`): string\|false

Повертає останню помилку поточної сесії перевірки.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

### Значення, що повертаються

Повертає рядок з помилкою або **`false`**, якщо такого немає.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
