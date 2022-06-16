- [« Yaf_View_Interface::render](yaf-view-interface.render.md)
- [Yaf_View_Simple »](class.yaf-view-simple.md)

- [PHP Manual](index.md)
- [Yaf_View_Interface](class.yaf-view-interface.md)
- Призначення setScriptPath

# Yaf_View_Interface::setScriptPath

(Yaf \>u003d1.0.0)

Yaf_View_Interface::setScriptPath — Призначення setScriptPath

### Опис

abstract public **Yaf_View_Interface::setScriptPath**(string
`$template_dir`): void

Встановлює базовий каталог шаблонів, зазвичай викликається в
[Yaf_Dispatcher](class.yaf-dispatcher.md)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`template_dir`
Абсолютний шлях до каталогу шаблонів за промовчанням
[Yaf_Dispatcher](class.yaf-dispatcher.md) використовується
[application.directory](yaf.appconfig.md#configuration.yaf.directory)
. "/views".

### Значення, що повертаються
