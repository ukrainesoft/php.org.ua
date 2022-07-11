- [« Vtiful\Kernel\Format](class.vtiful-kernel-format.md)
- [Vtiful\Kernel\Format::bold »](vtiful-kernel-format.bold.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Format](class.vtiful-kernel-format.md)
- Вирівнювання

# Vtiful\Kernel\Format::align

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Format::align — Вирівнювання

### Опис

public **Vtiful\Kernel\Format::align**(resource `$handle`, int `$style`)

Встановити вирівнювання осередку

### Список параметрів

`handle`
Дескриптор файлу xlsx

`style`
Константа [Vtiful\Kernel\Format](class.vtiful-kernel-format.md)

### Значення, що повертаються

Ресурс

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel  u003d new \Vtiful\Kernel\Excel($config);$fileObject u003d $excel->fileName('tutorial01.xlsx') ;$fileHandleu003du003d$fileObject->getHandle();$alignStyleu003du003d\Vtiful\Kernel\Format::align($fileHandle, \Vtiful\Kernel\Format::FORMAT_ALIGN_LEFT);$fileObject->header(['name', 'age'])   ->data([['viest', 21]]))    ->setColumn('A:A', 200, $align)   ->output();?> `
