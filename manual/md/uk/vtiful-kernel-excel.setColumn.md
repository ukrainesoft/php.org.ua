- [« Vtiful\Kernel\Excel::output](vtiful-kernel-excel.output.md)
- [Vtiful\Kernel\Excel::setRow »](vtiful-kernel-excel.setRow.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- встановити стовпець

# Vtiful\Kernel\Excel::setColumn

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::setColumn — Встановити стовпець

### Опис

public **Vtiful\Kernel\Excel::setColumn**(string `$range`, float
`$width`, resource `$format` u003d ?)

Встановити формат шпальти.

### Список параметрів

`range`
початкові та кінцеві рядки координат осередку

`width`
ширина стовпця

`format`
ресурс формату осередку

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel  u003d new \Vtiful\Kernel\Excel($config);$fileObject u003d $excel->fileName('tutorial01.xlsx') ;$fileHandleu003du003d$fileObject->getHandle();$boldStyle u003d \Vtiful\Kernel\Format::bold($fileHandle);$fileObject->header(['name', 'age'])    ->data([ ['viest', 21]])   ->setColumn('A:A', 200, $boldStyle)   ->output(); `
