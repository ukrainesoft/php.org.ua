- [«enchant_broker_init](function.enchant-broker-init.md)
- [enchant_broker_request_dict
»](function.enchant-broker-request-dict.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Повертає список доступних словників

#enchant_broker_list_dicts

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL enchant u003d 1.0.1)

enchant_broker_list_dicts — Повертає список доступних словників

### Опис

**enchant_broker_list_dicts**([EnchantBroker](class.enchantbroker.md)
`$broker`): array

Повертає список доступних словників.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

### Значення, що повертаються

Повертає масив (array) доступних словників зі своїми даними.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | До цієї версії функція повертала **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Список усіх доступних на брокері словників**

` <?php$r u003d enchant_broker_init();$dicts u003d enchant_broker_list_dicts($r);print_r($dicts);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[lang_tag] u003d> de
[provider_name] u003d> aspell
[provider_desc] u003d> Aspell Provider
[provider_file] u003d> /usr/lib/enchant/libenchant_aspell.so
)

[1] u003d> Array
(
[lang_tag] u003d> de_DE
[provider_name] u003d> aspell
[provider_desc] u003d> Aspell Provider
[provider_file] u003d> /usr/lib/enchant/libenchant_aspell.so
)

[3] u003d> Array
(
[lang_tag] u003d> en
[provider_name] u003d> aspell
[provider_desc] u003d> Aspell Provider
[provider_file] u003d> /usr/lib/enchant/libenchant_aspell.so
)

[4] u003d> Array
(
[lang_tag] u003d> en_GB
[provider_name] u003d> aspell
[provider_desc] u003d> Aspell Provider
[provider_file] u003d> /usr/lib/enchant/libenchant_aspell.so
)

[5] u003d> Array
(
[lang_tag] u003d> en_US
[provider_name] u003d> aspell
[provider_desc] u003d> Aspell Provider
[provider_file] u003d> /usr/lib/enchant/libenchant_aspell.so
)

[6] u003d> Array
(
[lang_tag] u003d> hi_IN
[provider_name] u003d> myspell
[provider_desc] u003d> Myspell Provider
[provider_file] u003d> /usr/lib/enchant/libenchant_myspell.so
)

)

### Дивіться також

- [enchant_broker_describe()](function.enchant-broker-describe.md) -
Перелічує провайдерів Enchant
