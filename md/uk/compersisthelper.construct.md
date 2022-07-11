- [« COMPersistHelper](class.compersisthelper.md)
- [COMPersistHelper::GetCurFileName
»](compersisthelper.getcurfilename.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Конструктор класу COMPersistHelper

# COMPersistHelper::\_\_construct

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::\_\_construct — Конструктор класу COMPersistHelper

### Опис

public
**COMPersistHelper::\_\_construct**(?[variant](class.variant.md)
`$variant` u003d **`null`**)

Створює об'єкт класу COMPersistHelper, зазвичай пов'язаний з `variant`.

### Список параметрів

`variant`
Об'єкт COM, який реалізує інтерфейс **IDispatch**. Для успішного виклику
методів [COMPersistHelper](class.compersisthelper.md), об'єкт повинен
реалізовувати інтерфейси **IPersistFile**, **IPersistStream** та/або
**IPersistStreamInit**. Передача **`null`** як `variant`
виправдана тільки в тому випадку, якщо об'єкт буде завантажений з потоку
допомогою
[COMPersistHelper::LoadFromStream()](compersisthelper.loadfromstream.md).
