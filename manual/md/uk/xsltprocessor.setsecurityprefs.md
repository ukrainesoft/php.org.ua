- [« XSLTProcessor::setProfiling](xsltprocessor.setprofiling.md)
- [XSLTProcessor::transformToDoc »](xsltprocessor.transformtodoc.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Встановити налаштування безпеки

# XSLTProcessor::setSecurityPrefs

(PHP \>u003d 5.4.0, PHP 7, PHP 8)

XSLTProcessor::setSecurityPrefs — Встановити налаштування безпеки

### Опис

public **XSLTProcessor::setSecurityPrefs**(int `$preferences`): int

Встановлює налаштування безпеки.

### Список параметрів

`preferences`
Нові параметри безпеки. Бітова маска з:
**`XSL_SECPREF_READ_FILE`**, **`XSL_SECPREF_WRITE_FILE`**,
**`XSL_SECPREF_CREATE_DIRECTORY`**, **`XSL_SECPREF_READ_NETWORK`**,
**`XSL_SECPREF_WRITE_NETWORK`**. Або, альтернативно, можна передати
**`XSL_SECPREF_NONE`** або **`XSL_SECPREF_DEFAULT`**.

### Значення, що повертаються

Повертає старі параметри безпеки.
