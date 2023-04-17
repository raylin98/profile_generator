const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileGen = [];

rl.question(`What's your name? Nicknames are also acceptable : `, (name) => {
  profileGen.push(`Hi, my name is ${name}`);

  rl.question(`What's an activity you like doing? `, (activity) => {
    profileGen.push(`I love to ${activity}`);

    rl.question('What do you listen to while doing that? ', (music) => {
      profileGen.push(`I listen to ${music}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        profileGen.push(`${meal} is my favourite meal.`);

        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          profileGen.push(`I love to eat ${food}`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            profileGen.push(`I love ${sport}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              profileGen.push(`I have a superpower! ${superpower}`);
              console.log(profileGen);
              rl.close();
            });
          });
        });
      });
    });
  });
});
