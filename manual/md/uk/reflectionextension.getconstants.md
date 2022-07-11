- [«
ReflectionExtension::getClassNames](reflectionextension.getclassnames.md)
- [ReflectionExtension::getDependencies
»](reflectionextension.getdependencies.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Отримання констант

# ReflectionExtension::getConstants

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getConstants — Отримання констант

### Опис

public **ReflectionExtension::getConstants**(): array

Отримує певні модулі константи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив з іменами констант як ключі.

### Приклади

**Приклад #1 Приклад використання
**ReflectionExtension::getConstants()****

` <?php$ext u003d new ReflectionExtension('DOM');print_r($ext->getConstants());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[XML_ELEMENT_NODE] u003d> 1
[XML_ATTRIBUTE_NODE] u003d> 2
[XML_TEXT_NODE] u003d> 3
[XML_CDATA_SECTION_NODE] u003d> 4
[XML_ENTITY_REF_NODE] u003d> 5
[XML_ENTITY_NODE] u003d> 6
[XML_PI_NODE] u003d> 7
[XML_COMMENT_NODE] u003d> 8
[XML_DOCUMENT_NODE] u003d> 9
[XML_DOCUMENT_TYPE_NODE] u003d> 10
[XML_DOCUMENT_FRAG_NODE] u003d> 11
[XML_NOTATION_NODE] u003d> 12
[XML_HTML_DOCUMENT_NODE] u003d> 13
[XML_DTD_NODE] u003d> 14
[XML_ELEMENT_DECL_NODE] u003d> 15
[XML_ATTRIBUTE_DECL_NODE] u003d> 16
[XML_ENTITY_DECL_NODE] u003d> 17
[XML_NAMESPACE_DECL_NODE] u003d> 18
[XML_LOCAL_NAMESPACE] u003d> 18
[XML_ATTRIBUTE_CDATA] u003d> 1
[XML_ATTRIBUTE_ID] u003d> 2
[XML_ATTRIBUTE_IDREF] u003d> 3
[XML_ATTRIBUTE_IDREFS] u003d> 4
[XML_ATTRIBUTE_ENTITY] u003d> 6
[XML_ATTRIBUTE_NMTOKEN] u003d> 7
[XML_ATTRIBUTE_NMTOKENS] u003d> 8
[XML_ATTRIBUTE_ENUMERATION] u003d> 9
[XML_ATTRIBUTE_NOTATION] u003d> 10
[DOM_PHP_ERR] u003d> 0
[DOM_INDEX_SIZE_ERR] u003d> 1
[DOMSTRING_SIZE_ERR] u003d> 2
[DOM_HIERARCHY_REQUEST_ERR] u003d> 3
[DOM_WRONG_DOCUMENT_ERR] u003d> 4
[DOM_INVALID_CHARACTER_ERR] u003d> 5
[DOM_NO_DATA_ALLOWED_ERR] u003d> 6
[DOM_NO_MODIFICATION_ALLOWED_ERR] u003d> 7
[DOM_NOT_FOUND_ERR] u003d> 8
[DOM_NOT_SUPPORTED_ERR] u003d> 9
[DOM_INUSE_ATTRIBUTE_ERR] u003d> 10
[DOM_INVALID_STATE_ERR] u003d> 11
[DOM_SYNTAX_ERR] u003d> 12
[DOM_INVALID_MODIFICATION_ERR] u003d> 13
[DOM_NAMESPACE_ERR] u003d> 14
[DOM_INVALID_ACCESS_ERR] u003d> 15
[DOM_VALIDATION_ERR] u003d> 16
)

### Дивіться також

- [ReflectionExtension::getINIEntries()](reflectionextension.getinientries.md) -
Отримання ini-налаштувань модуля
