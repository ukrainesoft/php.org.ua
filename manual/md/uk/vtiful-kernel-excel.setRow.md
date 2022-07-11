- [«
Vtiful\Kernel\Excel::setColumn](vtiful-kernel-excel.setColumn.md)
- [Vtiful\Kernel\Format »](class.vtiful-kernel-format.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Встановити рядок

# Vtiful\Kernel\Excel::setRow

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::setRow — Встановити рядок

### Опис

public **Vtiful\Kernel\Excel::setRow**(string `$range`, float `$height`,
resource `$format` u003d ?)

Встановити формат рядка.

### Список параметрів

`range`
початкові та кінцеві рядки координат осередку

`height`
висота рядка

`format`
ресурс формату осередку

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel  u003d new \Vtiful\Kernel\Excel($config);$fileObject u003d $excel->fileName('tutorial01.xlsx') ;$fileHandleu003du003d$fileObject->getHandle();$boldStyle u003d \Vtiful\Kernel\Format::bold($fileHandle);$fileObject->header(['name', 'age'])    ->data([ ['viest', 21]])   ->setRow('A1', 20, $boldStyle,)   ->output(); `
