# Destiny 2: Beyond Light ARG
**What we know so far**.

The [Collector's Edition (CE) of Beyond Light](https://eu.bungiestore.com/collections/collectors-edition/products/preorder-destiny-2-beyond-light-collectors-edition-no-game-code) contains the following items: a bag, a canteen, a soundtrack CD, a sticker, a postcard, a letter/report, a "mysterious logbook" and a statue of a pyramid ship.

Out of these, we have found things of interest on the postcard, the letter/report, the pyramid and the logbook.

High res images and PDFs exist [here (Google Drive)](https://drive.google.com/file/d/1ie8Iiycnx6vQCKz2JwtBFfahvJHUyTaM/view?usp=sharing), courtesy of Bachmanetti ([Twitter](https://twitter.com/bachmanetti), [Reddit](https://www.reddit.com/u/bachmanetti)).

## Table of Contents
1. [Things of Interest](#things-of-interest)
   1. [The Pyramid Statue](#the-pyramid-statue)
   2. [The Postcard](#the-postcard)
   3. [The Letter](#the-letter)
   4. [The Logbook](#the-logbook)
2. [The Solutions](#the-solutions)
   1. [The Code from the Pyramid](#the-code-from-the-pyramid)
   2. [Emblem Codes](#emblem-codes)
      1. [(CE Owners Only) The Postcard](#ce-owners-only-the-postcard)
      2. [(Everyone) The Tube/Rod Puzzle](#everyone-the-tuberod-puzzle)
      3. [(Everyone) The Dot Letter Puzzle](#everyone-the-dot-letter-puzzle)
      4. [(Everyone) The Graph Puzzle](#everyone-the-graph-puzzle)
3. [The Unsolved Mysteries](#the-unsolved-mysteries)
4. [The Dead Ends/Red Herrings](#the-dead-ends)
   1. [4K Background Maze/Game of Life](#4k-background-maze)

## Things of Interest

### The Pyramid Statue
Officially called "The Splinter" in the guide explaining how it works, the statue has three modes: On, Code, Off. In Code mode, it blinks in a repeating pattern of about a minute, with a combination of short, long and pulsating blinks. This code has been cracked, see [The Code From the Pyramid](#the-code-from-the-pyramid).

### The Postcard

![The backside of the postcard, containing some text (see below)](assets/img/postcard-pg2.png)
Image credit: Bachmanetti ([Twitter](https://twitter.com/bachmanetti), [Reddit](https://www.reddit.com/u/bachmanetti)). Screenshot from page 2 of [original PDF](https://drive.google.com/file/d/1ie8Iiycnx6vQCKz2JwtBFfahvJHUyTaM/view).

The postcard contains a line of red text containing the following three parts: `ca 0 1 9 9 1 0707 B´ID`, `N N N - N N N - N N N`, `S T R   D ST`
The first and third part are equal on all postcards. The second part is unique for each postcard, and is an emblem code that can be redeemed for an emblem at [bungie.net/redeem](https://bungie.net/redeem). **THE CODE IS UNIQUE AND USABLE ONCE ONLY! DO NOT SHARE YOURS WITH OTHERS BEFORE YOU HAVE REDEEMED IT!**

The first part seems to be a reference to Bungie itself (The company was started in 1991, and 0707 (July 7) is Bungie Day).

The third part seems to be a reference to "Stardust", which has been rumoured to be an internal codename, first for Season of Arrivals, then for Beyond Light. Its appearance here seems to support the latter. May also be an allusion to the seeming fact that The Nine have an interest in Europa (as detailed in [The Letter/Vanguard Report](#the-letter)).

### The Letter
Write about the letter

### The Logbook
Write about the logbook

## The Solutions
There are several puzzles. Most are found in the logbook. We have solved some.

### The Code from the Pyramid
The solution to this mystery can be found by combining the blinking of the pyramid on Code mode with the table on Page 1.

![The first page of the Logbook. There is a table with 5 rows and 23 columns. To the right of each row is a number. Top left of the table is the number 0](assets/img/logbook-pg1-cutout-1.jpg)
Image credit: Bachmanetti ([Twitter](https://twitter.com/bachmanetti), [Reddit](https://www.reddit.com/u/bachmanetti)). Screenshot from page 2 of [original PDF](https://drive.google.com/file/d/1Ib5OXH3UQr-6eG-eXlQEvMjsdV1p2Y45/view).

To the left of the first row of the table is the number 0.
To the right of the table, one on each row, we find the following numbers:

```
11350
22699
34050
45399
56750
```

[Here is a 63 second video of the Splinter blinking](https://twitter.com/i/status/1318568351665442817), courtesy of Melmsie ([Twitter](https://twitter.com/realmelmsie)). Note the softer "pulsing" blinks that appear about every 11 seconds.

~~![66-second video of the splinter blinking](assets/video/bachmanetti-shard-66s.mp4)~~ Embedding doesn't work :(

Bachmanetti figured out that the numbers to the left of the table are timestamps (in milliseconds), and that they correspond more or less exactly with the pulsing blinks. This means that each cell in the table roughly corresponds to half a second. If we fill in the half-seconds where the Splinter is lit (not counting our pulse blinks), we get the following result:

![The same table with several cells filled](assets/img/choose.png)

Image credit: Dzho (Dzho#1101 on Discord), [original](https://cdn.discordapp.com/attachments/768122197725806643/768235162353664050/unknown.png)

This spells out CHOOSE. (Dzho actually noticed the split into five sequences and made this image before Bachmanetti realized the numbers are timestamps)

There is a hint about where we can use this code, too. Underneath the table is the following text:

```
> ht
  tps:
  //b.n
  et/analyze
```

This is easily understood as https://bungie.net/analyze, which indeed is a webpage that contains a code entry field.

To fill in the code, one must be logged in to Bungie.net and have redeemed one of the CE postcard codes (in essence, you must be an owner of the CE). If you do this (and wait a bit for the sync to update your permissions in the background somewhere), then entering "CHOOSE" into the field will give you a screen like the following:

![Screenshot of bungie.net/analyze after successfull code entry](assets/img/bungie-net-analyze.png)
Image courtesy: Myrzir (Myrzir#0934 on Discord), [original](https://cdn.discordapp.com/attachments/768122197725806643/768556752077062204/unknown.png)

This is a countdown, specifically counting down to **Thursday Nov 5 at 11 AM PDT** (18:00 UTC, one hour after reset). This seems to be a countdown. If you are a CE owner, check back on the page after the countdown ends! Chances are this will be the start of the ARG proper, and that we will get instructions for the next step on this page.

**NOTE: The page doesn't seem to work properly on mobile, nor in Firefox and Safari browsers. If you are having trouble with these browsers, try entering the code using another browser**

### Emblem Codes
Most of the puzzles so far have resulted in emblem codes. There is also one emblem code that is unique to owners of the CE.

#### (CE Owners Only) The postcard
There is a code printed on the postcard which is _single use_ and unique for each postcard. It can be redeemed on [bungie.net/redeem](https://bungie.net/redeem)

#### (Everyone) The Tube/Rod Puzzle
There are tubes/rods several places. Page 14. Page 27. Page 14 contains the code for the puzzle: match rods of the same length on page 27 and write the corresponding letters from top to bottom. The sequence of rods of length 9 is a code for an emblem: XXX-XXX-XXX (Redeem at [bungie.net/redeem](https://bungie.net/redeem))

#### (Everyone) The Dot Letter Puzzle
Explain. Page 27 and Page 12.

#### (Everyone) The Graph Puzzle
Explain. Page 39.

## The Unsolved Mysteries
Do we have any?

## The Dead Ends
We've looked so diligently we found mysteries where there were none. I list them here.

### 4K Background Maze
Cozmo confirmed on Reddit that [this is just an image compression artefact](https://www.reddit.com/r/raidsecrets/comments/jekt2x/beyond_light_wallpaper_game_of_life_investigation/g9kjexg).
