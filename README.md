## 1. Create the perfect potion

During Halloween night 🎃, a witch 🧙‍♀️ is preparing a magical brew. She has a list of potions, each with an associated power, and she wants to combine two of them to achieve a specific total power.

Given a list of integers where each number represents the power of a potion 🧪 and an integer representing the target power, you must find the index of the first two potions that add up to exactly the target power.

## 2. Zombie horde

In an epic battle between zombies 🧟 and humans 👮‍♂️, both sides have a list of fighters with specific attack powers.

The battle unfolds in rounds, and each round pits each fighter against their opponent.

The side with the greater attack power wins the round, and their power is added to the next fighter on their team.

In case of a tie, both fighters fall and do not affect the next round.

Given two strings zombies and humans, where each digit (from 1 to 9) represents a fighter's attack power, determine who is left at the end and with how much attack power.

Important: Both strings will always have the same length.

The output is a string representing the final result of the battle.

If a zombie is left, return its power followed by "z", for example "3z".
If a human is left, return its power followed by "h", for example "2h".
If there's a tie and neither is left with power at the end, return "x".

## 3. Escape from Freddy's nightmare

You are trapped in a nightmare where Freddy Krueger is chasing you 😭. The dream is represented by a maze of cells, where each cell has a numeric value indicating the danger level of that part of the dream.

You must find the safest path (i.e., the one with the lowest total danger value) from the top-left corner to the bottom-right corner of the matrix.

In this challenge, you can only move right or down (you cannot move back or diagonally), and you must calculate the total danger level of the safest path.

The nightmare is represented by an n x m matrix called dream where each cell is a positive number representing the danger level of that cell in the dream.

And you have to return the total danger value of the safest path from the top-left corner (position [0][0]) to the bottom-right corner (position [n-1][m-1]).

## 4. Find the killer

A person has been murdered on Halloween night 🔪. Using a spell 🧙‍♀️, we managed to hear their last whisper but it is very weak and doesn't allow us to identify who might have been the killer.

The information it provides us:

whisper: string representing what the victim tried to say before dying

suspects: list of strings representing the names of all the suspects.

We have to keep in mind that the whisper whisper has some rules:

Each ~ represents an uncertain letter in the whisper.
Each position in the whisper corresponds to a position in the killer's name.
The length of the whisper doesn't always represent the full length of the name, as the victim might have died before finishing saying it.
But if the last character of the whisper is a $, then the killer's name ended there.
Your goal is to find out who could be the killer! You must return:

If only one name matches the whisper pattern, return that name.
If there are multiple names that match, return all names separated by commas.
If no name matches, return an empty string ("").
Letter case doesn't matter.

## 5. Terror on Pyramid Head

You are trapped in Silent Hill, in a square room of size n x n and the feared Pyramid Head (▲) is somewhere in the room, moving towards you (T).

You cannot move, and Pyramid Head moves one cell per turn, in any of the four cardinal directions (up, down, left, right), but always chooses the shortest path to your position. Your goal is to determine if Pyramid Head can reach you.

The room is represented by an n x n matrix:

T: your position (where you are trapped).
▲: the initial position of Pyramid Head.
.: empty spaces where Pyramid Head can move.
#: walls that Pyramid Head cannot pass through.
Write a function to determine if Pyramid Head will be able to reach you. If Pyramid Head can reach you, return the number of steps it takes to achieve this, if it cannot reach you then return -1.

