#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 1: Build the contract (may take a few seconds)"
echo ---------------------------------------------------------
echo
echo
yarn build:release

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Deploy the contract"
echo
echo ---------------------------------------------------------
echo

# uncomment out the line below to deploy the other example contract
# near dev-deploy ./build/debug/simple.wasm

# comment the line below to deploy the other example contract
near dev-deploy ./build/release/simple.wasm

echo
echo
echo ---------------------------------------------------------
echo "Step 3: Prepare your environment for next steps"
echo 
echo 'export CONTRACT=<dev-123-456>'
echo 'export OWNER=your.testnet'
echo
echo "Next Step"
echo "./scripts/2.getContract.sh"
echo "It must be 2 parameters. First is team like Liverpool, Manu, Psg. Second is deposit"
echo "For example './scripts/2.getContract.sh Liverpool 2'"
echo
echo --------------------------------------------------------
echo
echo
exit 0