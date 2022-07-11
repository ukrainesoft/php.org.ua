- [«
enchant_broker_dict_exists](function.enchant-broker-dict-exists.md)
- [enchant_broker_free »](function.enchant-broker-free.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Визволяє ресурс словника

#enchant_broker_free_dict

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_free_dict — Визволяє ресурс словника

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**enchant_broker_free_dict**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`): bool

Визволяє словник. Починаючи з PHP 8.0.0, рекомендується знищити
об'єкт замість виклику цієї функції.

### Список параметрів

`dictionary`
Словник Enchant, що повертається
[enchant_broker_request_dict()](function.enchant-broker-request-dict.md)
або
[enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 8.0.0 | `dictionary` очікує [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [enchant_broker_request_dict()](function.enchant-broker-request-dict.md) -
Створити новий словник, використовуючи тег
- [enchant_broker_request_pwl_dict()](function.enchant-broker-request-pwl-dict.md) -
Створити словник, використовуючи файл PWL
