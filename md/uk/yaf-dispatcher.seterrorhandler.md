- [«
Yaf_Dispatcher::setDefaultModule](yaf-dispatcher.setdefaultmodule.md)
- [Yaf_Dispatcher::setRequest »](yaf-dispatcher.setrequest.md)

- [PHP Manual](index.md)
- [Yaf_Dispatcher](class.yaf-dispatcher.md)
- Встановлює обробник помилок

# Yaf_Dispatcher::setErrorHandler

(Yaf \>u003d1.0.0)

Yaf_Dispatcher::setErrorHandler — Встановлює обробник помилок

### Опис

public **Yaf_Dispatcher::setErrorHandler**(call `$callback`, int
`$error_types`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

Встановлює обробник помилок Yaf. Якщо
[application.dispatcher.throwException](yaf.appconfig.md#configuration.yaf.dispatcher.throwexception)
вимкнений, Yaf буде викликати перехоплювану помилку у випадку
виникнення непередбачуваних помилок.

Таким чином, цей обробник помилок буде викликатись у випадку
виникнення помилки.

### Список параметрів

`callback`
Callback-функція, що викликається

`error_types`

### Значення, що повертаються

### Дивіться також

- [Yaf_Dispatcher::throwException()](yaf-dispatcher.throwexception.md) -
Включає/вимикає викидання виключень
- [Yaf_Application::getLastErrorNo()](yaf-application.getlasterrorno.md) -
Отримати код останньої помилки
- [Yaf_Application::getLastErrorMsg()](yaf-application.getlasterrormsg.md) -
Отримати останнє повідомлення про помилку
