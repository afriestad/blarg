git submodule update
pushd ./website-app
npm install
ng build --prod --baseHref="/blarg/image-arrange" --deployUrl="https://afriestad.github.io/blarg/image-arrange/" --outputPath="../docs/image-arrange"
popd
