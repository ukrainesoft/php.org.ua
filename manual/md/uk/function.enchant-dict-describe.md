- [«enchant_dict_check](function.enchant-dict-check.md)
- [enchant_dict_get_error »](function.enchant-dict-get-error.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Повертає інформацію про словник

#enchant_dict_describe

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL enchant \>u003d 0.1.0 )

enchant_dict_describe — Повертає інформацію про словник

### Опис

**enchant_dict_describe**([EnchantDictionary](class.enchantdictionary.md)
`$dictionary`): array

Повертає інформацію про словник.

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
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `dictionary` чекає екземпляр [EnchantDictionary](class.enchantdictionary.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | До цієї версії функція повертала **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Приклад використання **enchant_dict_describe()****

Перевіримо, що словник є за допомогою
[enchant_broker_dict_exists()](function.enchant-broker-dict-exists.md)
та отримаємо інформацію про нього.

` <?php$tag u003d 'en_US';$broker u003d enchant_broker_init();if (enchant_broker_dict_exists($broker,$tag)) {   $dict u003d enchant_broker_request_dict$$,; $dict_details u003d enchant_dict_describe($dict); print_r($dict_details);}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[lang] u003d> en_US
[name] u003d> aspell
[desc] u003d> Aspell Provider
[file] u003d> /usr/lib/enchant/libenchant_aspell.so
)
