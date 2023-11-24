
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                await s4d.client.login('MTA0MDk4NDA5Nzc2MzM3MzA5Ng.GHjga8.fcamU_8tAL5CDBC-SRjkJKv6dCsmpaW52dBU-4').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '?setup') {
    s4dmessage.channel.send(String('`SELENIUM`                            `Selenium Basic 0.1 Setup Install :`                        `1%` /'));
    await delay(Number(1)*1000);
    .channels.create('arriving', {
            type: 'text'
        });
    await delay(Number(1)*1000);
    .channels.create('leaving', {
            type: 'text'
        });
    await delay(Number(1)*1000);
    s4dmessage.channel.send(String('`SELENIUM`                            `Selenium Basic 0.1 Setup Install :`                        `6%` //////'));
    .channels.create('news', {
            type: 'text'
        });
    .channels.create('rules', {
            type: 'text'
        });
    await delay(Number(1)*1000);
    s4dmessage.channel.send(String('`SELENIUM`                            `Selenium Basic 0.1 Setup Install :`                        `16%` ////////////////'));
    .channels.create('general', {
            type: 'text'
        });
    s4dmessage.channel.send(String('`SELENIUM`                            `Selenium Basic 0.1 Setup Install :`                        `18%` //////////////////'));
    await delay(Number(1)*1000);
    .channels.create('media', {
            type: 'text'
        });
    await delay(Number(1)*1000);
    .channels.create('commands', {
            type: 'text'
        });
    s4dmessage.channel.send(String('`SELENIUM`                            `Selenium Basic 0.1 Setup Install :`                        `26%` //////////////////////////'));
    .channels.create('voice 1', {
            type: 'voice'
        });
    .channels.create('voice 2', {
            type: 'voice'
        });
    .channels.create('voice 3', {
            type: 'voice'
        });
    await delay(Number(1)*1000);
    s4dmessage.channel.send(String('`SELENIUM`                            `Selenium Basic 0.1 Setup Install :`                        `41%` /////////////////////////////////////////'));
  }

});


                return s4d;
                })();
            