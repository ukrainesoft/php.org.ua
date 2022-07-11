- [« Приклади](com.examples.md)
- [Масиви та властивості COM у стилі масивів
»](com.examples.arrays.md)

- [PHP Manual](index.md)
- [Приклади](com.examples.md)
- For Each

## For Each

Ви можете використовувати конструкцію
[foreach](control-structures.foreach.md) для ітерації контенту
стандартного COM/OLE IEnumVariant. Іншими словами, це означає, що ви
можете використовувати foreach там, де ви використовували `For Each` у коді
VB/ASP.

**Приклад #1 For Each в ASP**

`` aspcode
<%
Set domainObject u003d GetObject("WinNT://Domain")
For Each obj in domainObject
Response.Write obj.Name & "<br />"
Next
%>
````

**Приклад #2 foreach у PHP**

` <?php$domainObject u003d new COM("WinNT://Domain");foreach ($domainObject as $obj) {   echo $obj->Name . "<br />";}?> `
