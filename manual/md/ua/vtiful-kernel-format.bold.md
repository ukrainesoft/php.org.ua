- [« Vtiful\Kernel\Format::align](vtiful-kernel-format.align.md)
- [Vtiful\Kernel\Format::italic »](vtiful-kernel-format.italic.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Format](class.vtiful-kernel-format.md)
- Напівжирний

# Vtiful\Kernel\Format::bold

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Format::bold - Напівжирний

### Опис

public **Vtiful\Kernel\Format::bold**(resource `$handle`)

Напівжирний формат
[Vtiful\Kernel\Format](class.vtiful-kernel-format.md)

### Список параметрів

`handle`
Дескриптор файлу xlsx

### Значення, що повертаються

Ресурс

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel  u003d new \Vtiful\Kernel\Excel($config);$fileObject u003d $excel->fileName('tutorial01.xlsx') ;$fileHandleu003du003d$fileObject->getHandle();$boldStyleu003du003d\Vtiful\Kernel\Format::bold($fileHandle);$fileObject->header(['name', 'age'])    ->data([ ['viest', 21]])   ->setColumn('A:A', 200, $boldStyle)   ->output();?> `
