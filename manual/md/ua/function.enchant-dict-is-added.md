- [«enchant_dict_get_error](function.enchant-dict-get-error.md)
- [enchant_dict_is_in_session
»](function.enchant-dict-is-in-session.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Визначає, чи існує слово у цій орфографічній сесії

#enchant_dict_is_added

(PHP 8)

enchant_dict_is_added — Визначає, чи існує слово в цьому
орфографічної сесії

### Опис

**enchant_dict_is_added**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`, string `$word`): bool

Визначає, чи існує слово в поточній сесії.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

`word`
Слово для пошуку

### Значення, що повертаються

Повертає **`true`**, якщо слово вже існує, інакше
повертає **`false`**

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [enchant_dict_add_to_session()](function.enchant-dict-add-to-session.md) -
Додати слово до поточної сесії перевірки
