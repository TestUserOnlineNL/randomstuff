void main() {
  var str = 'apple';
  str.runes.forEach((c) {
    var ch = new String.fromCharCode(c);
    print(ch);
  });
}
