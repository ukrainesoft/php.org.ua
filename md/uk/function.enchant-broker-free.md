- [«enchant_broker_free_dict](function.enchant-broker-free-dict.md)
- [enchant_broker_get_dict_path
»](function.enchant-broker-get-dict-path.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Звільняє ресурс брокера та його словники

#enchant_broker_free

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_free - Звільняє ресурс брокера та його словники

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**enchant_broker_free**([EnchantBroker](class.enchantbroker.md)
`$broker`): bool

Визволяє брокера з усіма його словниками. Починаючи з PHP 8.0.0,
рекомендується знищити об'єкт замість виклику цієї функції.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [enchant_broker_init()](function.enchant-broker-init.md) - Створити
новий об'єкт брокера
