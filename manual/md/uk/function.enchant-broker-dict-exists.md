- [«enchant_broker_describe](function.enchant-broker-describe.md)
- [enchant_broker_free_dict »](function.enchant-broker-free-dict.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Перевіряє, чи присутній словник чи ні. Використовується не порожній
тег

#enchant_broker_dict_exists

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_dict_exists — Перевіряє, чи присутній словник.
Використовується не пустий тег

### Опис

**enchant_broker_dict_exists**([EnchantBroker](class.enchantbroker.md)
`$broker`, string `$tag`): bool

Перевіряє, присутній словник чи ні використовуючи не порожній тег

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

`tag`
Не порожній тег у форматі LOCALE, тобто us_US, ch_DE і т.д.

### Значення, що повертаються

Повертає **`true`** або **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **enchant_broker_dict_exists()****

` <?php$tag u003d 'en_US';$r u003d enchant_broker_init();if (enchant_broker_dict_exists($r,$tag)) {   echo $tag . "Словник" знайдений.
";}?> `

### Дивіться також

- [enchant_broker_describe()](function.enchant-broker-describe.md) -
Перелічує провайдерів Enchant
