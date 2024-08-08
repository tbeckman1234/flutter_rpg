import 'package:flutter/material.dart';
import 'package:flutter_rpg/screens/create/create.dart';
import 'package:flutter_rpg/screens/home/character_card.dart';
import 'package:flutter_rpg/services/character_store.dart';
import 'package:flutter_rpg/shared/styled_button.dart';
import 'package:flutter_rpg/shared/styled_text.dart';
import 'package:flutter_rpg/theme.dart';
import 'package:provider/provider.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {

  @override
  void initState() {
    Provider.of<CharacterStore>(context, listen: false)
      .fetchCharactersOnce(); 
    
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: const StyledTitle('Your Characters'),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Expanded(
              child: Consumer<CharacterStore>(
                builder: (context, value, child) {
                  return ListView.builder(
                    itemCount: value.characters.length,
                    itemBuilder: (_, index) {
                      return Dismissible(
                        key: ValueKey(value.characters[index].id),
                        confirmDismiss: (direction) async {
                          if (value.characters[index].isFav == false) {

                            return await showDialog (context: context, builder: (ctx) {

                            String characterName = value.characters[index].name;

                              return AlertDialog (
                                title: const StyledHeading('Confirm Deletion'),
                                content: StyledText('Are you sure you want to delete $characterName?'),
                                actions: [
                                  Row(
                                    children: [
                                      StyledButton(
                                        onPressed: () => Navigator.of(ctx).pop(true),
                                        child: const StyledHeading('Delete'),
                                      ),
                                      StyledButton(
                                        onPressed: () => Navigator.of(ctx).pop(false),
                                        child: const StyledHeading('Cancel'),
                                      ),
                                    ],
                                  ),
                                ],
                                actionsAlignment: MainAxisAlignment.center,
                              ); 
                            });
                          } else {
                            ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                              content: const StyledHeading("Can't delete a favorite character."),
                              showCloseIcon: true, 
                              duration: const Duration(seconds: 2),
                              backgroundColor: AppColors.secondaryColor,
                            ));
                            return false;
                          }

                        },
                        onDismissed: (direction) {
                          Provider.of<CharacterStore>(context, listen: false)
                            .removeCharacter(value.characters[index]);
                        },
                        child: CharacterCard(value.characters[index])
                      );
                    },
                  );
                }
              ),
            ),
            StyledButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(
                  builder: (ctx) => const CreateScreen(),
                ));
              },
              child: const StyledHeading('Create New'),
            )
          ],
        ),
      ),
    );
  }
}