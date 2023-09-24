import 'dart:convert';

void main() {
  final users = [
    {'name': 'John Doe', 'occupation': 'gardener'},
    {'name': 'Roger Roe', 'occupation': 'driver'},
    {'name': 'Thomas Brown', 'occupation': 'teacher'}
  ];

  final res = json.encode(users);
  print(res);
}
