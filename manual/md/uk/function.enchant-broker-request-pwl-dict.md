- [«
enchant_broker_request_dict](function.enchant-broker-request-dict.md)
- [enchant_broker_set_dict_path
»](function.enchant-broker-set-dict-path.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Створити словник, використовуючи файл PWL

#enchant_broker_request_pwl_dict

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_request_pwl_dict — Створити словник, використовуючи файл PWL

### Опис

**enchant_broker_request_pwl_dict**([EnchantBroker](class.enchantbroker.md)
`$broker`, string `$filename`):
[EnchantDictionary](class.enchantdictionary.md)\|false

Створює словник, використовуючи файл PWL. Файл PWL - це файл користувача
зі словами, за одним словом на рядок.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

`filename`
Шлях до файлу PWL. Якщо файл відсутній, то буде створено новий з таким
ім'ям, якщо це можливо.

### Значення, що повертаються

Повертає ресурс словника у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше повертався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [enchant_dict_describe()](function.enchant-dict-describe.md) -
Повертає інформацію про словник
- [enchant_broker_dict_exists()](function.enchant-broker-dict-exists.md) -
Перевіряє, чи є словник чи ні. Використовується не порожній
тег
- [enchant_broker_free_dict()](function.enchant-broker-free-dict.md) -
Визволяє ресурс словника
