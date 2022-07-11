- [«
enchant_broker_list_dicts](function.enchant-broker-list-dicts.md)
- [enchant_broker_request_pwl_dict
»](function.enchant-broker-request-pwl-dict.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Створити новий словник, використовуючи тег

#enchant_broker_request_dict

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_request_dict — Створити новий словник, використовуючи тег

### Опис

**enchant_broker_request_dict**([EnchantBroker](class.enchantbroker.md)
`$broker`, string `$tag`):
[EnchantDictionary](class.enchantdictionary.md)\|false

Створює новий словник, використовуючи не порожній мовний тег ("en_US",
"ru_RU", ...)

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

`tag`
Тег опису локалі, наприклад en_US, ru_RU

### Значення, що повертаються

Повертає ресурс словника у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **enchant_broker_request_dict()****

Перевіряємо, чи існує словник за допомогою
[enchant_broker_dict_exists()](function.enchant-broker-dict-exists.md)
і, потім, просимо його.

` <?php$tag u003d 'en_US';$broker u003d enchant_broker_init();if (enchant_broker_dict_exists($broker,$tag)) {   $dict u003d enchant_broker_request_dict$$;;

### Дивіться також

- [enchant_dict_describe()](function.enchant-dict-describe.md) -
Повертає інформацію про словник
- [enchant_broker_dict_exists()](function.enchant-broker-dict-exists.md) -
Перевіряє, чи є словник чи ні. Використовується не порожній
тег
- [enchant_broker_free_dict()](function.enchant-broker-free-dict.md) -
Визволяє ресурс словника
