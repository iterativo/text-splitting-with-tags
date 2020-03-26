# String Splitting Coding Exercise

Split the provided text into chunks of length `chunkLen` with appended `(x/n)` tag,

where:

```text
x = current chunk number
n = total number of chunks
```

## Example

### Input

```js
text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis accumsan quam, eget venenatis purus. Curabitur ac massa quis sem porta imperdiet vitae eget ipsum. Pellentesque dapibus lacus non viverra fermentum. Cras sodales metus vel quam dictum, ac luctus mauris sollicitudin. Aenean at dolor lobortis, condimentum sapien id, bibendum velit. Nunc in nunc erat. Integer ligula nisi, porttitor mattis venenatis vitae, facilisis vitae justo. Donec tristique sem vel diam tristique, eget venenatis enim faucibus. Fusce urna quam, bibendum vel turpis quis, porta eleifend diam. Cras arcu ex, sagittis ac hendrerit a, venenatis non sapien. Mauris vehicula semper ligula. Fusce vulputate tempus nisi, sit amet rutrum est commodo eu. Ut semper sodales sapien vel maximus. Nulla lacinia convallis ex, eu mollis nibh dapibus eu.";

chunkLen = 25;
```

### Output

```js
[ 'Lorem ipsum dolor (01/46)',
  'sit amet, consecte(02/46)',
  'tur adipiscing eli(03/46)',
  't. Morbi quis accu(04/46)',
  'msan quam, eget ve(05/46)',
  'nenatis purus. Cur(06/46)',
  'abitur ac massa qu(07/46)',
  'is sem porta imper(08/46)',
  'diet vitae eget ip(09/46)',
  'sum. Pellentesque (10/46)',
  'dapibus lacus non (11/46)',
  'viverra fermentum.(12/46)',
  ' Cras sodales metu(13/46)',
  's vel quam dictum,(14/46)',
  ' ac luctus mauris (15/46)',
  'sollicitudin. Aene(16/46)',
  'an at dolor lobort(17/46)',
  'is, condimentum sa(18/46)',
  'pien id, bibendum (19/46)',
  'velit. Nunc in nun(20/46)',
  'c erat. Integer li(21/46)',
  'gula nisi, porttit(22/46)',
  'or mattis venenati(23/46)',
  's vitae, facilisis(24/46)',
  ' vitae justo. Done(25/46)',
  'c tristique sem ve(26/46)',
  'l diam tristique, (27/46)',
  'eget venenatis eni(28/46)',
  'm faucibus. Fusce (29/46)',
  'urna quam, bibendu(30/46)',
  'm vel turpis quis,(31/46)',
  ' porta eleifend di(32/46)',
  'am. Cras arcu ex, (33/46)',
  'sagittis ac hendre(34/46)',
  'rit a, venenatis n(35/46)',
  'on sapien. Mauris (36/46)',
  'vehicula semper li(37/46)',
  'gula. Fusce vulput(38/46)',
  'ate tempus nisi, s(39/46)',
  'it amet rutrum est(40/46)',
  ' commodo eu. Ut se(41/46)',
  'mper sodales sapie(42/46)',
  'n vel maximus. Nul(43/46)',
  'la lacinia convall(44/46)',
  'is ex, eu mollis n(45/46)',
  'ibh dapibus eu.(46/46)' ]
```
