- [«
enchant_broker_get_dict_path](function.enchant-broker-get-dict-path.md)
- [enchant_broker_init »](function.enchant-broker-init.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Повертає останню помилку брокера

#enchant_broker_get_error

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_get_error — Повертає останню помилку брокера

### Опис

**enchant_broker_get_error**([EnchantBroker](class.enchantbroker.md)
`$broker`): string\|false

Повертає останню помилку, що виникла на брокері.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

### Значення, що повертаються

Повертає рядок з помилкою, якщо такий був, або **`false`**

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
