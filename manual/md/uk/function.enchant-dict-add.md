- [«
enchant_dict_add_to_session](function.enchant-dict-add-to-session.md)
- [enchant_dict_check »] (function.enchant-dict-check.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Додає слово до особистого словника

#enchant_dict_add

(PHP 8)

enchant_dict_add — Додає слово до особистого словника

### Опис

**enchant_dict_add**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$word`): void

Додає слово до особистого словника.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`word`
Слово, яке потрібно додати

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

**Приклад #1 Додавання слова до PWL**

`<?php$filename u003d './my_word_list.pwl';$word u003d 'Supercalifragilisticexpialidocious';$broker u003d enchant_broker_init();$dict u003d enchant_broker_request_pwl_dict($dic enchant_broker_free($broker);?> `

### Дивіться також

- [enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md) -
Створити словник, використовуючи файл PWL
- [enchant_broker_request_dict()](function.enchant-broker-request-dict.md) -
Створити новий словник, використовуючи тег
