- [«
enchant_broker_set_dict_path](function.enchant-broker-set-dict-path.md)
- [enchant_dict_add_to_personal
»](function.enchant-dict-add-to-personal.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Задати переваги вибору словників для мови

#enchant_broker_set_ordering

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_broker_set_ordering — Задати перевагу словникам для вибору
мови

### Опис

**enchant_broker_set_ordering**([EnchantBroker](class.enchantbroker.md)
`$broker`, string `$tag`, string `$ordering`): bool

Вибирає словники для мови, описані за допомогою
тега 'tag'. Порядок задається за допомогою списку імен провайдерів,
розділених комами. В окремих випадках можна використовувати тег "\*" для
визначення порядку для всіх мов, для яких цей порядок не
задається явно.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

`tag`
Мовний тег. В окремих випадках можна використовувати тег "\*" для
визначення порядку для всіх мов, для яких цей порядок не
задається явно.

`ordering`
Список імен провайдерів, розділених комами

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
