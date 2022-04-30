#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$OWNER" ] || echo "Found it! \$OWNER is set to [ $OWNER ]"

echo "near call \$CONTRACT getPlayer '{\"team\":"\$1"}' --accountId \$OWNER --amount \$2"
echo 
echo 
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER
echo \$1 = $1 '(Team)'
echo \$2 = $2 '(Minumum 2 Near)'
echo
echo ---------------------------------------------------------
near call $CONTRACT getPlayer '{"team":"'"$1"'"}' --accountId $OWNER --amount "'$2'"
echo ---------------------------------------------------------
echo 

exit 
