- [« Функції Enchant](ref.enchant.md)
- [enchant_broker_dict_exists
»](function.enchant-broker-dict-exists.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Перераховує провайдерів Enchant

#enchant_broker_describe

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0)

enchant_broker_describe - Перераховує провайдерів Enchant

### Опис

**enchant_broker_describe**([EnchantBroker](class.enchantbroker.md)
`$broker`): array

Перераховує провайдерів Enchant та повертає мінімальну інформацію про
них. Така сама інформація може бути отримана через phpinfo().

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

### Значення, що повертаються

Повертає масив доступних провайдерів Enchant з їх даними.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | До цієї версії функція повертала **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Список бекендів, що надаються конкретним брокером**

` <?php$r u003d enchant_broker_init();$bprovides u003d enchant_broker_describe($r);echo "Брокер надає наступні бекенди:
";print_r($bprovides);?> `

Результатом виконання цього прикладу буде щось подібне:

Брокер надає такі бекенди:
Array
(
[0] u003d> Array
(
[name] u003d> aspell
[desc] u003d> Aspell Provider
[file] u003d> /usr/lib/enchant/libenchant_aspell.so
)

[1] u003d> Array
(
[name] u003d> hspell
[desc] u003d> Hspell Provider
[file] u003d> /usr/lib/enchant/libenchant_hspell.so
)

[2] u003d> Array
(
[name] u003d> ispell
[desc] u003d> Ispell Provider
[file] u003d> /usr/lib/enchant/libenchant_ispell.so
)

[3] u003d> Array
(
[name] u003d> myspell
[desc] u003d> Myspell Provider
[file] u003d> /usr/lib/enchant/libenchant_myspell.so
)

)
