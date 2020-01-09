cd .\ts;
tsc;
cd ..;
webpack .\dist\sketch.js --output-path .\dist --output-filename '[name].bundle.js' --mode development