- [« enchant_dict_quick_check](function.enchant-dict-quick-check.md)
- [enchant_dict_suggest »] (function.enchant-dict-suggest.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Додати виправлення для слова

#enchant_dict_store_replacement

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_dict_store_replacement — Додати виправлення для слова

### Опис

**enchant_dict_store_replacement**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$misspelled`, string `$correct`): void

Додати виправлення 'cor' для 'mis'. Зверніть увагу, що якщо ви
замініть @mis на @cor, то в майбутньому входження @mis будуть замінюватися на
@cor. Відповідно це може підняти @cor вгору у списку можливих
замін.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`misspelled`
Слово для виправлення

`correct`
Коректне слово

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
