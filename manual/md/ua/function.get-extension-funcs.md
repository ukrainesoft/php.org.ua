- [«get_defined_constants](function.get-defined-constants.md)
- [get_include_path »](function.get-include-path.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає масив імен функцій модуля

#get_extension_funcs

(PHP 4, PHP 5, PHP 7, PHP 8)

get_extension_funcs — Повертає масив імен функцій модуля

### Опис

**get_extension_funcs**(string `$extension`): array\|false

Функція повертає імена всіх функцій, визначених у модулі з ім'ям
`extension`.

### Список параметрів

`extension`
Ім'я модуль.

> **Примітка**:
>
> Значення цього аргументу слід задавати в *нижньому регістрі*.

### Значення, що повертаються

Повертає масив імен функцій або **`false`**, якщо `extension` не
є допустимим модулем.

### Приклади

**Приклад #1 Виводить функції XML**

` <?phpprint_r(get_extension_funcs("xml"));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> xml_parser_create
[1] u003d> xml_parser_create_ns
[2] u003d> xml_set_object
[3] u003d> xml_set_element_handler
[4] u003d> xml_set_character_data_handler
[5] u003d> xml_set_processing_instruction_handler
[6] u003d> xml_set_default_handler
[7] u003d> xml_set_unparsed_entity_decl_handler
[8] u003d> xml_set_notation_decl_handler
[9] u003d> xml_set_external_entity_ref_handler
[10] u003d> xml_set_start_namespace_decl_handler
[11] u003d> xml_set_end_namespace_decl_handler
[12] u003d> xml_parse
[13] u003d> xml_parse_into_struct
[14] u003d> xml_get_error_code
[15] u003d> xml_error_string
[16] u003d> xml_get_current_line_number
[17] u003d> xml_get_current_column_number
[18] u003d> xml_get_current_byte_index
[19] u003d> xml_parser_free
[20] u003d> xml_parser_set_option
[21] u003d> xml_parser_get_option
)

### Дивіться також

- [get_loaded_extensions()](function.get-loaded-extensions.md) -
Повертає масив імен усіх скомпілованих та завантажених модулів
- [ReflectionExtension::getFunctions()](reflectionextension.getfunctions.md) -
Отримання функцій модуля
