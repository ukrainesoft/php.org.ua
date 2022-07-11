- [«enchant_broker_get_error](function.enchant-broker-get-error.md)
- [enchant_broker_list_dicts
»](function.enchant-broker-list-dicts.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Створити новий об'єкт брокера

#enchant_broker_init

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_init — Створити новий об'єкт брокера

### Опис

**enchant_broker_init**():
[EnchantBroker](class.enchantbroker.md)\|false

### Список параметрів

### Значення, що повертаються

Повертає ресурс брокера або **`false`**, якщо виникла помилка.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------|
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше повертався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [enchant_broker_free()](function.enchant-broker-free.md) -
Звільняє ресурс брокера та його словники
