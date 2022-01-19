module.exports = {
    name: "kf2",
    description: "Gives random killing floor 2 role",
    execute(message, args, Discord) {
        if (args[0] === "join" && !players.includes(message.author.toString())) {
            message.channel.send(message.author.toString() + " Added To The Game");
            players[count] = message.author.toString();
            count++;
        } else if (
            args[0] === "join" &&
            players.includes(message.author.toString())
        ) {
            message.channel.send(
                message.author.toString() + " Is Already In The Game"
            );
        } else if (args[0] == "show") {
            if (players.length === 0) message.channel.send("No Players");
            else message.channel.send(players);
        } else if (args[0] == "leave") {
            let tmp = [];
            let i = 0;
            let o = 0;
            while (i != players.length) {
                if (players[i] != message.author.toString()) {
                    tmp[o] = players[i];
                    o++;
                }
                i++;
            }
            players = tmp;
            count--;
            message.channel.send(message.author.toString() + " Has Left The Game");
        } else if (args[0] == "clear") {
            players = [];
            count = 0;
            message.channel.send("The game has been cleared!");
        } else if (args[0] == "start") {
            if (players.length > 0) {
                let i = 0;
                let roles = [
                    "Beserker",
                    "Commando",
                    "Support",
                    "Field Medic",
                    "Demolitionist",
                    "Firebug",
                    "Gunslinger",
                    "Sharpshooter",
                    "Swat",
                    "Survivalist",
                ];
                let medic = Math.floor(Math.random() * players.length);
                let selectedRoles = [];

                for (let chosen = 0; chosen < players.length; chosen++) {
                    selectedRoles[chosen] =
                        roles[Math.floor(Math.random() * roles.length)];
                }

                selectedRoles[Math.floor(Math.random() * players.length)] =
                    "Field Medic";
                let output = "";

                for (let chosen = 0; chosen < players.length; chosen++) {
                    output +=
                        players[chosen] + " will be " + selectedRoles[chosen] + "\n";
                }
                message.channel.send(output);
            } else {
                message.channel.send("No Players");
            }
        } else if (args[0] == "help") {
            message.channel.send(
                "Use '-kf2 join' to join the session\nUse '-kf2 leave' to leave the session\nUse '-kf2 clear' to remove all players from the session\nUse '-kf2 show' to get a list of all players currently in the session\nWhen you're ready to start, use'-kf2 start' to randomly assign perks to players"
            );
        } else {
            message.channel.send(
                "Argument(s) not recognised. For more information, type '-kf2 help'"
            );
        }
    },
};

let players = [];
let count = 0;