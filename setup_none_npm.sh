#! /bin/bash
pushd () {
    command pushd "$@" > /dev/null
}

popd () {
    command popd "$@" > /dev/null
}

pushd none_npm
if [ ! -d "nixie" ]; then
  git clone https://github.com/nkapliev/nixie.git
  pushd nixie
  git checkout 5a0be5266d939f108a719efdc8d4b4a8d2b7a0fd
  popd
fi
popd
