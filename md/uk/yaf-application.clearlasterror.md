- [« Yaf_Application::bootstrap](yaf-application.bootstrap.md)
- [Yaf_Application::\_\_construct »](yaf-application.construct.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Очистка інформації з останньої помилки

# Yaf_Application::clearLastError

(Yaf \> u003d 2.1.2)

Yaf_Application::clearLastError — Очищення інформації з останньої помилки

### Опис

public **Yaf_Application::clearLastError**():
[Yaf_Application](class.yaf-application.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Application::clearLastError()****

` <?phpfunction error_handler($errno, $errstr, $errfile, $errline) {  Yaf_Application::app()->clearLastError(); var_dump(Yaf_Application::app()->getLastErrorNo());}$config u003d array( "application" u003d> array(   "directory" u003d> "/tmp/notexists", th| " " u003d>|0,| );?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
