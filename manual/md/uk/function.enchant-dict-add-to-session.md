- [«
enchant_dict_add_to_personal](function.enchant-dict-add-to-personal.md)
- [enchant_dict_add »](function.enchant-dict-add.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Додати слово до поточної сесії перевірки

#enchant_dict_add_to_session

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_dict_add_to_session — Додати слово до поточної сесії перевірки

### Опис

**enchant_dict_add_to_session**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$word`): void

Додає слово до заданого словника. Слово буде присутній тільки в
поточної сесії перевірки.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`word`
Слово для додавання

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [enchant_broker_request_dict()](function.enchant-broker-request-dict.md) -
Створити новий словник, використовуючи тег
