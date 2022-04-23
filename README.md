Footbal Player
==============

The project is about choosing a random football player from a football team entered by the user.
Firstly, users select a team and deposit minumum 2 near. 
When call the contract, the user is given a random player from the selected team.


## Get Started
==============

Install yarn (package manager) from terminal like this:
install -g yarn

INSTALL `NEAR CLI` first like this: `npm i -g near-cli`
npm i -g near-cli

clone this repo to a local folder:
git clone https://github.com/Musti2735/NEAR-Poject-FootballPlayer

Then install dependencies and node modules using yarn package manager :
yarn

run yarn build:release

run near dev-delpoy ./build/release/simple.wasm

export CONTRACT=dev-####-####

or RUN

./scripts/1.dev-deploy.sh


## Usage
==============

There are 3 teams on the project. Manchester United, Paris Saint Germen and Liverpool.
There are 3 football palyers in each teams.(Teams and players could be more) 
 
Select a team. There are ony 3 teams you can chose.('PSG', 'MANU', 'LIVERPOOL')
You must write one of this teams on the value of 'team' parameter.
Add your testnet account.
Make sure to attach 2 NEAR. If near amount is less 2 near, assert code runs.

It must be like that : 
"near call $CONTRACT getPlayer '{"team":"####"}' --accountId ####.testnet --amount #"

For example : 
"near call $CONTRACT getPlayer '{"team":"PSG"}' --accountId mycodebag.testnet --amount 2"

or RUN

./scripts/2.getContract.sh

Finally, selected player adds the storage.

You can see your selected random player on terminal and storage using from https://github.com/near-examples/near-account-utils repostories.



