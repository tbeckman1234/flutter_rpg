import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_rpg/models/skill.dart';
import 'package:flutter_rpg/models/stats.dart';
import 'package:flutter_rpg/models/vocation.dart';

class Character with Stats {
  
  // constuctor
  Character({
    required this.name, 
    required this.slogan, 
    required this.vocation,
    required this.id
  });

  // fields
  final Set<Skill> skills = {};
  final Vocation vocation;
  final String name;
  final String slogan;
  final String id;
  bool _isFav = false;

  // getters
  bool get isFav => _isFav;

  // methods
  void toggleIsFav() {
    _isFav = !_isFav;
  }

  void updateSkill(Skill skill) {
    skills.clear();
    skills.add(skill);
  }

  // character to firestore (map)
  Map<String, dynamic> toFirestore() {
    return{
      'name': name,
      'slogan': slogan,
      'isFav': _isFav,
      'vocation': vocation.toString(),
      'skills': skills.map((s) => s.id).toList(),
      'stats': statsAsMap,
      'points': points,
    };
  }

  // character from firestore
  factory Character.fromFirestore(
    DocumentSnapshot<Map<String, dynamic>> snapshot,
    SnapshotOptions? options
  ) {

    // get data from snapshot
    final data = snapshot.data()!;

    // make character instance
    Character character = Character(
      name: data['name'],
      slogan: data['slogan'],
      id: snapshot.id,
      vocation: Vocation.values.firstWhere((v) => v.toString()== data['vocation']),
    );

    // update skills
    for (String id in data['skills']) {
      Skill skill = allSkills.firstWhere((s) => s.id == id);
      character.updateSkill(skill);
    }

    // set isFav
    if (data['isFav'] == true) {
      character.toggleIsFav();
    }

    // update stats & points
    character.setStats(points: data['points'], stats: data['stats']);

    return character;

  }
}

// dummy character data example

List<Character> characters = [
  Character(id: '1', name: 'Klara', vocation: Vocation.wizard, slogan: 'Im a hairy wizard!'),
  Character(id: '2', name: 'Jonny', vocation: Vocation.junkie, slogan: 'Light it up...'),
  Character(id: '3', name: 'Crimson', vocation: Vocation.raider, slogan: 'Fire in the hole!'),
  Character(id: '4', name: 'Thomas', vocation: Vocation.ninja, slogan: 'Bruh'),
];
